import SecretRoom from "./09_SecretRoom";

const Nook = ({ message1, onReply }) => {
  return (
    <>
      <div>Nook</div>
      <span>Message for JSD7: {message1}</span>
      <SecretRoom message1={message1} onReply={onReply} />
    </>
  );
};

export default Nook;
