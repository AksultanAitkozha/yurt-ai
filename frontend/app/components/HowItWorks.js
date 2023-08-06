const HowItWorks = () => {
    return (
      <div className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-inter">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start">
            <span className="inline-block h-8 w-8 rounded-full bg-white mr-4 items-center justify-center text-black font-bold">1</span>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-inter">Upload Your Designs</h3>
              <p className="text-gray-600 font-inter">Start by uploading your architectural designs or sketches. Our AI detects the elements and gets to work.</p>
            </div>
          </div>
  
          <div className="flex items-start">
            <span className="inline-block h-8 w-8 rounded-full bg-white mr-4 items-center justify-center text-black font-bold">2</span>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-inter">Make Selections</h3>
              <p className="text-gray-600 font-inter">Choose the building type, style, material, and season. Customize as per your client&apos;s requirements or preferences.</p>
            </div>
          </div>
  
          <div className="flex items-start">
            <span className="inline-block h-8 w-8 rounded-full bg-white mr-4 items-center justify-center text-black font-bold">3</span>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-inter">Preview and Adjust</h3>
              <p className="text-gray-600 font-inter">Once the AI completes the transformation, preview the renders. Adjust any final touches or preferences.</p>
            </div>
          </div>
  
          <div className="flex items-start">
            <span className="inline-block h-8 w-8 rounded-full bg-white mr-4 items-center justify-center text-black font-bold">4</span>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-inter">Download and Present</h3>
              <p className="text-gray-600 font-inter">After finalizing the designs, download high-quality images and present to your clients or stakeholders.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowItWorks;
  
  