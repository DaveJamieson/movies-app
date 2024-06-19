import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="header">
      <h1 className="main-heading" onClick={handleClick}>
        {" "}
        Movies App
      </h1>
    </div>
  );
};
export default Header;
