import React, { Component, useState, useEffect } from "react";

const Greet = (props) => {
  const [time, setTime] = useState(new Date());

  const changeTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const tick = setInterval(() => {
      changeTime();
    }, 1000);
    return () => clearInterval(tick);
  });

  const date = new Date();
  const hours = date.getHours(time.toLocaleTimeString());
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  const styles = {
    color: "#FF8C00",
    fontSize: 20,
    textAlign: "center",
  };
  return (
    <div className="Time">
      <p style={styles}>
        Good {timeOfDay}, it is {time.toLocaleTimeString()} now
      </p>
    </div>
  );
};

export default Greet;
