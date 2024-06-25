const Catagories = ({ content, imgSrc }) => {
  return (
    <div className=" gap-2 h-[26px] flex items-center  w-[700px]">
      <img
        src={imgSrc}
        alt={content}
        className="h-[14px]  object-cover leading-3"
      />
      <h2 className="text-xs leading-3 ">{content}</h2>
    </div>
  );
};

export default Catagories;
