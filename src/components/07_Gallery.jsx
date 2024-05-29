import Nook from "./08_Nook";

const Gallery = ({ message1, onReply }) => {
  return (
    <>
      <div>Gallery</div>
      <span>Message for JSD7: {message1}</span>
      <Nook message1={message1} onReply={onReply} />
    </>
  );
};

export default Gallery;
