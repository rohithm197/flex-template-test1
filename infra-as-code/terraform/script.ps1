write-host "repo $( repository )"
write-host "token $( token )"
write-host "path $( path )"
write-host "env workspace $( env.TF_WORKSPACE_SID)"


$Repo = ${ github.repository }
$BaseUri = "https://api.github.com"
$ArtifactUri = "$BaseUri/repos/$Repo/actions/artifacts"
$Token = ${ github.token } | ConvertTo-SecureString -AsPlainText
$RestResponse = Invoke-RestMethod -Authentication Bearer -Uri $ArtifactUri -Token $Token | Select-Object -ExpandProperty artifacts
if ($RestResponse){
  $MostRecentArtifactURI = $RestResponse | Sort-Object -Property created_at -Descending | where name -eq "terraformstatefile" | Select-Object -First 1 | Select-Object -ExpandProperty archive_download_url
  Write-Host "Most recent artifact URI = $MostRecentArtifactURI"
  if ($MostRecentArtifactURI){
    Invoke-RestMethod -uri $MostRecentArtifactURI -Token $Token -Authentication bearer -outfile ./state.zip
    Expand-Archive ./state.zip
    openssl enc -d -in ./state/terraform.tfstate.enc -aes-256-cbc -pbkdf2 -pass pass:"${ inputs.encryptionkey }" -out ./terraform.tfstate
  }
}

$tfdir = "${ inputs.path }"
$tf_workspace_sid = "${ env.TF_WORKSPACE_SID }"
$tf_default_workflow_sid = "${ env.TF_DEFAULT_WORKFLOW_SID }"
$tf_default_task_queue_sid = "${ env.TF_DEFAULT_TASK_QUEUE_SID }"
$tf_sales_task_queue_sid = "${ env.TF_SALES_TASK_QUEUE_SID }"
$tf_support_task_queue_sid = "${ env.TF_SUPPORT_TASK_QUEUE_SID }"
$tf_chat_task_channel_sid = "${ env.TF_CHAT_TASK_CHANNEL_SID }"
$tf_voice_task_channel_sid = "${ env.TF_VOICE_TASK_CHANNEL_SID }"
$tf_voice_flow_sid = "${ env.TF_VOICE_FLOW_SID }"
$tf_messaging_flow_sid = "${ env.TF_MESSAGING_FLOW_SID }"
$tf_chat_flow_sid = "${ env.TF_CHAT_FLOW_SID }"

terraform init

if ($tf_workspace_sid) {
  terraform import module.routing.twilio_taskrouter_workspaces_v1.flex $tf_workspace_sid
}

if ($tf_default_workflow_sid) {
  terraform import module.routing.twilio_taskrouter_workspaces_workflows_v1.default $tf_workspace_sid/$tf_default_workflow_sid
}

if ($tf_default_task_queue_sid) {
  terraform import module.routing.twilio_taskrouter_workspaces_task_queues_v1.everyone $tf_workspace_sid/$tf_default_task_queue_sid
}

if ($tf_sales_task_queue_sid) {
  terraform import module.routing.twilio_taskrouter_workspaces_task_queues_v1.sales $tf_workspace_sid/$tf_sales_task_queue_sid
}

if ($tf_support_task_queue_sid) {
  terraform import module.routing.twilio_taskrouter_workspaces_task_queues_v1.support $tf_workspace_sid/$tf_support_task_queue_sid
}      

if ($tf_chat_task_channel_sid) {
  terraform import module.routing.twilio_taskrouter_workspaces_task_channels_v1.chat $tf_workspace_sid/$tf_chat_task_channel_sid
}

if ($tf_voice_task_channel_sid) {
  terraform import module.routing.twilio_taskrouter_workspaces_task_channels_v1.voice $tf_workspace_sid/$tf_voice_task_channel_sid
}

if ($tf_voice_flow_sid) {
  terraform import module.ivr.twilio_studio_flows_v2.voice $tf_voice_flow_sid
}

if ($tf_messaging_flow_sid) {
  terraform import module.ivr.twilio_studio_flows_v2.messaging $tf_messaging_flow_sid
}

if ($tf_chat_flow_sid) {
  terraform import module.ivr.twilio_studio_flows_v2.chat $tf_chat_flow_sid
}

$terraformapply = "${ inputs.apply }"
$custom_plan_flags = "${ inputs.custom_plan_flags }"
$custom_apply_flags = "${ inputs.custom_apply_flags }"
if ($terraformapply -eq "false"){
  $terraformapply = $false
}
terraform plan $custom_plan_flags
if ($terraformapply){
  terraform apply -auto-approve $custom_apply_flags
}
$StateExists = Test-Path -Path ./terraform.tfstate -PathType Leaf
if ($StateExists){
  openssl enc -in ./terraform.tfstate -aes-256-cbc -pbkdf2 -pass pass:"${ inputs.encryptionkey }" -out ./terraform.tfstate.enc
}
