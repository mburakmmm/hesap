import React, { MouseEventHandler } from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={`font-light text-2xl h-16 w-full flex items-center justify-center ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
