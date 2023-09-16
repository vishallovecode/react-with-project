import { useState } from "react";

const Home = () => {
  const [isActive, setIsActive] = useState(true);
  const [headingHome, setHeading] = useState("Hey I am home");

  const toggleCard = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <h2>{headingHome}</h2>
      <button className="buttonhome" onClick={toggleCard}>
        {`Switch to ${isActive ? "disable" : "Active"} card mode`}
      </button>
      {isActive ? (
        <div className="card"> This is active card</div>
      ) : (
        <div className="disablecard">This is disabled card</div>
      )}
    </div>
  );
};

export default Home;

// const a = b % 2 == 0 ? "even" : "odd";
