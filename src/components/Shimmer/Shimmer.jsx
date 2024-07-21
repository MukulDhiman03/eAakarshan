import React from "react";
const Shimmer = () => {
  return (
    <div className="flex justify-evenly flex-wrap">
      {Array(12)
        .fill("")
        .map((e, index) => {
          return (
            <div
              key={index}
              style={{
                width: "300px",
                height: "400px",
                backgroundColor: "#E0E0E0",
                marginTop: "10px",
              }}
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
