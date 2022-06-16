import { useState } from 'react'

import Button from '../../button'
import { ButtonContainer } from '../common/sharedStyle'
import Dialog from '../../sidebarDialog'

export default {
  title: 'Dialog',
}

export const SidebarDialog = (args) => {
  const [isDisplay, setIsDisplay] = useState(false)

  const changeDisplay = () => {
    setIsDisplay(!isDisplay)
  }

  return (
    <>
      {isDisplay && <Dialog {...args} handleClose={changeDisplay} />}
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

SidebarDialog.argTypes = {
  children: {
    control: 'text',
  },
  sidebar: {
    control: 'text',
  },
}

SidebarDialog.component = 'SidebarDialog'

SidebarDialog.args = {
  children: 'My content',
  sidebar: 'My sidebar',
}
