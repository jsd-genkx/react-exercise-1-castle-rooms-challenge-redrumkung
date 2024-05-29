import Tower from "./02_Tower";

const Castle = ({ message1, onReply }) => {
  return (
    <>
      <div>Castle</div>
      <span>Message for JSD7: {message1}</span>
      <Tower message1={message1} onReply={onReply} />
    </>
  );
};

export default Castle;
