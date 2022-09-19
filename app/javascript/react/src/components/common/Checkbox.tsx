import React from 'react'

export const Checkbox = (props: any) => {
  return (
    <div className="flex items-start">
      <div className="flex h-5 items-center">
        <input
          id={props.id}
          aria-describedby={props.id}
          type="checkbox"
          className="focus:ring-3 h-4 w-4 rounded
                  border border-gray-300 bg-gray-50 focus:ring-blue-300"
        />
      </div>
      <div className="ml-3 text-sm">
        <label className="font-medium text-gray-900">{props.children}</label>
      </div>
    </div>
  )
}
