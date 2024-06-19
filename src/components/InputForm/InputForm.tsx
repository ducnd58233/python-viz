import { useState } from 'react'

interface InputFormProps {
  operations: {
    [key: string]: (indexValue?: number, inputValue?: string) => void
  }
  labels: {
    [key: string]: {
      text: string
      bgColor: string
      textColor: string
    }
  }
}

export const InputForm: React.FC<InputFormProps> = ({ operations, labels }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [indexValue, setIndexValue] = useState<string>('')
  const [operation, setOperation] = useState<string>(Object.keys(operations)[0])

  const handleOperation = () => {
    const idx = parseInt(indexValue, 10)
    if (operation === 'insert' && isNaN(idx)) {
      alert("TypeError: 'str' object cannot be interpreted as an integer")
      return
    }
    operations[operation](isNaN(idx) ? undefined : idx, inputValue)
    setInputValue('')
    setIndexValue('')
  }

  return (
    <div className='flex flex-col mt-4'>
      <div className='flex space-x-2 mt-8 items-center'>
        <div className='text-2xl text-blue-800 font-bold'>Select action</div>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className='border p-2 rounded'>
          {Object.keys(operations).map((op) => (
            <option key={op} value={op}>
              {labels[op].text}
            </option>
          ))}
        </select>
      </div>
      <div className='flex space-x-2 mt-8'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter value or comma-separated list'
          className='border p-2 w-full rounded'
        />
        {operation === 'insert' && (
          <input
            type='text'
            value={indexValue}
            onChange={(e) => setIndexValue(e.target.value)}
            placeholder='Enter index'
            className='border p-2 rounded'
          />
        )}
        <button
          onClick={handleOperation}
          className={`px-4 py-2 rounded ${labels[operation].bgColor} ${labels[operation].textColor}`}>
          {labels[operation].text}
        </button>
      </div>
    </div>
  )
}
