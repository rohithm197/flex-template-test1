import * as Flex from '@twilio/flex-ui';

import { StringTemplates } from '../strings';

// Export the notification IDs an enum for better maintainability when accessing them elsewhere
export enum ParkInteractionNotification {
  ParkSuccess = 'PSParkSuccess',
  ParkError = 'PSParkError',
}
export enum UnparkInteractionNotification {
  UnparkSuccess = 'PSUnparkSuccess',
  UnparkError = 'PSUnparkError',
}

// Return an array of Flex.Notification
export const notificationHook = (flex: typeof Flex) => [
  {
    id: ParkInteractionNotification.ParkSuccess,
    type: flex.NotificationType.success,
    content: StringTemplates.ParkSuccess,
    closeButton: true,
    timeout: 3000,
  },
  {
    id: ParkInteractionNotification.ParkError,
    type: flex.NotificationType.error,
    content: StringTemplates.ParkError,
    closeButton: true,
    timeout: 5000,
  },
  {
    id: UnparkInteractionNotification.UnparkSuccess,
    type: flex.NotificationType.success,
    content: StringTemplates.UnparkSuccess,
    closeButton: true,
    timeout: 3000,
  },
  {
    id: UnparkInteractionNotification.UnparkError,
    type: flex.NotificationType.error,
    content: StringTemplates.UnparkError,
    closeButton: true,
    timeout: 5000,
  },
];
