
import { FaRobot } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import LineChartComponent from "./Missionschart";
LineChartComponent
const MIssion = () => {
  return (
  <>
   <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission &amp; Vision
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Pioneering AI-driven solutions for early wildfire detection and
            prevention
          </p>
        </div>
        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <FaRobot/>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        AI-Powered Detection
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Advanced algorithms analyze satellite imagery and sensor
                        data to detect potential fire risks before they escalate.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                       <FaShieldAlt/>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Proactive Prevention
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Real-time monitoring and predictive analytics help
                        forestry teams take preventive action.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                     <IoPeople/>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Community Engagement
                      </h3>
                      <p className="mt-2 text-base text-gray-500">
                        Empowering local communities with knowledge and tools for
                        wildfire prevention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:relative">
             
            <LineChartComponent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default MIssion