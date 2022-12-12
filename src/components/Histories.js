import React from "react";

const Histories = ({ history }) => {
  var myObject = { a: "c", b: "a", c: "b" };
  var keyNames = Object.keys(myObject);
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
          {/* spec  */}
          <div>
            <h4 className="font-semibold text-xl text-orange-500">Spec</h4>
            <div className="h-[2px] rounded-full bg-gray-300"></div>
            <div>
              {history.spec.map((spec) => (
                <>
                  <p>
                    <span className="uppercase font-bold text-green-600 text-lg">
                      {Object.keys(spec)[0]}:
                    </span>{" "}
                    <span className="font-semibold">{Object.values(spec)}</span>
                  </p>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histories;
