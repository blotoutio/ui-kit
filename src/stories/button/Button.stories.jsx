import Button from '../../button'
import { TableContainer } from './style'
import { Arrow } from '../../icons'
import { ButtonContainer } from '../common/sharedStyle'

const variants = ['solid', 'flat', 'outline']
const types = ['primary', 'secondary', 'neutral']
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
          type={args.type}
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
        {captalize(args.type)} Buttons {args.size}
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

  const TableTypes = types.map((type, index) => (
    <TableSizes key={`${type}-${index}`} type={type} {...args} />
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
  type: {
    options: types,
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
    contorl: 'boolean',
  },
}
ControlButton.args = {
  type: 'primary',
  variant: 'solid',
  size: 'M',
  isDisabled: false,
  children: 'Button',
}
