import React from 'react'
import { Button } from './Button'

interface CalculatorButtonProps {
  value: string | number
  onClick: (value: string | number) => void
  className?: string
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({ value, onClick, className }) => {
  const handleClick = () => {
    onClick(value)
  }

  return <Button className={className} onClick={handleClick}>{value}</Button>
}
