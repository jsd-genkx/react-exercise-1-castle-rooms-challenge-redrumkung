import Corridor from "./06_Corridor"

const Hall = ({ message1, onReply }) => {
  return (
    <>
      <div>Hall</div>
      <span>Message for JSD7: {message1}</span>
      <Corridor message1={message1} onReply={onReply} />
    </>
  );
};

export default Hall;
