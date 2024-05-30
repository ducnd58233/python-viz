import { AnimatePresence, motion } from 'framer-motion'

interface ListDisplayProps {
  list: (number | number[])[]
}

export const ListDisplay: React.FC<ListDisplayProps> = ({ list }) => {
  return (
    <div className='flex flex-col items-center'>
      <h4 className='text-xl font-bold mt-2'>Indexes:</h4>
      <div className='mt-2 flex justify-center items-center w-full'>
        <AnimatePresence>
          {list.map((_, index) => (
            <motion.div
              key={`index-${index}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1 }}
              className='bg-gray-200 text-gray-800 text-sm font-semibold p-4 m-2 rounded shadow-md w-24 h-12 flex items-center justify-center'>
              {index}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <h4 className='text-xl font-bold mt-2'>Values:</h4>
      <div className='mt-2 flex justify-center items-center w-full'>
        <AnimatePresence>
          {list.map((item, index) => (
            <motion.div
              key={`item-${index}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1 }}
              className='bg-blue-200 text-blue-800 text-sm font-semibold p-4 m-2 rounded shadow-md w-24 h-12 flex items-center justify-center'>
              {Array.isArray(item) ? `[${item.join(', ')}]` : `${item}`}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
