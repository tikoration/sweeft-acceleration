import { Link } from "react-router-dom";
import { HeaderDiv } from "./componentStyles";
import unsplashLogo from '../assets/unsplash.png'

const Header = () => {
  return (
    <HeaderDiv>
      <img src={unsplashLogo} alt="Unsplash Logo"/>
      <div className="titles">
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          Photo Gallery
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to="/history">
          Search History
        </Link>
      </div>
    </HeaderDiv>
  );
};

export default Header;
