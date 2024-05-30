import { useState } from 'react'
import ActionButtons from 'components/ActionButtons'
import CommandHistory from 'components/CommandHistory'
import InputForm from 'components/InputForm'
import ListDisplay from 'components/ListDisplay'

export const ListFunctions: React.FC = () => {
  const [list, setList] = useState<(number | number[])[]>([])
  const [isAscending, setIsAscending] = useState<boolean>(true)
  const [commandHistory, setCommandHistory] = useState<string[]>([
    'my_list = []',
  ])

  const handleAppend = (inputValue: string) => {
    const values = inputValue.split(',').map((val) => parseFloat(val.trim()))
    if (values.some(isNaN)) {
      alert('All values should be number')
      return
    }
    setList((curList) => [...curList, values.length === 1 ? values[0] : values])
    setCommandHistory((history) => [
      ...history,
      `my_list.append(${values.length === 1 ? values[0] : `[${values}]`})`,
    ])
  }

  const handleExtend = (inputValue: string) => {
    const values = inputValue.split(',').map((val) => parseFloat(val.trim()))
    if (values.some(isNaN)) {
      alert('All values should be number')
      return
    }
    setList((curList) => [...curList, ...values])
    setCommandHistory((history) => [
      ...history,
      `my_list.append(${values.length === 1 ? values[0] : `[${values}]`})`,
    ])
  }

  const handlePop = () => {
    setList((curList) => curList.slice(0, -1))
    setCommandHistory((history) => [...history, 'my_list.pop()'])
  }

  const handleSort = () => {
    if (list.some((item) => Array.isArray(item))) {
      setCommandHistory((history) => [
        ...history,
        "// my_list.sort() // TypeError: '<' not supported between instances of 'list' and 'int'",
      ])
      alert(
        "TypeError: '<' not supported between instances of 'list' and 'int'"
      )
      return
    }
    setList((curList) =>
      [...curList].sort((a, b) => {
        if (isAscending) {
          setCommandHistory((history) => [...history, 'my_list.sort()'])
          return (a as number) - (b as number)
        }
        setCommandHistory((history) => [
          ...history,
          'my_list.sort(reverse=True)',
        ])
        return (b as number) - (a as number)
      })
    )
  }

  const toggleSortOrder = () => {
    setIsAscending((val) => !val)
  }

  const handleReverse = () => {
    setList((curList) => [...curList].reverse())
    setCommandHistory((history) => [...history, 'my_list.reverse()'])
  }

  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <InputForm onAppend={handleAppend} onExtend={handleExtend} />
      <ActionButtons
        onPop={handlePop}
        onSort={handleSort}
        onToggleSortOrder={toggleSortOrder}
        onReverse={handleReverse}
        isAscending={isAscending}
      />
      <ListDisplay list={list} />
      <CommandHistory commandHistory={commandHistory} />
    </div>
  )
}
