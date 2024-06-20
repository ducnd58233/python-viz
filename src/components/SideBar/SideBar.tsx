import { Link } from 'react-router-dom'

interface SidebarProps {
  items: { path: string; label: string; icon: React.ReactNode }[]
}

export const SideBar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className='w-64 bg-gray-800 text-white flex flex-col min-h-screen overflow-y-auto'>
      <div className='flex-grow'>
        {items.map((item) => (
          <Link to={item.path} key={item.path}>
            <div className='flex items-center px-6 py-4 cursor-pointer hover:bg-gray-700'>
              {item.icon}
              <span className='text-lg ml-2'>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
