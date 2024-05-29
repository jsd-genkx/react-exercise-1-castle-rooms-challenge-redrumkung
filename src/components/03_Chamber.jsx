import Room from "./04_Room";

const Chamber = ({ message1, onReply }) => {
  return (
    <>
      <div>Chamber</div>
      <span>Message for JSD7: {message1}</span>
      <Room message1={message1} onReply={onReply} />
    </>
  );
};

export default Chamber;
