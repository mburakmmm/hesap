import React, { useState } from 'react'
import { Display } from './components/Display'
import { Button } from './components/Button'
import { CalculatorButton } from './components/CalculatorButton'
import * as LucideReact from 'lucide-react'

const buttonValues = [
  ['C', '+/-', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
]

const calculate = (expression: string): string => {
  try {
    // eslint-disable-next-line no-new-func
    return new Function(`return ${expression}`)()
  } catch (error) {
    return 'Error'
  }
}

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [expression, setExpression] = useState('')

  const handleNumberClick = (value: number | string) => {
    if (displayValue === '0' || displayValue === 'Error') {
      setDisplayValue(String(value))
      setExpression(String(value))
    } else {
      setDisplayValue(displayValue + value)
      setExpression(expression + value)
    }
  }

  const handleOperatorClick = (operator: string) => {
    if (displayValue !== 'Error') {
      setDisplayValue('0')
      setExpression(expression + operator)
    }
  }

  const handleEqualsClick = () => {
    if (displayValue !== 'Error') {
      const result = calculate(expression)
      setDisplayValue(result)
      setExpression(result)
    }
  }

  const handleClearClick = () => {
    setDisplayValue('0')
    setExpression('')
  }

  const handlePercentageClick = () => {
    try {
      const value = parseFloat(displayValue)
      const percentage = value / 100
      setDisplayValue(String(percentage))
      setExpression(String(percentage))
    } catch (error) {
      setDisplayValue('Error')
      setExpression('')
    }
  }

  const handlePlusMinusClick = () => {
    try {
      const value = parseFloat(displayValue)
      const newValue = -value
      setDisplayValue(String(newValue))
      setExpression(String(newValue))
    } catch (error) {
      setDisplayValue('Error')
      setExpression('')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-80">
        <Display value={displayValue} />
        <div className="grid grid-cols-4 gap-2 p-4">
          <Button onClick={handleClearClick} className="bg-gray-300 hover:bg-gray-400 text-black rounded-xl col-span-1">
            <LucideReact.Clear size={20} />
          </Button>
          <Button onClick={handlePlusMinusClick} className="bg-gray-300 hover:bg-gray-400 text-black rounded-xl col-span-1">
            <sup>+</sup>/<sub>-</sub>
          </Button>
          <Button onClick={handlePercentageClick} className="bg-gray-300 hover:bg-gray-400 text-black rounded-xl col-span-1">
            %
          </Button>
          <CalculatorButton value="/" onClick={handleOperatorClick} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl col-span-1" />

          <CalculatorButton value={7} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value={8} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value={9} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value="*" onClick={handleOperatorClick} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl col-span-1" />

          <CalculatorButton value={4} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value={5} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value={6} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value="-" onClick={handleOperatorClick} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl col-span-1" />

          <CalculatorButton value={1} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value={2} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value={3} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value="+" onClick={handleOperatorClick} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl col-span-1" />

          <CalculatorButton value={0} onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-2" />
          <CalculatorButton value="." onClick={handleNumberClick} className="bg-gray-100 hover:bg-gray-200 text-black rounded-xl col-span-1" />
          <CalculatorButton value="=" onClick={handleEqualsClick} className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl col-span-1" />
        </div>
      </div>
    </div>
  )
}

export default Calculator
