interface CommandHistoryProps {
  commandHistory: string[]
}

export const CommandHistory: React.FC<CommandHistoryProps> = ({
  commandHistory,
}) => {
  return (
    <div>
      <h2 className='text-xl font-bold mt-4 mb-2'>Command History:</h2>
      <div className='bg-gray-100 p-4 rounded shadow-md w-full'>
        <pre className='text-left'>
          {commandHistory.map((command, index) => (
            <div key={index}>{command}</div>
          ))}
        </pre>
      </div>
    </div>
  )
}
