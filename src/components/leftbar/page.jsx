import Catagories from "../sidebar/Catagories";
import eat from "../../assets/eat.png";
import kit from "../../assets/kit.png";
import tv from "../../assets/tv.png";
import auto from "../../assets/auto-repair-svgrepo-com 1.png";
import gas from "../../assets/gas.png";
import supers from "../../assets/Vector.png";
const LeftBar = () => {
  return (
    <div className=" top-8">
      <div className=" h-[1035px] w-[150px]  pl-4 border-r-2 mt-6  ">
        <p className=" text-[14px] mb-5 font-semibold">Catagories</p>
        <div className="flex flex-col gap-1">
          <Catagories content={"Restaurants"} imgSrc={eat} />
          <Catagories content={"Medical Service"} imgSrc={kit} />
          <Catagories content={"Financial Service"} imgSrc={tv} />
          <Catagories content={"Automotives"} imgSrc={auto} />
          <Catagories content={"Gas Station"} imgSrc={gas} />
          <Catagories content={"Supermarket"} imgSrc={supers} />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
