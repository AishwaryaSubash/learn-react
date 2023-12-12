import { useContext, useState } from "react";
import { AppContext } from "../App";

const Profile = () => {
  const { un, setUn } = useContext(AppContext);
  const [newUn, setNewUn] = useState("");

  return (
    <div>
      <p>Profile</p>
      <div>{un}</div>
      <input
        type="text"
        value={newUn}
        onChange={(event) => setNewUn(event.target.value)}
      />
      <button onClick={() => setUn(newUn)}>CHANGE</button>
    </div>
  );
};

export default Profile;
