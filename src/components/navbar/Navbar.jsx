import logo from "../../assets/Group.jpg";
import bill from "../../assets/Group 709.png";
import email from "../../assets/Frame 2.png";
import search from "../../assets/search.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-white border-b-2">
      <nav className="flex justify-between pt-6 pl-6 pr-6 pb-2">
        <img src={logo} alt="" className="h-10" />
        <div className="dataside   w-72  justify-between  items-center  flex">
          <div className="flex items-center border w-44 rounded-2xl p-1  pl-2">
            <img src={search} alt="" className="h-4 " />
            <input
              type="text"
              placeholder="Search..."
              className="border-none"
            />
          </div>
          <div className="emailimg flex items-center">
            <img src={bill} alt="varala" className="h-10" />
            <img src={email} alt="varala" className="h-11" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
