import type { PConnFieldProps } from '../shared/PConnProps';
import '../shared/create-nonce';
interface SlDxExtensionsTestTextProps extends PConnFieldProps {
    isTableFormatter?: boolean;
    formatter: string;
    variant?: any;
}
export declare const formatExists: (formatterVal: string) => boolean;
export declare const textFormatter: (formatter: string, value: string) => any;
declare const _default: (props: SlDxExtensionsTestTextProps) => import("react/jsx-runtime").JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map