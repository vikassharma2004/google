import { useState } from "react";
import Confetti from "react-confetti";

const Email = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent form submission
    
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <>
      {/* Confetti Component */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            gravity={0.1}
            numberOfPieces={700}
            recycle={false}
          />
        </div>
      )}

      {/* Email Section */}
      <div className="bg-black" id="contact">
        <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-lg shadow-xl overflow-hidden">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to join our mission?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  Sign up for our newsletter to stay updated on the latest
                  developments in wildfire prevention.
                </p>
                <form
                  className="mt-8 sm:flex border border-white text-white"
                  onSubmit={handleSubscribe}
                >
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-3 !rounded-button text-base text-white placeholder-gray-500 border border-transparent"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 bg-black cursor-pointer w-full px-6 py-3 border border-transparent text-base font-medium !rounded-button text-black bg-white hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;