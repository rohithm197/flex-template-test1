import * as Flex from '@twilio/flex-ui';

import IFrameCRMContainer from '../../custom-components/IFrameCRMContainer'

export function replaceAndSetCustomCRMContainer(flex: typeof Flex, manager: Flex.Manager) {

  const baseUrl = 'https://www.bing.com';
  Flex.CRMContainer.Content.replace(<IFrameCRMContainer key="custom-crm-container" baseUrl={baseUrl} />, {
    sortOrder: 1,
  })
}
