import Axios from "axios";
import { useState } from "react";
import styles from "./AxiosLearn.module.css";

function AxiosLearn() {
  const [jsonData, setJsonData] = useState([]);
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");

  Axios.get("https://countriesnow.space/api/v0.1/countries/capital").then(
    (response) => {
      setJsonData(response.data.data);
    }
  );

  const searchCapital = () => {
    const json = {
      country: country,
    };
    Axios.post(
      "https://countriesnow.space/api/v0.1/countries/capital",
      json
    ).then((response) => {
      setCapital(response.data.data.capital);
    });
  };

  return (
    <>
      <div className={styles.searchbar}>
        <input
          type="text"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
            setCapital("");
          }}
        />
        <button className={styles.btn} onClick={searchCapital}>
          GET CAPITAL
        </button>
      </div>
      {capital && (
        <div>
          <div className={styles.display}>
            <p>Country:</p>
            <p>{country}</p>
          </div>
          <div className={styles.display}>
            <p>Capital:</p>
            <p>{capital}</p>
          </div>
        </div>
      )}
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
    </>
  );
}

export default AxiosLearn;
