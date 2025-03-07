import React from 'react'

interface DisplayProps {
  value: string
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="bg-gray-800 text-white text-right p-4 h-24 overflow-hidden">
      <span className="text-4xl font-thin">{value}</span>
    </div>
  )
}
