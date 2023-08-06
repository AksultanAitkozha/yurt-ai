const HowItWorks = () => (
    <div className="bg-black text-white p-8 md:p-16">
      <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Inter' }}>How it works</h2>
      <div className="flex flex-wrap justify-between">
        {['process1', 'process2', 'process3'].map((process, index) => (
          <div key={index} className="w-full md:w-1/3 mb-8 md:mb-0 px-2">
            <img src={`/path/to/${process}.jpg`} alt={`Process ${index + 1}`} />
            <p className="mt-4" style={{ fontFamily: 'Inter' }}>Description for Process {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default HowItWorks;
  