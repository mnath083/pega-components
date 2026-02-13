import {
  Button,
  Icon,
  registerIcon,
  withConfiguration
} from '@pega/cosmos-react-core';

import * as pencil from '@pega/cosmos-react-core/lib/components/Icon/icons/pencil.icon';
import * as arrowBendLeft from '@pega/cosmos-react-core/lib/components/Icon/icons/arrow-bend-left.icon';
import * as arrowBendRight from '@pega/cosmos-react-core/lib/components/Icon/icons/arrow-bend-right.icon';
import * as check from '@pega/cosmos-react-core/lib/components/Icon/icons/check.icon';
import * as undo from '@pega/cosmos-react-core/lib/components/Icon/icons/undo.icon';
import * as plus from '@pega/cosmos-react-core/lib/components/Icon/icons/plus.icon';

import type { PConnFieldProps } from './PConnProps';
import './create-nonce';
import StyledSlDxExtensionsNavigateToStepWrapper from './styles';

// Register only the icons this component can render.
registerIcon(pencil, arrowBendLeft, arrowBendRight, check, undo, plus);

export interface SlDxExtensionsNavigateToStepProps extends PConnFieldProps {
  text: string;
  stepID: string;
  tooltip?: string;
  variant?: 'link' | 'simple' | 'text';
  compact?: boolean;
  icon?: boolean;
  iconName?:
    | 'pencil'
    | 'arrow-bend-left'
    | 'arrow-bend-right'
    | 'check'
    | 'undo'
    | 'plus';
}

function SlDxExtensionsNavigateToStep({
  getPConnect,
  text = 'Edit',
  stepID,
  tooltip = 'Navigate to step',
  variant = 'link',
  compact = false,
  icon = false,
  iconName = 'pencil',
  disabled = false,
  testId = 'NavigateToStep'
}: Readonly<SlDxExtensionsNavigateToStepProps>) {
  // `getPConnect` is provided by Pega runtime and exposes available actions.
  const actions = getPConnect().getActionsApi();

  const handleClick = () => {
    // Navigate to the step configured by the property panel (`stepID`).
    actions.navigateToStep(
      stepID,
      // Context name identifies which container/work item the action applies to.
      getPConnect().getContextName()
    );
  };

  return (
    <StyledSlDxExtensionsNavigateToStepWrapper>
      <Button
        data-testid={testId}
        name={stepID}
        label={tooltip || text}
        compact={compact}
        disabled={disabled}
        variant={variant}
        icon={icon}
        onClick={handleClick}
      >
        {/* Render an icon when one is selected in config. */}
        {iconName && <Icon name={iconName} />}
        {/* If icon-only mode is enabled, hide text and show just the icon. */}
        {!icon ? text : undefined}
      </Button>
    </StyledSlDxExtensionsNavigateToStepWrapper>
  );
}

export default withConfiguration(SlDxExtensionsNavigateToStep);
