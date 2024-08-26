import image from '../assets/try.svg'
import Navbar from './Navbar'
const Hero=()=>{
    return(
      <div>
        <Navbar />
        <main className="bg-gray-100 py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Welcome to Rearticle
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Your go-to platform for summarizing research papers and extracting all necessary information.
            </p>
            <div className="mt-6">
              <a href="#signup" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition duration-200">
                Get Started
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={image} alt="Illustration" className="w-full h-auto" />
          </div>
        </div>
      </main>
      </div>
    )
}

export default Hero