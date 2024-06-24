import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png"

const Header = () => {
  const navigate = useNavigate();

  const handleHeadingClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="header">
      <h1 className="main-heading" onClick={handleHeadingClick}>
        <img src={logo} alt="logo" className="main-heading-logo"/>
      </h1>
    </div>
  );
};
export default Header;
