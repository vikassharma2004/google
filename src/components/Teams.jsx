
import { FaUser } from "react-icons/fa";
const Teams = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Team &amp; Partners
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Meet the experts behind EcoShield&apos;s innovative technology
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3  rounded-md shadow-lg transform -translate-y-1/2">
                <FaUser size={30} />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Dr. Sarah Chen
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  AI Research Director
                </p>
                <p className="mt-4 text-base text-gray-500">
                  Leading the development of our AI algorithms for early fire
                  detection.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-5  rounded-md shadow-lg transform -translate-y-1/2">
                 <FaUser size={30} />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  James Wilson
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Environmental Scientist
                </p>
                <p className="mt-4 text-base text-gray-500">
                  Expert in forest ecology and fire behavior modeling.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3  rounded-md shadow-lg transform -translate-y-1/2">
                <FaUser size={30} />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  Maria Rodriguez
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Community Outreach Director
                </p>
                <p className="mt-4 text-base text-gray-500">
                  Bridging technology with local community needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams