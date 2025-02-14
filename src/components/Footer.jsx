

const Footer = () => {
  return (
    <footer className="bg-gray-800">
    <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      {" "}
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <img
            className="h-10"
            src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
            alt="EcoShield"
          />{" "}
          <p className="text-gray-300 text-base">
            Protecting our forests through AI innovation and community
            engagement.
          </p>{" "}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-facebook text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-twitter text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-linkedin text-xl" />
            </a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          {" "}
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    AI Detection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Prevention
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Monitoring
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              {" "}
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {" "}
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8">
        <p className="text-base text-gray-400 xl:text-center">
          {" "}
          © 2024 EcoShield. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer