import Dialog from '../../dialog/index'
import Button from '../../button/index'
import { ButtonContainer } from '../common/sharedStyle.jsx'
import { useState } from 'react'

export default {
  title: 'Dialog',
  component: 'Dialog',
}

export const DialogBox = (args) => {
  const [isDisplay, setIsDisplay] = useState(false)
  const ChangeDisplay = () => {
    setIsDisplay(!isDisplay)
  }
  return (
    <>
      {isDisplay && <Dialog title='Dialog Box' onClose={ChangeDisplay} />}
      {!isDisplay && (
        <ButtonContainer>
          <Button
            onClick={ChangeDisplay}
            children='show dialog-box'
            type='neutral'
          />
        </ButtonContainer>
      )}
    </>
  )
}
