import { ListBulletIcon, QueueListIcon } from '@heroicons/react/16/solid'
import SideBar from 'components/SideBar'
import { Outlet } from 'react-router-dom'

export const RootPage: React.FC = () => {
  const sidebarItems = [
    {
      path: '/list',
      label: 'List',
      icon: <ListBulletIcon className='h-6 w-6' />,
    },
    {
      path: '/queue',
      label: 'Queue',
      icon: <QueueListIcon className='h-6 w-6' />,
    },
  ]

  return (
    <div className='flex h-screen'>
      <SideBar items={sidebarItems} />
      <div className='flex-grow p-6 bg-gray-100'>
        <Outlet />
      </div>
    </div>
  )
}
