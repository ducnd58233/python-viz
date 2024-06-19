import React, { useRef, useState } from 'react'
import ActionButtons from 'components/ActionButtons'
import CommandHistory from 'components/CommandHistory'
import InputForm from 'components/InputForm'
import ListDisplay from 'components/ListDisplay'

export const QueuePage: React.FC = () => {
  const [queue, setQueue] = useState<(number | number[])[]>([])
  const refQueue = useRef(queue)
  const [commandHistory, setCommandHistory] = useState<string[]>([
    'from collections import deque\n\n',
    'queue = deque()',
  ])
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const formatInput = (inputValue?: string): number[] => {
    return inputValue
      ? inputValue.split(',').map((val) => parseFloat(val.trim()))
      : []
  }

  const handleClearCommandHistory = () => {
    setCommandHistory([])
  }

  const formatOutput = () => {
    return `deque(${JSON.stringify(refQueue.current)})`
  }

  const handleEnqueue = (_indexValue?: number, inputValue?: string) => {
    const values = formatInput(inputValue)
    if (values.some(isNaN)) {
      alert('All values should be number')
      return
    }

    const commandValues =
      values.length === 1 ? `${values[0]}` : JSON.stringify(values)

    setQueue((curQueue) => {
      const newQueue = [...curQueue, values.length === 1 ? values[0] : values]
      refQueue.current = newQueue

      return newQueue
    })

    setCommandHistory((history) => [
      ...history,
      `queue.append(${commandValues}) # ${formatOutput()}`,
    ])

    setHighlightedIndex(null)
  }

  const handleDequeue = () => {
    if (queue.length === 0) {
      setCommandHistory((history) => [
        ...history,
        '# queue.popleft() # IndexError: dequeue from empty queue',
      ])
      alert('IndexError: dequeue from empty queue')
      return
    }

    setQueue((curQueue) => {
      const newQueue = curQueue.slice(1)
      refQueue.current = newQueue
      return newQueue
    })

    setCommandHistory((history) => [
      ...history,
      `queue.popleft() # ${formatOutput()}`,
    ])
  }

  const handleIsEmpty = () => {
    setCommandHistory((history) => [
      ...history,
      `is_empty = len(queue) == 0`,
      `print(is_empty) # ${queue.length === 0 ? 'True': 'False'}`,
    ])
  }

  const handlePeek = () => {
    const front = queue.length > 0 ? queue[0] : null
    if (!front) {
      setCommandHistory((history) => [
        ...history,
        `# print(queue[0]) # IndexError: deque index out of range`,
      ])
      return
    }
    setCommandHistory((history) => [...history, `print(queue[0]) # ${front}`])
  }

  const inputLabels = {
    enqueue: {
      text: 'Enqueue',
      bgColor: 'bg-blue-500',
      textColor: 'text-white',
    },
  }

  const buttonLabels = {
    dequeue: {
      text: 'Dequeue',
      bgColor: 'bg-red-500',
      textColor: 'text-white',
    },
    isempty: {
      text: 'Is Empty',
      bgColor: 'bg-orange-500',
      textColor: 'text-white',
    },
    peek: { text: 'Peek', bgColor: 'bg-purple-500', textColor: 'text-white' },
  }

  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <h1 className='text-3xl font-bold text-center mb-6'>
        Python Queue Functions Visualizer
      </h1>

      <div className='grid grid-cols-2 gap-8 h-86'>
        <div className='grid grid-rows-2 gap-4'>
          <div className='border-2 border-black border-dashed px-4 py-4 rounded-md'>
            <InputForm
              operations={{ enqueue: handleEnqueue }}
              labels={inputLabels}
            />
          </div>

          <div className='border-2 border-black border-dashed px-4 py-4 rounded-md'>
            <ActionButtons
              actions={{
                dequeue: handleDequeue,
                isempty: handleIsEmpty,
                peek: handlePeek,
              }}
              labels={buttonLabels}
            />
          </div>
        </div>

        <div className='w-full border-2 border-black border-dashed px-4 py-4 rounded-md'>
          <CommandHistory
            commandHistory={commandHistory}
            onClearHistory={handleClearCommandHistory}
          />
        </div>
      </div>

      <div className='w-full overflow-x-auto'>
        <ListDisplay list={queue} highlightedIndex={highlightedIndex} />
      </div>
    </div>
  )
}
