import logo from "../../assets/Group.jpg";
import bell from "../../assets/Group 709.png";
import email from "../../assets/Frame 2.png";
import search from "../../assets/search.png";
const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-white border-b-2">
<<<<<<< Updated upstream
      <nav className="flex justify-between pt-6 pl-6 pr-6 pb-2">
        <img src={logo} alt="varala" className="h-10" />
=======
      <nav className="flex justify-between pt-6 pl-6 pr-6 ">
        <img src={logo} alt="" className="h-9" />
>>>>>>> Stashed changes
        <div className="dataside   w-72  justify-between  items-center  flex">
          <div className="flex items-center border w-44 rounded-2xl p-1  gap-2 pl-2">
            <img src={search} alt="" className="h-4 " />
            <input
              type="text"
              placeholder="Search..."
              className="border-none focus:outline-none "
            />
          </div>
          <div className="emailimg flex items-center">
            <img src={bell} alt="varala" className="h-12" />
            <img src={email} alt="varala" className="h-11" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
