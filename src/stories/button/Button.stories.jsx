import Button from '../../button'
import { TableContainer } from './style'
import { Arrow } from '../../icons'
import { ButtonContainer } from '../common/sharedStyle'

const variants = ['solid', 'flat', 'outline', 'light']
const colors = ['primary', 'secondary', 'neutral']
const sizes = ['M', 'S']
const rows = ['Normal', 'Icon', 'Disabled']

export default {
  title: 'Button',
  component: Button,
}

const captalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const Table = (args) => {
  const ButtonRow = ({ row }) =>
    variants.map((variant, index) => (
      <td key={`${row}-${variant}-${index}`}>
        <Button
          {...args}
          icon={row === 'Icon' && <Arrow rotate={90} />}
          isDisabled={row === 'Disabled'}
          variant={variant}
          color={args.color}
          size={args.size}
        />
      </td>
    ))

  const tableBody = rows.map((row, index) => (
    <tr key={`${row}-${index}`}>
      <th>{row}</th>
      <ButtonRow row={row} />
    </tr>
  ))

  return (
    <div>
      <h1>
        {captalize(args.color)} Buttons {args.size}
      </h1>
      <table>
        <thead>
          <tr>
            <th></th>
            {variants.map((variant, index) => (
              <th key={`${variant}-${index}`}>{captalize(variant)}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  )
}

export const AllButton = (args) => {
  const TableSizes = (props) =>
    sizes.map((size, index) => (
      <Table key={`${size}-${index}`} {...props} size={size} />
    ))

  const TableTypes = colors.map((color, index) => (
    <TableSizes key={`${color}-${index}`} color={color} {...args} />
  ))

  return <TableContainer>{TableTypes}</TableContainer>
}
AllButton.args = {
  children: 'Button',
}

export const ControlButton = (args) => (
  <ButtonContainer>
    <Button {...args} />
  </ButtonContainer>
)

ControlButton.argTypes = {
  color: {
    options: colors,
    control: 'select',
  },
  variant: {
    options: variants,
    control: 'select',
  },
  size: {
    options: sizes,
    control: 'select',
  },
  isDisabled: {
    control: 'boolean',
  },
}

ControlButton.args = {
  color: 'primary',
  variant: 'solid',
  size: 'M',
  isDisabled: false,
  children: 'Button',
}
