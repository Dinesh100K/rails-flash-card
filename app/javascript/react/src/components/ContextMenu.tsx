import React from 'react'
import { Label } from './common/Label'

const ContextMenu = (props: any) => {
  return (
    <div className="fixed top-0 flex h-screen w-screen justify-center overflow-hidden">
      <div
        className={`absolute  top-[35%] w-[8rem]
    cursor-context-menu rounded-lg bg-white/[0.7] text-center
    font-[500] capitalize shadow-xl ${props.index} backdrop-blur-lg`}>
        <Label color="text-gray-600" size="text-lg">
          Options
        </Label>
        <hr></hr>
        {props.children}
      </div>
    </div>
  )
}

export default ContextMenu
