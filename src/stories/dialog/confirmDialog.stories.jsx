import Button from '../../button'
import { ButtonContainer } from '../common/sharedStyle'
import { useState } from 'react'
import Dialog from '../../confirmDialog'

export default {
  title: 'Dialog',
}

export const ConfirmDialog = (args) => {
  const [isDisplay, setIsDisplay] = useState(false)

  const changeDisplay = () => {
    setIsDisplay(!isDisplay)
  }

  const handleDelete = () => {
    changeDisplay()
    alert('Yes')
  }

  return (
    <>
      {isDisplay && (
        <Dialog
          {...args}
          handleClose={changeDisplay}
          handleDelete={handleDelete}
        />
      )}
      {!isDisplay && (
        <ButtonContainer>
          <Button
            onClick={changeDisplay}
            children='show dialog'
            color='neutral'
          />
        </ButtonContainer>
      )}
    </>
  )
}

ConfirmDialog.argTypes = {
  title: {
    control: 'text',
  },
  children: {
    control: 'text',
  },
}

ConfirmDialog.component = 'ConfirmDialog'

ConfirmDialog.args = {
  title: 'Dialog Box',
  children: 'My content',
}
