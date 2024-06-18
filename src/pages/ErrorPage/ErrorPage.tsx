import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center mt-[50px]'>
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for does not exist or under-development.
      </p>
      <p>
        You can always go back to the <Link to='/python-viz'>homepage</Link>.
      </p>
    </div>
  )
}
