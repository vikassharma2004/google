import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm ">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex  items-center gap-6">
          <Link to={'/'} className="flex-shrink-0 flex items-center cursor-pointer">
            <img
              className="h-10 w-auto"
              src="https://media.istockphoto.com/id/1907393568/vector/fire-icon-burning-flame-bonfire-forbidden-symbol-crossed-red-circle-combustion-prevent.jpg?s=612x612&w=0&k=20&c=_GhxP2U7_PEYvgM21RcDlreoHrMffPwl1-ZX6xKR5h0="
              alt="EcoShield"
            />
          </Link>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to={'/profile'}
              
              className="border-custom text-custom inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              About
            </Link>
            <Link
              to={'/solutions'}
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Solutions
            </Link>
            <Link
             to={'/dashboard'}
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              to={'/contact'}
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to={'/profile'}
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
             profile
            </Link>
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <button className="bg-black !rounded-button px-4 py-2 text-sm font-medium hover:bg-black/90 cursor-pointer text-white">
            Join Our Mission
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar