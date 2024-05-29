import Chamber from "./03_Chamber";

const Tower = ({ message1, onReply }) => {
  return (
    <>
      <div>Castle</div>
      <span>Message for JSD7: {message1}</span>
      <Chamber message1={message1} onReply={onReply} />
    </>
  );
};

export default Tower;
