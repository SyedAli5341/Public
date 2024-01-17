import React from 'react';

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col items-center gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide text-center">
        {title}
      </h3>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold capitalize text-center">
        {des}
      </h1>
    </div>
  );
};

export default Title;