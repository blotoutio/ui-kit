import Snackbar from '../../snackbar/index'
import { useState } from 'react'
import Button from '../../button/index'
import { ButtonContainer } from '../common/sharedStyle.jsx'

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
          type='neutral'
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
    options: ['error', 'success'],
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
