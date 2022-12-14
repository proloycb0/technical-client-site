import React from "react";

const Histories = ({ history }) => {
  
  return (
    <div>
      <div className="flex gap-3 border-2 mb-3 p-4 mx-2 rounded">
        <div>
          <img src={history.image} alt="" />
        </div>
        <div className="text-start">
          <h2 className="text-2xl font-bold text-purple-500 mb-2">
            {history.model}
          </h2>
          {/* feature  */}
          <div>
            <h4 className="font-semibold text-xl text-orange-500">Feature</h4>
            <div className="h-[2px] rounded-full bg-gray-300"></div>
            <ul>
              {history.keyFeature.map((feature) => {
                return (
                  <li key={feature} className='text-lg font-semibold '>
                    {feature}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histories;
