import Gallery from "./07_Gallery"

const Corridor = ({ message1, onReply }) => {
  return (
    <>
      <div>Corridor</div>
      <span>Message for JSD7: {message1}</span>
      <Gallery message1={message1} onReply={onReply} />
    </>
  );
};

export default Corridor;
