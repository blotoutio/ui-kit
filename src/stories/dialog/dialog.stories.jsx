import DialogBox from '../../dialog'
import Button from '../../button'
import { ButtonContainer } from '../common/sharedStyle'
import { useState } from 'react'

const variants = ['normal', 'form']

export default {
  title: 'Dialog',
}

export const Dialog = (args) => {
  const [isDisplay, setIsDisplay] = useState(false)

  const changeDisplay = () => {
    setIsDisplay(!isDisplay)
  }

  return (
    <>
      {isDisplay && (
        <DialogBox {...args} onClose={args.close ? changeDisplay : null} />
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

Dialog.argTypes = {
  variant: {
    options: variants,
    control: 'select',
  },
  title: {
    control: 'text',
  },
  children: {
    control: 'text',
  },
  close: {
    control: 'boolean',
  },
}

Dialog.component = 'Dialog'

Dialog.args = {
  title: 'Dialog',
  variant: 'normal',
  children: 'My content',
  close: false,
}
