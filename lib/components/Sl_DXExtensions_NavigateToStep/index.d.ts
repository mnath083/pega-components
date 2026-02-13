import type { PConnFieldProps } from './PConnProps';
import './create-nonce';
export interface SlDxExtensionsNavigateToStepProps extends PConnFieldProps {
    text: string;
    stepID: string;
    tooltip?: string;
    variant?: 'link' | 'simple' | 'text';
    compact?: boolean;
    icon?: boolean;
    iconName?: 'pencil' | 'arrow-bend-left' | 'arrow-bend-right' | 'check' | 'undo' | 'plus';
}
declare const _default: (props: Readonly<SlDxExtensionsNavigateToStepProps>) => import("react/jsx-runtime").JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map