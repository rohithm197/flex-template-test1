import { getFeatureFlags } from '../../utils/configuration';
import DataTilesConfig from './types/ServiceConfiguration';

const {
  enabled = false,
  queuesViewTiles = {
    activeTasksDataTile: false,
    waitingTasksDataTile: false,
    longestWaitTimeDataTile: false,
    agentsByActivityBarChart: false,
    allChannelsDataTile: false,
    enhancedAgentByActivityPieChart: true,
  },
  teamsViewTiles = {
    taskSummaryTile: false,
    teamActivityTile: false,
    statusIdleColor: 'limegreen',
    statusBusyColor: 'royalblue',
  },
  channels = {
    voice: {
      color: '#ADD8E6',
      SLADataTile: true,
      taskCountsDataTile: true,
      teamsTaskSummaryColumn: true,
    },
    chat: {
      color: '#87CEFA',
      SLADataTile: true,
      taskCountsDataTile: true,
      teamsTaskSummaryColumn: true,
    },
    sms: {
      color: '#59cef8',
      SLADataTile: false,
      taskCountsDataTile: false,
      teamsTaskSummaryColumn: true,
    },
    video: {
      color: '#00CED1',
      SLADataTile: false,
      taskCountsDataTile: false,
      teamsTaskSummaryColumn: true,
    },
  },

  agentActivityConfiguration = {
    activities: {
      Available: { color: 'green', icon: 'Accept' },
      Outbound: { color: 'darkgreen', icon: 'Call' },
      Break: { color: 'goldenrod', icon: 'Hold' },
      Lunch: { color: 'darkorange', icon: 'Hamburger' },
      Training: { color: 'red', icon: 'Bulb' },
      Offline: { color: 'grey', icon: 'Minus' },
    },
    other: { color: 'darkred', icon: 'More' },
  },
} = (getFeatureFlags()?.features?.queues_view_data_tiles as DataTilesConfig) || {};

const { assignedTasksColumn = true, wrappingTasksColumn = true } =
  getFeatureFlags()?.features?.queues_view_data_tiles?.queuesStatsColumns || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const isActiveTasksEnabled = () => {
  return queuesViewTiles.activeTasksDataTile;
};
export const isWaitingTasksEnabled = () => {
  return queuesViewTiles.waitingTasksDataTile;
};
export const isLongestWaitTimeEnabled = () => {
  return queuesViewTiles.longestWaitTimeDataTile;
};
export const isAgentsByActivityEnabled = () => {
  return queuesViewTiles.agentsByActivityBarChart;
};
export const getChannelColors = () => {
  const channelNames = Object.keys(channels);
  const colors: { [key: string]: string } = {};
  channelNames.forEach((ch) => {
    colors[ch] = channels[ch].color;
  });
  return colors;
};
export const getChannelsConfig = () => {
  return channels;
};
export const getTaskSummaryChannels = () => {
  const enabledChannels: string[] = [];
  const channelsNames = Object.keys(channels);
  channelsNames.forEach((ch) => {
    if (channels[ch].teamsTaskSummaryColumn) enabledChannels.push(ch);
  });
  return enabledChannels;
};
export const isChannelVoice_CountsEnabled = () => {
  return channels?.voice?.taskCountsDataTile;
};
export const isChannelChat_CountsEnabled = () => {
  return channels?.chat?.taskCountsDataTile;
};
export const isChannelSMS_CountsEnabled = () => {
  return channels?.sms?.taskCountsDataTile;
};
export const isChannelVoice_SLAEnabled = () => {
  return channels?.voice?.SLADataTile;
};
export const isChannelChat_SLAEnabled = () => {
  return channels?.chat?.SLADataTile;
};
export const isChannelSMS_SLAEnabled = () => {
  return channels?.sms?.SLADataTile;
};
export const isAllChannels_SLAEnabled = () => {
  return queuesViewTiles.allChannelsDataTile;
};
export const isEnhancedAgentsByActivityPieChartEnabled = () => {
  return queuesViewTiles.enhancedAgentByActivityPieChart;
};
export const getAgentActivityConfig = () => {
  return agentActivityConfiguration;
};
export const isAssignedTasksColumnEnabled = () => {
  return assignedTasksColumn;
};
export const isWrappingTasksColumnEnabled = () => {
  return wrappingTasksColumn;
};

export const isTaskSummaryEnabled = () => {
  return teamsViewTiles.taskSummaryTile;
};
export const isTeamActivityEnabled = () => {
  return teamsViewTiles.teamActivityTile;
};
export const getIdleStatusColor = () => {
  return teamsViewTiles.statusIdleColor;
};
export const getBusyStatusColor = () => {
  return teamsViewTiles.statusBusyColor;
};
