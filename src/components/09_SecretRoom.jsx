import { useState } from "react";
const SecretRoom = ({ message1, onReply }) => {

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onReply(inputValue);
  };

  return (
    <>
      <div>SecretRoom</div>
      <span>Message for JSD7: {message1}</span>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleButtonClick}>Send Reply</button>
    </>
  );
};

export default SecretRoom;
