import { Link } from "react-router-dom"
import "./Onboarding.css"
import OnboardingImg from "../../../assets/Images/onboard.svg"

const Onboarding = () => {
  return (
    <div className="onboarding-container">
      <img
        src={OnboardingImg}
        alt=""
        className="onboarding-image"
      />
      <div className="onboarding-content">
        <h1 className="onboarding-title">All recipes you needed</h1>
        <p className="onboarding-description">
          5000+ healthy recipes made by people for your healthy life
        </p>
        <Link
          to="/home"
          className="get-started-button">
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Onboarding
