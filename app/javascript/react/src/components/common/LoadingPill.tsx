import React from 'react'
import { CircularLoading } from './CircularLoading'

export const LoadingPill = () => {
  return (
    <div className="item-center mx-auto flex justify-center">
      <div className="mt-[50vh] flex rounded-lg bg-gray-600 px-5 py-2.5 text-white">
        <CircularLoading /> loading...
      </div>
    </div>
  )
}
