import { styled } from '@twilio/flex-ui';

export interface ThemeOnlyProps {
  theme?: any;
  bgColor?: string;
}

export const AgentActivity = styled('div')<ThemeOnlyProps>`
  color: #ffffff;
  background-color: ${(props) => props.bgColor || props.theme.tokens.backgroundColors.colorBackgroundBody};
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  font-size: 11px;
  justify-content: center;
  border-width: 0px;
  border-radius: 20px;
  height: 40px;
  width: 40px;
  align-items: center;
`;

export const Heading = styled('div')<ThemeOnlyProps>`
  font-size: 12px;
  font-weight: bold;
`;
