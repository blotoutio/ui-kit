import Alert from '../../alert'
import { useState } from 'react'
import Button from '../../button'
import { ButtonContainer } from '../common/sharedStyle'

export default {
  title: 'Alert',
  component: 'Alert',
}

export const alert = (args) => {
  const [alert, setAlert] = useState(null)
  const closeAlert = () => {
    setAlert(false)
  }
  const showAlert = () => {
    setAlert(true)
  }
  return (
    <>
      <ButtonContainer>
        <Button onClick={showAlert} children='show alert' color='neutral' />
      </ButtonContainer>
      {alert && (
        <Alert
          variant={args.variant}
          message={args.message}
          onClose={args.onClose && closeAlert}
        />
      )}
    </>
  )
}

alert.args = {
  variant: 'success',
  message: "Hello, I'm alert!",
  onClose: false,
}
alert.argTypes = {
  variant: {
    options: ['error', 'success', 'info', 'warning'],
    control: {
      type: 'radio',
    },
  },
  message: {
    control: {
      type: 'text',
    },
  },
  onClose: {
    control: {
      type: 'boolean',
    },
  },
}

alert.component = Alert
