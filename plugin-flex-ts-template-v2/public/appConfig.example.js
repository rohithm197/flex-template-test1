var appConfig = {
  pluginService: {
    enabled: true,
    url: '/plugins',
  },
  insights: {
    analyticsUrl: 'http://localhost:8081',
  },
  ytica: false,
  logLevel: 'info',
  showSupervisorDesktopView: true,
  custom_data: {
    serverless_functions_protocol: 'http',
    serverless_functions_port: '3001',
    serverless_functions_domain: 'localhost',
    common: {
      log_level: 'debug',
      audit_log_ttl: 1209600,
      teams: ['Customer Supporth', 'Clinical Support', 'iTero Support', 'CAD Designers'],
      departments: [
        'General Management',
        'Marketing',
        
        'Operations',
        'Finance',
        'Sales',
        'Human Resources',
        'Purchasing',
        'Customer Service',
        'Recruiting',
      ],
    },
    features: {
      activity_skill_filter: {
        enabled: true,
        rules: {
          'On a Task': {
            required_skill: 'system_activities',
            sort_order: 0,
          },
          'On a Task, No ACD': {
            required_skill: 'system_activities',
            sort_order: 0,
          },
          'Wrap Up': {
            required_skill: 'system_activities',
            sort_order: 0,
          },
          'Wrap Up, No ACD': {
            required_skill: 'system_activities',
            sort_order: 0,
          },
          'Extended Wrap Up': {
            required_skill: 'system_activities',
            sort_order: 0,
          },
          Offline: {
            required_skill: null,
            sort_order: 100,
          },
        },
        filter_teams_view: true,
      },
      callback_and_voicemail: {
        enabled: true,
        allow_requeue: true,
        max_attempts: 3,
        auto_select_task: true,
      },
      caller_id: {
        enabled: true,
        include_outgoing_only_numbers: true,
      },
      conversation_transfer: {
        enabled: true,
        cold_transfer: true,
        multi_participant: true,
      },
      chat_to_video_escalation: {
        enabled: false,
      },
      conference: {
        enabled: true,
        hold_workaround: false,
      },
      enhanced_crm_container: {
        enabled: true,
        url: '{{serverless.url}}/features/enhanced-crm-container/index.html?line1={{task.from}}&line2={{task.direction}}',
        should_display_url_when_no_tasks: true,
        display_url_when_no_tasks: '{{serverless.url}}/features/enhanced-crm-container/index.html',
        enable_url_tab: true,
        url_tab_title: 'Web Page',
      },
      internal_call: {
        enabled: true,
      },
      scrollable_activities: {
        enabled: true,
      },
      supervisor_barge_coach: {
        enabled: true,
        agent_coaching_panel: true,
        supervisor_monitor_panel: true,
        agent_assistance: true,
        supervisor_alert_toggle: true,
      },
      omni_channel_capacity_management: {
        enabled: false,
        channel: 'chat',
        default_max_capacity: 2,
      },
      device_manager: {
        enabled: false,
        input_select: false,
      },
      dual_channel_recording: {
        enabled: false,
        channel: 'worker',
        exclude_attributes: [],
        exclude_queues: [],
      },
      pause_recording: {
        enabled: true,
        include_silence: false,
        indicator_banner: false,
        indicator_permanent: true,
      },
      activity_reservation_handler: {
        enabled: false,
        system_activity_names: {
          available: 'Available',
          onATask: 'On a Task',
          onATaskNoAcd: 'On a Task, No ACD',
          wrapup: 'Wrap Up',
          wrapupNoAcd: 'Wrap Up, No ACD',
          extendedWrapup: 'Extended Wrap Up',
        },
      },
      teams_view_filters: {
        enabled: true,
        log_filters: false,
        applied_filters: {
          activities: true,
          email: true,
          department: true,
          queue_no_worker_data: false,
          queue_worker_data: false,
          team: true,
          agent_skills: true,
        },
      },
      supervisor_capacity: {
        enabled: true,
      },
      schedule_manager: {
        enabled: true,
        serverless_domain: 'schedule-manager-5057-dev.twil.io',
      },
      multi_call: {
        enabled: false,
      },
      hang_up_by: {
        enabled: true,
      },
      chat_transfer: {
        enabled: false,
      },
      agent_automation: {
        enabled: true,
        configuration: [
          {
            channel: 'voice',
            auto_accept: false,
            auto_select: true,
            auto_wrapup: true,
            required_attributes: [],
            required_worker_attributes: [],
            wrapup_time: 30000,
            allow_extended_wrapup: false,
            extended_wrapup_time: 0,
            default_outcome: 'Automatically completed',
          },
          {
            channel: 'chat',
            auto_accept: false,
            auto_select: true,
            auto_wrapup: true,
            required_attributes: [],
            required_worker_attributes: [],
            wrapup_time: 30000,
            allow_extended_wrapup: false,
            extended_wrapup_time: 0,
            default_outcome: 'Automatically completed',
          },
        ],
      },
      supervisor_complete_reservation: {
        enabled: true,
        outcome: 'Completed by supervisor',
      },
      canned_responses: {
        enabled: true,
        location: 'MessageInputActions',
      },
      keyboard_shortcuts: {
        enabled: true,
      },
      custom_hold_music: {
        enabled: false,
        url: '',
      },
      custom_transfer_directory: {
        enabled: true,
        worker: {
          enabled: true,
          show_only_available_workers: false,
        },
        queue: {
          enabled: true,
          show_only_queues_with_available_workers: false,
          show_real_time_data: true,
          enforce_queue_filter_from_worker_object: true,
          enforce_global_exclude_filter: false,
          global_exclude_filter: '',
        },
        external_directory: {
          enabled: true,
          skipPhoneNumberValidation: false,
          directory: [
            {
              cold_transfer_enabled: true,
              warm_transfer_enabled: true,
              label: 'Sample Entry',
              number: '+10000000000',
            },
          ],
        },
      },
      dispositions: {
        enabled: true,
        enable_notes: true,
        global: {
          require_disposition: false,
          dispositions: ['Resolved', 'Not Resolved', 'Follow-up Required', 'Escalation', 'Wrong Department'],
          text_attributes: [],
          select_attributes: [],
        },
        per_queue: {
          exampleQueueName: {
            require_disposition: true,
            dispositions: ['Promotional Sale', 'Renewal'],
            text_attributes: [],
            select_attributes: [],
          },
        },
      },
      emoji_picker: {
        enabled: true,
      },
      attribute_viewer: {
        enabled: true,
        enabled_for_agents: false,
      },
      admin_ui: {
        enabled: false,
        enable_audit_logging: true,
      },
      localization: {
        enabled: false,
        show_menu: true,
      },
      park_interaction: {
        enabled: true,
        show_list: false,
      },
      teams_view_enhancements: {
        enabled: true,
        highlight_handle_time: true,
        handle_time_warning_threshold: 180,
        handle_time_exceeded_threshold: 300,
        display_task_queue_name: true,
        columns: {
          calls: true,
          other_tasks: true,
          team: false,
          department: false,
          location: false,
          agent_skills: true,
          activity_icon: false,
        },
      },
      ring_notification: {
        enabled: false,
      },
      send_audio_rec_file: {
        enabled: true,
      },
      metrics_data_tiles: {
        enabled: false,
        queues_view_tiles: {
          active_tasks_data_tile: false,
          waiting_tasks_data_tile: false,
          longest_wait_time_data_tile: false,
          agents_by_activity_bar_chart: true,
          all_channels_data_tile: false,
          enhanced_agent_by_activity_pie_chart: false,
        },
        teams_view_tiles: {
          task_summary_tile: false,
          team_activity_tile: false,
          status_idle_color: 'limegreen',
          status_busy_color: 'royalblue',
        },
        channels: {
          Voice: {
            color: '#ADD8E6',
            SLA_data_tile: true,
            task_counts_data_tile: true,
            teams_task_summary: true,
          },
          Chat: {
            color: '#87CEFA',
            SLA_data_tile: true,
            task_counts_data_tile: true,
            teams_task_summary: true,
          },
          SMS: {
            color: '#59cef8',
            SLA_data_tile: false,
            task_counts_data_tile: false,
            teams_task_summary: true,
          },
          Video: {
            color: '#00CED1',
            SLA_data_tile: false,
            task_counts_data_tile: false,
            teams_task_summary: false,
          },
        },
        agent_activity_configuration: {
          activities: {
            Available: {
              color: 'green',
              icon: 'Accept',
            },
            Outbound: {
              color: 'darkgreen',
              icon: 'Call',
            },
            Break: {
              color: 'goldenrod',
              icon: 'Hold',
            },
            Lunch: {
              color: 'darkorange',
              icon: 'Hamburger',
            },
            Training: {
              color: 'red',
              icon: 'Bulb',
            },
            Offline: {
              color: 'grey',
              icon: 'Minus',
            },
          },
          other: {
            color: 'darkred',
            icon: 'More',
          },
        },
      },
      queues_stats_metrics: {
        enabled: false,
        assigned_tasks_column: true,
        wrapping_tasks_column: true,
        agent_activity_stats_column: true,
      },
      sip_support: {
        enabled: false,
      },
      worker_details: {
        enabled: true,
        edit_team: true,
        edit_department: true,
        text_attributes: [],
        boolean_attributes: [],
      },
      worker_canvas_tabs: {
        enabled: true,
      },
      datadog_log_integration: {
        enabled: false,
        log_level: 'info',
        api_key: '',
        intake_region: '',
        flush_timeout: 5000,
      },
      contacts: {
        enabled: true,
        enable_recents: true,
        enable_personal: true,
        enable_shared: true,
        recent_days_to_keep: 14,
        shared_agent_editable: false,
        page_size: 10,
      },
      inline_media: {
        enabled: true,
      },
      branding: {
        enabled: false,
        custom_logo_url: '',
        use_custom_colors: false,
        custom_colors: {
          main_header_background: 'rgb(6, 3, 58)',
          side_nav_background: 'rgb(255, 255, 255)',
          side_nav_border: 'rgb(202, 205, 216)',
          side_nav_icon: 'rgb(18, 28, 45)',
          side_nav_selected_icon: 'rgb(2, 99, 224)',
          side_nav_hover_background: 'rgb(225, 227, 234)',
        },
        component_theme_overrides: {},
      },
    },
  },
};
