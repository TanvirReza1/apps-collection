const Loading = ({ text = "Loading, please wait..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
      {/* Premium Gradient Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-purple-600 animate-spin"></div>
        <div className="absolute inset-1 rounded-full bg-white"></div>
      </div>

      {/* Text */}
      <p className="mt-5 text-gray-700 font-medium tracking-wide">{text}</p>
    </div>
  );
};

export default Loading;
