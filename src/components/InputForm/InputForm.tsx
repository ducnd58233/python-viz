import { useState } from 'react'

interface InputFormProps {
  onAppend: (inputValue: string) => void
  onExtend: (extendInputValue: string) => void
}

export const InputForm: React.FC<InputFormProps> = ({ onAppend, onExtend }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [extendInputValue, setExtendInputValue] = useState<string>('')

  const handleAppend = () => {
    onAppend(inputValue)
    setInputValue('')
  }

  const handleExtend = () => {
    onExtend(extendInputValue)
    setExtendInputValue('')
  }

  return (
    <div>
      <div className='mt-4'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Enter number or comma-separated list'
          className='border p-2 mr-2 rounded'
        />
        <button
          onClick={handleAppend}
          className='bg-blue-500 text-white px-4 py-2 rounded'>
          Append
        </button>
      </div>
      <div className='mt-4'>
        <input
          type='text'
          value={extendInputValue}
          onChange={(e) => setExtendInputValue(e.target.value)}
          placeholder='Enter comma-separated list'
          className='border p-2 mr-2 rounded'
        />
        <button
          onClick={handleExtend}
          className='bg-blue-500 text-white px-4 py-2 rounded'>
          Extend
        </button>
      </div>
    </div>
  )
}
