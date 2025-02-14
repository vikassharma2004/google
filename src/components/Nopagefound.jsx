
import { Link } from "react-router-dom"
const Nopagefound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
    <h1 className="text-9xl font-bold text-gray-800">404</h1>
    <h2 className="text-2xl font-medium text-gray-600 mt-4">Oops! Page Not Found</h2>
    <p className="text-lg text-gray-500 mt-2">The page you&apos;re looking for might have been moved or deleted.</p>
    <Link to="/" className="mt-6 text-blue-500 hover:text-blue-700">Go back to Home</Link>
  </div>
  )
}

export default Nopagefound