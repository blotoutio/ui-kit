import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { EChartsType, EChartsOption } from 'echarts'

interface SelectValue {
  label: string
  value: number | string
  [key: string]: number | string
}

interface BarChartInterface {
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

interface BoxInterface {
  className?: string
  loading?: boolean
  type?: 'slim' | 'fit'
}

interface ButtonInterface {
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

interface DataTableInterface {
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

interface DialogInterface {
  children: React.ReactChild | React.ReactChild[]
  title: string
  className?: string
  disabledOutline?: boolean
  onClose: () => void
  variant?: 'normal' | 'form'
}

interface DropdownInterface {
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

interface EChartInterface {
  options: EChartsOption
  config?: {
    notMerge: boolean
  }
  id?: string
}

interface FieldWrapperInterface {
  children: React.ReactChild | React.ReactChild[]
  className?: string
  helperText?: string
  helperType?: string
  html?: boolean
  label?: string
}

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  color?: string
  error?: string
  forwardRef?: React.ReactElement
  icon?: boolean
}

interface LineChartInterface {
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

interface LoaderInterface {
  className?: string
  variation?: 'global' | 'local'
}

interface MultiSelectInputInterface {
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

interface SimpleSelectInterface {
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

interface SimpleAsyncSelectInterface {
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

interface SnackbarInterface {
  message: string
  onClose: () => void
  variant?: 'success' | 'error'
}

interface SpinnerInterface {
  type?: 'button-white' | 'small'
}

interface TableInterface {
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

interface TextareaInterface
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardRef: React.ReactElement
  className?: string
  error?: boolean
}

interface ToggleInterface {
  handleChange: (value: SelectValue) => void
  options: SelectValue[]
  selected: SelectValue
  className?: string
  isDisable?: boolean
}

export declare const BarChart: (props: BarChartInterface) => React.ReactElement
export declare const Box: (props: BoxInterface) => React.ReactElement
export declare const Button: (props: ButtonInterface) => React.ReactElement
export declare const DataTable: (
  props: DataTableInterface
) => React.ReactElement
export declare const Dialog: (props: DialogInterface) => React.ReactElement
export declare const Dropdown: (props: DropdownInterface) => React.ReactElement
export declare const EChart: (props: EChartInterface) => React.ReactElement
export declare const FieldWrapper: (
  props: FieldWrapperInterface
) => React.ReactElement
export declare const Input: (props: InputInterface) => React.ReactElement
export declare const LineChart: (
  props: LineChartInterface
) => React.ReactElement
export declare const Loader: (props: LoaderInterface) => React.ReactElement
export declare const MultiSelectInput: (
  props: MultiSelectInputInterface
) => React.ReactElement
export declare const SimpleAsyncSelect: (
  props: SimpleAsyncSelectInterface
) => React.ReactElement
export declare const SimpleSelect: (
  props: SimpleSelectInterface
) => React.ReactElement
export declare const Snackbar: (props: SnackbarInterface) => React.ReactElement
export declare const Spinner: (props: SpinnerInterface) => React.ReactElement
export declare const Table: (props: TableInterface) => React.ReactElement
export declare const Textarea: (props: TextareaInterface) => React.ReactElement
export declare const Toggle: (props: ToggleInterface) => React.ReactElement
