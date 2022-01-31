import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { EChartsType, EChartsOption } from 'echarts'

interface SelectValue {
  label: string
  value: number | string
  [key: string]: number | string
}

interface BarChartProps {
  data: {
    categories: string[]
    data: string[][]
    count: number[][]
    bars: string[]
  }
  labelFormatter?: (label: string) => string
  id?: string
  percent?: boolean
  showLegend?: boolean
  vertical?: boolean
}

interface BoxProps {
  className?: string
  loading?: boolean
  type?: 'slim' | 'fit'
}

interface ButtonProps {
  onClick: () => void
  children?: React.ReactChild | React.ReactChild[]
  className?: string
  href?: string
  icon?: React.ReactChild | React.ReactChild[]
  iconPosition?: 'left' | 'right'
  id?: string
  isDisabled?: boolean
  size?: 'M' | 'S'
  to?: string
  color?: 'primary' | 'secondary' | 'neutral'
  variant?: 'solid' | 'flat' | 'outline' | 'light'
  type?: string
  form?: string
}

interface ConfirmDialogProps {
  title?: string
  handleClose: any
  handleDelete: any
  children: React.ReactChild[]
}

interface DataTableProps {
  rows: string[][] | React.ReactElement[][]
  headers: string[] | React.ReactElement[]
  className?: string
  Component?: React.ReactChild | React.ReactChild[]
  downloadable?: boolean
  emptyCell?: string
  hasPagination?: boolean
  loader?: boolean
  noData?: string[]
  perPage?: SelectValue
  searchable?: boolean
  type?: 'table'
}

interface DialogProps {
  children: React.ReactChild | React.ReactChild[]
  title: string
  className?: string
  disabledOutline?: boolean
  onClose: () => void
  variant?: 'normal' | 'form'
}

interface DropdownProps {
  handleChange: (value: SelectValue) => void
  value: SelectValue
  category?: {
    label: string
    value: string
    category: string
  }
  children: React.ReactChild | React.ReactChild[]
  className?: string
  handleAdd?: () => void
  id?: string
  isClearable?: boolean
  isMulti?: boolean
  isSearchable?: boolean
  loadOptions?: (arg0: string) => SelectValue[]
  noOptionsMessage?: (arg0: string) => string
  options?: SelectValue[]
  placeholder?: string
  position?: 'left'
  sideHeading?: string
}

interface EChartProps {
  options: EChartsOption
  config?: {
    notMerge: boolean
  }
  id?: string
}

interface FieldWrapperProps {
  children: React.ReactChild | React.ReactChild[]
  className?: string
  helperText?: string | React.ReactElement
  helperType?: 'text' | 'error'
  html?: boolean
  label?: string
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  color?: string
  error?: string
  forwardRef?: React.ReactElement
  icon?: boolean
}

interface LineChartProps {
  data: {
    bars: string[]
    categories: string[]
    data: [
      {
        data: number[]
        breakDown?: Record<string, number>[]
      }
    ]
  }
  id?: string
}

interface LoaderProps {
  className?: string
  variation?: 'global' | 'local'
}

interface MultiSelectInputProps {
  handleChange: (value: SelectValue, type: string) => void
  handleInputChange: (value: string) => void
  handleKeyDown: (value: SelectValue) => void
  inputValue: string | number
  value: string[]
  className?: string
  error?: boolean
  isClearable?: boolean
  isMulti?: boolean
  minHeight?: number
  placeholder?: string
}

interface SimpleSelectProps {
  handleChange: (value: SelectValue) => void
  handleInputChange?: (value: string) => void
  value: SelectValue
  handleKeyDown?: (value: SelectValue) => void
  isClearable?: boolean
  isMulti?: boolean
  placeholder?: string
  showError?: boolean
  styles?: Record<string, number | string>[]
  type?: 'form'
}

interface SimpleAsyncSelectProps {
  handleChange: (value: SelectValue[]) => void
  loadOptions: (arg0: string) => {
    label: string
    value: number
  }
  value: SelectValue
  classNamePrefix?: string
  id?: string
  isClearable?: boolean
  isDisabled?: boolean
  isMulti?: boolean
  noOptionsMessage?: (arg0: string) => string
  placeholder?: string
  showError?: boolean
  type?: 'form'
}

interface SnackbarProps {
  message: string
  onClose: () => void
  variant?: 'success' | 'error'
}

interface SpinnerProps {
  type?: 'button-white' | 'small'
}

interface TableProps {
  rows: string[][] | React.ReactElement[][]
  className?: string
  format?: (
    row: number,
    column: number,
    cellvalues: string | React.ReactElement
  ) => string
  headers?: string[] | React.ReactElement[]
  noData?: string[]
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardRef: React.ReactElement
  className?: string
  error?: boolean
}

interface ToggleProps {
  handleChange: (value: SelectValue) => void
  options: SelectValue[]
  selected: SelectValue
  className?: string
  isDisable?: boolean
}

export declare const BarChart: (props: BarChartProps) => React.ReactElement
export declare const Box: (props: BoxProps) => React.ReactElement
export declare const Button: (props: ButtonProps) => React.ReactElement
export declare const ConfirmDialog: (
  props: ConfirmDialogProps
) => React.ReactElement
export declare const DataTable: (props: DataTableProps) => React.ReactElement
export declare const Dialog: (props: DialogProps) => React.ReactElement
export declare const Dropdown: (props: DropdownProps) => React.ReactElement
export declare const EChart: (props: EChartProps) => React.ReactElement
export declare const FieldWrapper: (
  props: FieldWrapperProps
) => React.ReactElement
export declare const Input: (props: InputProps) => React.ReactElement
export declare const LineChart: (props: LineChartProps) => React.ReactElement
export declare const Loader: (props: LoaderProps) => React.ReactElement
export declare const MultiSelectInput: (
  props: MultiSelectInputProps
) => React.ReactElement
export declare const SimpleAsyncSelect: (
  props: SimpleAsyncSelectProps
) => React.ReactElement
export declare const SimpleSelect: (
  props: SimpleSelectProps
) => React.ReactElement
export declare const Snackbar: (props: SnackbarProps) => React.ReactElement
export declare const Spinner: (props: SpinnerProps) => React.ReactElement
export declare const Table: (props: TableProps) => React.ReactElement
export declare const Textarea: (props: TextareaProps) => React.ReactElement
export declare const Toggle: (props: ToggleProps) => React.ReactElement

export declare const useLoadingStatus: () => {
  isLoading: boolean
  showLoader: (isLoading: boolean) => void
}
