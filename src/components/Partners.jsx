import { FaFilePdf } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
const Partners = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-5">
        <div className="bg-white overflow-hidden shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
             <FaFilePdf size={30}/>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Prevention Techniques</h3>
              <p className="mt-1 text-sm text-gray-500">Video tutorials and demonstrations</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="inline-flex items-center px-4 py-2 border border-black  text-sm font-medium rounded-md text-white bg-black hover:bg-gray-600">
              Watch Videos <i className="fas fa-play ml-2" />
            </button>
          </div>
        </div>
        
        <div className="bg-white overflow-hidden shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
             <IoSchoolSharp size={30}/>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Online Training</h3>
              <p className="mt-1 text-sm text-gray-500">Interactive courses and quizzes</p>
            </div>
          </div>
          <div className="mt-4">
            <button className="inline-flex items-center px-4 py-2 border border-black text-sm font-medium rounded-md text-white bg-black hover:bg-gray-500">
              Start Learning <i className="fas fa-arrow-right ml-2" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Partners;
  