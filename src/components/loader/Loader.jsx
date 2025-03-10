import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="md:h-16 h-8 md:w-16 w-8 rounded-full animate-spin border-[#6C5FD4] border-t-2"></div>
    </div>
  );
};

export default Loader;
