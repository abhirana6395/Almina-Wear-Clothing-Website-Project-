const SkeletonCard = () => {
  return (
    <div className="border p-4 animate-pulse">
      {/* Image */}
      <div className="h-[350px] bg-gray-200 mb-4"></div>

      {/* Text */}
      <div className="h-4 bg-gray-200 mb-2"></div>
      <div className="h-4 bg-gray-200 w-1/2 mx-auto"></div>

      {/* Button */}
      <div className="h-10 bg-gray-300 mt-4"></div>
    </div>
  );
};

export default SkeletonCard;
