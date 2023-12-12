import { useContext } from "react";
import { AppContext } from "../App";

const Account = () => {
  const { un, setUn } = useContext(AppContext);

  return (
    <div>
      <p>Account</p>
      <p>{un}</p>
    </div>
  );
};

export default Account;
