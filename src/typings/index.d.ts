import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { EChartsType, EChartsOption } from 'echarts'

interface SelectValue {
  label: string
  value: number | string
  [key: string]: any
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
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  action?: string | React.ReactNode
  isDisabled?: boolean
  children?: React.ReactNode | React.ReactNode[]
}

interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode | React.ReactNode[]
  className?: string
  href?: string
  icon?: React.ReactNode | React.ReactNode[]
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
  children: React.ReactNode[]
}

interface DataTableProps {
  rows?: string[][] | React.ReactNode[][]
  headers: string[] | React.ReactNode[]
  className?: string
  Component?: React.ReactNode | React.ReactNode[]
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
  children: React.ReactNode | React.ReactNode[]
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
  children: React.ReactNode | React.ReactNode[]
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
  icon?: React.ReactNode | React.ReactNode[]
  size?: 'M' | 'S'
  closeMenuOnSelect?: boolean
}

interface ButtonDropdownProps {
  handleChange: (value: SelectValue) => void
  value?: SelectValue | null
  children: React.ReactNode | React.ReactNode[]
  className?: string
  handleAdd?: () => void
  id?: string
  isClearable?: boolean
  isMulti?: boolean
  isSearchable?: boolean
  noOptionsMessage?: (arg0: string) => string
  options?: SelectValue[]
  placeholder?: string
  position?: 'left'
  icon: React.ReactNode | React.ReactNode[]
}

interface EChartProps {
  options: EChartsOption
  config?: {
    notMerge: boolean
  }
  id?: string
}

interface FieldWrapperProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  helperText?: string | React.ReactNode
  helperType?: 'text' | 'error'
  html?: boolean
  label?: string
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  color?: string
  error?: boolean
  forwardRef?: React.ReactNode
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
  value?: SelectValue | null
  options?: SelectValue[]
  handleKeyDown?: (value: SelectValue) => void
  isClearable?: boolean
  isMulti?: boolean
  placeholder?: string
  showError?: boolean
  styles?: Record<string, number | string>[]
  type?: 'form'
  width?: number
  margin?: number
}

interface SimpleAsyncSelectProps {
  handleChange: (value: SelectValue[]) => void
  loadOptions: (arg0: string) => SelectValue
  value?: SelectValue
  classNamePrefix?: string
  id?: string
  isClearable?: boolean
  isDisabled?: boolean
  isMulti?: boolean
  noOptionsMessage?: (arg0: string) => string
  placeholder?: string
  showError?: boolean
  type?: 'form'
  width?: number
  margin?: number
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
  rows: string[][] | React.ReactNode[][]
  className?: string
  format?: (
    row: number,
    column: number,
    cellvalues: string | React.ReactNode
  ) => string
  headers?: string[] | React.ReactNode[]
  noData?: string[]
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardRef: React.ReactNode
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
export declare const ButtonDropdown: (
  props: ButtonDropdownProps
) => React.ReactElement
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
