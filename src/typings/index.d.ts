import {
  InputHTMLAttributes,
  KeyboardEvent,
  TextareaHTMLAttributes,
} from 'react'
import { EChartsOption } from 'echarts'

export interface SelectValue {
  label: string
  value: number | string
  [key: string]: any
}

type InputAction = 'set-value' | 'input-change' | 'input-blur' | 'menu-close'

export interface InputActionMeta {
  action: InputAction
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
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  action?: string | React.ReactNode
  isDisabled?: boolean
  children?: React.ReactNode | React.ReactNode[]
  variation?: 'fit'
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
  target?: string
  rel?: string
}

interface ConfirmDialogProps {
  title?: string
  actionName?: string
  handleClose: any
  handleDelete: any
  children: React.ReactNode[]
}

interface SidebarDialogProps {
  handleClose: any
  sidebar: React.ReactNode[]
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
  noData?: string
  perPage?: SelectValue
  searchable?: boolean
  type?: 'table'
  reset?: boolean
  onDoubleClick?: (index: number) => void
  onSingleClick?: (index: number) => void
}

interface UserTableProps {
  rows?: string[][] | React.ReactNode[][]
  noData?: string
  headers: string[] | React.ReactNode[]
  emptyCell?: string
  className?: string
  Component?: React.ReactNode | React.ReactNode[]
  loader?: boolean
  type?: 'table'
  perPage?: SelectValue
  downloadable?: boolean
  hasPagination?: boolean
  extraColumns?: Record<string, string>[]
  addColumn?: () => void
}

interface DialogProps {
  children: React.ReactNode | React.ReactNode[]
  title: string
  className?: string
  disabledOutline?: boolean
  onClose?: () => void
  variant?: 'normal' | 'form' | 'table'
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
  position?: 'left' | 'right'
  icon?: React.ReactNode | React.ReactNode[]
  size?: 'M' | 'S'
  closeMenuOnSelect?: boolean
  menuPortalTarget?: Element
  styles?: Record<string, number | string>[]
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
  position?: 'left' | 'right'
  icon: React.ReactNode | React.ReactNode[]
  menuPortalTarget?: Element
  styles?: Record<string, number | string>[]
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
  icon?: React.ReactNode
}

interface LineChartProps {
  data: {
    bars: string[]
    categories: string[]
    data: [
      {
        data: number[]
        breakDown?:
          | Record<string, number>[]
          | Record<string, Record<string, number | Record<string, number>>>[]
      }
    ]
  }
  id?: string
}

interface LoaderProps {
  className?: string
  variation?: 'global' | 'local'
  zIndex?: number
}

interface MultiSelectInputProps {
  handleChange: (value: SelectValue[]) => void
  handleInputChange: (
    inputValue: string,
    inputActionMeta: InputActionMeta
  ) => void
  handleKeyDown: (event: KeyboardEvent) => void
  inputValue: string
  value: SelectValue[]
  className?: string
  error?: boolean
  isClearable?: boolean
  minHeight?: number
  placeholder?: string
  menuPortalTarget?: Element
  styles?: Record<string, number | string>[]
}

interface SimpleSelectProps {
  handleChange: (value: SelectValue) => void
  handleInputChange?: (value: string) => void
  value?: SelectValue | null
  options?: SelectValue[]
  handleKeyDown?: (value: SelectValue) => void
  isClearable?: boolean
  isDisabled?: boolean
  isMulti?: boolean
  placeholder?: string
  showError?: boolean
  styles?: Record<string, number | string>[]
  type?: 'form' | 'default' | 'medium'
  width?: number
  margin?: number
  menuPortalTarget?: Element
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
  type?: 'form' | 'default' | 'medium'
  width?: number
  margin?: number
  menuPortalTarget?: Element
  styles?: Record<string, number | string>[]
}

interface SnackbarProps {
  message: string
  onClose: () => void
  variant?: 'success' | 'error' | 'info' | 'warning'
}

interface SpinnerProps {
  type?: 'button-white' | 'small'
}

interface TableProps {
  rows: string[][] | React.ReactNode[][]
  className?: string
  format?: (
    rowNumber: number,
    columnNumber: number,
    cell: string | React.ReactNode
  ) => React.ReactNode
  headers?: string[] | React.ReactNode[]
  noData?: string[]
  onDoubleClick?: (index: number) => void
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardRef: React.ReactNode
  className?: string
  error?: boolean
}

interface ToggleProps {
  handleChange: (value: SelectValue) => void
  selected: SelectValue
  options?: SelectValue[]
  className?: string
  isDisable?: boolean
  style?: 'options' | 'toggle'
}

interface PaginationProps {
  data: ((string | React.ReactElement)[] | React.ReactElement)[]
  setBlockData: (
    value: ((string | React.ReactElement)[] | React.ReactElement)[]
  ) => void
  perPage?: { label: string; value: number }
  paginationType?: 'large' | 'small'
  reset?: boolean
  setPageData?: (value: { pageNo: number; perPage: number }) => void
}

export declare const BarChart: (props: BarChartProps) => React.ReactElement
export declare const Box: (props: BoxProps) => React.ReactElement
export declare const Button: (props: ButtonProps) => React.ReactElement
export declare const ConfirmDialog: (
  props: ConfirmDialogProps
) => React.ReactElement
export declare const SidebarDialog: (
  props: SidebarDialogProps
) => React.ReactElement
export declare const DataTable: (props: DataTableProps) => React.ReactElement
export declare const UserTable: (props: UserTableProps) => React.ReactElement
export declare const Pagination: (props: PaginationProps) => React.ReactElement
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

export declare const useLoadingStatus: (defaultValue?: boolean) => {
  isLoading: boolean
  showLoader: (isLoading: boolean) => void
}
