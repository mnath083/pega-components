import { PConnect } from '@pega/pcore-pconnect-typedefs';

// Base Constellation prop contract: all DX components receive getPConnect from runtime.
export interface PConnProps {
  getPConnect: () => typeof PConnect;
}

// Field-level contract used by this component, including common App Studio/runtime values.
export interface PConnFieldProps extends PConnProps {
  label: string;
  required?: boolean;
  disabled?: boolean;
  value?: unknown;
  validatemessage?: string;
  status?: string;
  onChange?: (...args: unknown[]) => void;
  onBlur?: (...args: unknown[]) => void;
  readOnly?: boolean;
  testId?: string;
  helperText?: string;
  displayMode?: string;
  hideLabel?: boolean;
  placeholder?: string;
  fieldMetadata?: unknown;
  additionalProps?: unknown;
}
