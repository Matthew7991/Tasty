import { Link } from "react-router-dom";
import Logo from "../../../assets/Images/Logo.svg"
import "./SplashScreen.css"

const SpashScreen = () => {
  return ( 
    <Link to="/Onboarding" className="splash-screen-link">
    <div className="splash-screen">
    <img src={Logo} alt="Logo" className="logo" />
    <h1 className="app-title">Tasty</h1>
    </div>
    </Link>
  );
}
 
export default SpashScreen;