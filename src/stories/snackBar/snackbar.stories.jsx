import Snackbar from '../../snackbar'
import { useState } from 'react'
import Button from '../../button'
import { ButtonContainer } from '../common/sharedStyle'

export default {
  title: 'SnackBar',
  component: 'Snackbar',
}

export const SnackBar = (args) => {
  const [snackbar, setSnackbar] = useState(null)
  const closeSnackBar = () => {
    setSnackbar(false)
  }
  const showSnackbar = () => {
    setSnackbar(true)
  }
  return (
    <>
      <ButtonContainer>
        <Button
          onClick={showSnackbar}
          children='show snack-bar'
          color='neutral'
        />
      </ButtonContainer>
      {snackbar && (
        <Snackbar
          variant={args.variant}
          message={args.message}
          onClose={closeSnackBar}
        />
      )}
    </>
  )
}

SnackBar.args = {
  variant: 'success',
  message: "Hello, I'm snackbar!",
}
SnackBar.argTypes = {
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
}
