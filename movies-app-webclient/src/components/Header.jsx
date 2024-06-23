import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleHeadingClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="header">
      <h1 className="main-heading" onClick={handleHeadingClick}>
        {" "}
        Movies App
      </h1>
    </div>
  );
};
export default Header;
