import { createContext, useState } from "react";
import styles from "./App.module.css";
import Todo from "./Todo";
import Fetch from "./Fetch";
import AxiosLearn from "./AxiosLearn";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./components/Profile";
import Account from "./components/Account";

export const AppContext = createContext({
  un: "Aishwarya",
  setUn: (newUn: string) => {},
});

function App() {
  const [un, setUn] = useState("Aishwarya");
  const value = { un, setUn };

  return (
    <div>
      <AppContext.Provider value={value}>
        <Router>
          <nav className={styles.links}>
            <Link to="/home">HOME</Link>
            <Link to="/todo">TODO</Link>
            <Link to="/fetch">FETCH</Link>
            <Link to="/axios">AXIOS</Link>
          </nav>
          <Routes>
            <Route path="home" element={<Home />}>
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route index path="todo" element={<Todo />} />
            <Route path="fetch" element={<Fetch />} />
            <Route path="axios" element={<AxiosLearn />} />
            <Route
              path="*"
              element={
                <div className={styles.errorPage}>
                  <p>404 PAGE NOT FOUND</p>
                </div>
              }
            />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
