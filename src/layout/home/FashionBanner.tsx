const FashionBanner = () => {
  return (
    <div className="flex items-center justify-center px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8">
      
      {/* Banner Container */}
      <div
        className="
          w-full 
          h-[28vh]
          sm:h-[40vh]
          md:h-[55vh]
          lg:h-[70vh]
          xl:h-[80vh]
          overflow-hidden 
          rounded-[20px] 
          sm:rounded-3xl
          md:rounded-[30px]
        "
      >
        {/* Image */}
        <img
          src="/fashion-banner.png"
          alt="Fashion Banner"
          className="h-full w-full object-cover rounded-[20px] sm:rounded-[24px] md:rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default FashionBanner;