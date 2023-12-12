import { useEffect, useState } from "react";
import styles from "./App.module.css";

const Fetch = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data.data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.tables}>
      <div className={`${styles.states} ${styles.title}`}>
        <p>S.No.</p>
        <p>Countries</p>
        <p>Capital</p>
      </div>
      <hr />
      {jsonData.map((item: { name: string; capital: string }, key) => {
        return (
          <>
            {item.capital && (
              <div key={key} className={styles.states}>
                <p>{key + 1}</p>
                <p>{item.name}</p>
                <p>{item.capital}</p>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Fetch;
