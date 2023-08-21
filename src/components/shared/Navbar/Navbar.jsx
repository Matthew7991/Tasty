import Home from "../../../assets/Images/Homebtn.png"
import Search from "../../../assets/Images/Searchbtn.png"
import Heart from "../../../assets/Images/Heart.png"
import Profile from "../../../assets/Images/Profilebtn.png"




const Navbar = () => {
  return ( 
    <div className="Navbar">
      <img src={Home} alt="" />
      <img src={Search} alt="" />
      <img src={Heart} alt="" />
      <img src={Profile} alt="" />
    </div>
   );
}
 
export default Navbar;
