import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>home</p>
      <nav>
        <Link to="profile">PROFILE</Link>
        <Link to="account">ACCOUNT</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
