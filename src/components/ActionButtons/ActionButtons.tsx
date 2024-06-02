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
    <div className='mt-8 flex justify-center space-x-4'>
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
        onClick={onSort}
        className='bg-green-500 text-white px-4 py-2 rounded'>
        Sort
      </button>
      <button
        onClick={onToggleSortOrder}
        className='bg-yellow-500 text-white px-4 py-2 rounded'>
        {isAscending ? 'Sort Ascending' : 'Sort Descending'}
      </button>
      <button
        onClick={onReverse}
        className='bg-purple-500 text-white px-4 py-2 rounded'>
        Reverse
      </button>
    </div>
  )
}
