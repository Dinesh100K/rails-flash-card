import React from 'react'

export const TextField = (props: any) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      className="sm:text-md block mt-2
        w-full rounded-lg border-4 border-black/[0.2]
          bg-white/[0.5] p-2.5 font-[500]
          text-black/[0.8] hover:border-black/[0.5] focus:border-blue-500 focus:ring-blue-500"
      placeholder={props.children}
    />
  )
}
