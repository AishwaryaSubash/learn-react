import Axios from "axios";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const { jsonData, isLoading, isError } = useQuery([], () => {
    Axios.get("https://countriesnow.space/api/v0.1/countries/capital").then(
      (response) => {
        console.log(response.data.data);
        return response.data.data;
      }
    );
  });

  if (isError) {
    return <h1>Error!!!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <p>home</p>
      <nav>
        <Link to="profile">PROFILE</Link>
        <Link to="account">ACCOUNT</Link>
      </nav>
      <Outlet />
      {jsonData?.map((item: { name: string; capital: string }, key: number) => {
        return (
          <div key={key}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
