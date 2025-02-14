

const Hero = () => {
  return (
<>
<div className="relative bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-1/2 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Protecting Forests</span>
                <span className="block text-custom">With AI Innovation</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                EcoShield leverages cutting-edge AI technology to predict,
                prevent, and protect against wildfires. Join us in our mission to
                preserve our natural heritage for future generations.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mr-5">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg"
          src="https://eos.com/wp-content/uploads/2021/07/dry-weather-and-starting-forest-fire.jpg.webp"
          alt="AI Wildfire Prevention"
        />
      </div>
    </div>
</>
  )
}

export default Hero