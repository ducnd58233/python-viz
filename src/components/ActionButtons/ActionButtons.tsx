interface ActionButtonsProps {
  onPop: () => void
  onClear: () => void
  onSort: () => void
  onToggleSortOrder: () => void
  onReverse: () => void
  isAscending: boolean
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onPop,
  onClear,
  onSort,
  onToggleSortOrder,
  onReverse,
  isAscending,
}) => {
  return (
    <div className='flex flex-col mt-4 gap-4'>
      <div className='flex space-x-2 mt-8 items-center'>
        <div className='text-2xl text-blue-800 font-bold'>Sort order: </div>
        <button
          onClick={onToggleSortOrder}
          className='bg-yellow-500 text-white px-4 py-2 rounded'>
          {isAscending ? 'Ascending' : 'Descending'}
        </button>
        <button
          onClick={onSort}
          className='bg-green-500 text-white px-4 py-2 rounded'>
          Sort
        </button>
      </div>

      <div className='flex space-x-2 mt-8 items-center'>
        <div className='text-2xl text-blue-800 font-bold'>Other actions: </div>
        <button
          onClick={onPop}
          className='bg-red-500 text-white px-4 py-2 rounded'>
          Pop
        </button>
        <button
          onClick={onClear}
          className='bg-orange-500 text-white px-4 py-2 rounded'>
          Clear
        </button>
        <button
          onClick={onReverse}
          className='bg-purple-500 text-white px-4 py-2 rounded'>
          Reverse
        </button>
      </div>
    </div>
  )
}
