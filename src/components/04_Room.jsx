import Hall from "./05_Hall"

const Room = ({ message1, onReply }) => {
  return (
    <>
      <div>Hall</div>
      <span>Message for JSD7: {message1}</span>
      <Hall message1={message1} onReply={onReply} />
    </>
  );
};

export default Room;
