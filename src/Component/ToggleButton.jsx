import React, { useState } from "react";

function ToggleButton() {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <button
      className="bg-gray-800 text-white rounded-full p-2 ml-auto"
      onClick={handleToggle}
      data-light={isLightMode ? "true" : "false"}
    >
      dark
    </button>
  );
}

export default ToggleButton;
