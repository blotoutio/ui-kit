import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface SelectValue {
  label: string
  value: number
}

interface BarInterface {
  data: {
    categories: string[]
    data: string[][]
    count: number[][]
    bars: string[]
  }
  vertical?: boolean
  labelFormatter?: (label: string) => string
  percent?: boolean
  showLegend?: boolean
  id?: string
}

interface BoxInterface {
  className?: string
  type?: 'slim' | 'fit'
  loading?: boolean
}

interface ButtonInterface {
  className?: string
  type?: 'primary' | 'secondary' | 'neutral'
  variant?: 'solid' | 'flat' | 'outline'
  size?: 'M' | 'S'
  isDisabled?: boolean
  id?: string
  iconPosition?: 'left' | 'right'
  to?: string
  href?: string
  icon?: React.ReactChild | React.ReactChild[]
  children?: React.ReactChild | React.ReactChild[]
  onClick: () => void
}

interface DataTableInterface {
  rows: string[][] | React.ReactElement[][]
  noData?: string[]
  headers: string[] | React.ReactElement[]
  emptyCell?: string
  className?: string
  Component?: React.ReactChild | React.ReactChild[]
  loader?: boolean
  type?: 'table'
  perPage?: SelectValue
  downloadable?: boolean
  searchable?: boolean
  hasPagination?: boolean
}

interface DialogInterface {
  className?: string
  title: string
  children: React.ReactChild | React.ReactChild[]
  onClose: () => void
  variant?: 'normal' | 'form'
  disabledOutline?: boolean
}

interface DropdownInterface {
  isSearchable?: boolean
  options: SelectValue[]
  placeholder?: string
  hasAdd?: boolean
  handleAdd?: () => void
  position?: 'left'
  isMulti?: boolean
  handleChange: (value: SelectValue) => void
  value: {
    label: string
    value: string
    number: number
  }
  loadOptions: (arg0: string) => SelectValue[]
  noOptionsMessage?: (arg0: string) => string
  isClearable?: boolean
  sideHeading?: string
  category?: {
    label: string
    value: string
    category: string
  }
  children: React.ReactChild | React.ReactChild[]
  className?: string
  id?: string
}

interface FieldWrapperInterface {
  className?: string
  html?: boolean
  children: React.ReactChild | React.ReactChild[]
  helperType?: string
  helperText?: string
  label?: string
}

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error?: string
  icon?: boolean
  color?: string
  forwardRef?: React.ReactElement
}

interface LineInterface {
  id?: string
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
}

interface MultiSelectInputInterface {
  minHeight?: number
  error?: boolean
  className?: string
  inputValue: string | number
  isClearable?: boolean
  isMulti?: boolean
  handleChange: (value: SelectValue, type: string) => void
  handleInputChange?: () => void
  handleKeyDown?: (value: SelectValue) => void
  placeholder?: string
  value: string[]
}

interface SimpleSelectInterface {
  value: SelectValue
  showError?: boolean
  type?: 'form'
  styles?: Record<string, number | string>[]
  isClearable?: boolean
  isMulti?: boolean
  handleChange: (value: SelectValue) => void
  handleInputChange?: () => void
  handleKeyDown?: (value: SelectValue) => void
  placeholder?: string
}

interface SimpleAsyncSelectInterface {
  value: SelectValue
  showError?: boolean
  type?: 'form'
  id?: string
  loadOptions: (arg0: string) => {
    label: string
    value: number
  }
  classNamePrefix?: string
  handleChange: (value: SelectValue[]) => void
  isDisabled?: boolean
  isMulti?: boolean
  isClearable?: boolean
  noOptionsMessage?: (arg0: string) => string
  placeholder?: string
}

interface SnackbarInterface {
  onClose: () => void
  variant?: 'success' | 'error'
  message: string
}

interface SpinnerInterface {
  type?: 'button-white' | 'small'
}

interface TableInterface {
  headers?: string[] | React.ReactElement[]
  rows: string[][] | React.ReactElement[][]
  className?: string
  format?: (
    row: number,
    column: number,
    cellvalues: string | React.ReactElement
  ) => string
  noData?: string[]
}

interface TextareaInterface
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardRef: React.ReactElement
  className?: string
  error?: boolean
}

interface ToggleInterface {
  options: SelectValue[]
  selected?: SelectValue
  isDisable?: boolean
  handleChange: (value: SelectValue) => void
}

export declare const Bar: (props: BarInterface) => React.ReactElement
export declare const Box: (props: BoxInterface) => React.ReactElement
export declare const Button: (props: ButtonInterface) => React.ReactElement
export declare const DataTable: (
  props: DataTableInterface
) => React.ReactElement
export declare const Dialog: (props: DialogInterface) => React.ReactElement
export declare const Dropdown: (props: DropdownInterface) => React.ReactElement
export declare const FieldWrapper: (
  props: FieldWrapperInterface
) => React.ReactElement
export declare const Input: (props: InputInterface) => React.ReactElement
export declare const Line: (props: LineInterface) => React.ReactElement
export declare const MultiSelectInput: (
  props: MultiSelectInputInterface
) => React.ReactElement
export declare const SimpleSelect: (
  props: SimpleSelectInterface
) => React.ReactElement
export declare const Snackbar: (props: SnackbarInterface) => React.ReactElement
export declare const Spinner: (props: SpinnerInterface) => React.ReactElement
export declare const Table: (props: TableInterface) => React.ReactElement
export declare const Textarea: (props: TextareaInterface) => React.ReactElement
export declare const Toggle: (props: ToggleInterface) => React.ReactElement
