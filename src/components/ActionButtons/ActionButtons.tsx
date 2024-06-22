interface ActionButtonsProps {
  actions: {
    [key: string]: () => void
  }
  labels: {
    [key: string]: {
      text: string
      bgColor: string
      textColor: string
    }
  }
  sortActions?: {
    onSortAscending: () => void
    onSortDescending: () => void
  }
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  actions,
  labels,
  sortActions,
}) => {
  return (
    <div className='flex flex-col mt-4 gap-4'>
      {sortActions && (
        <div className='flex space-x-2 mt-8 items-center'>
          <div className='text-2xl text-blue-800 font-bold'>Sort order: </div>
          <button
            onClick={sortActions.onSortAscending}
            className='bg-yellow-500 text-white px-4 py-2 rounded'>
            Ascending
          </button>
          <button
            onClick={sortActions.onSortDescending}
            className='bg-green-500 text-white px-4 py-2 rounded'>
            Descending
          </button>
        </div>
      )}

      <div className='flex flex-wrap mt-8 items-center'>
        <div className='text-2xl text-blue-800 font-bold mr-2'>Actions: </div>
        {Object.keys(actions).map((actionKey) => (
          <button
            key={actionKey}
            onClick={actions[actionKey]}
            className={`px-4 py-2 rounded ${labels[actionKey].bgColor} ${labels[actionKey].textColor} m-1`}>
            {labels[actionKey].text}
          </button>
        ))}
      </div>
    </div>
  )
}
