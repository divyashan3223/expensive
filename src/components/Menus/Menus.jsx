import LeftBar from "../leftbar/page";

const Menus = ({ children }) => {
  return (
    <div className="flex">
      <LeftBar />
      <div className="grow">{children}</div>
    </div>
  );
};

export default Menus;
