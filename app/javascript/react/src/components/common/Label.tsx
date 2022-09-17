import React from 'react'

export const Label = (props: any) => {
  return (
    <label
      className={` mb-2 block font-medium
        ${props.color ? props.color : 'text-gray-900'}
        ${props.size ? props.size : 'text-sm'} ${props.tailwind}`}>
      {props.children}
    </label>
  )
}
