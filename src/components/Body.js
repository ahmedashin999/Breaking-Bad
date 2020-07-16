import React, { useState, useEffect, Fragment } from "react";
import Search from "./Search";
import axios from "axios";
import Spinner from "./Spinner.js";

function Body({ getQuery }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <Fragment>
      <Search getQuery={(q) => setQuery(q)} />

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid">
          {items.map((item) => (
            <div className=" card-container">
              <>
                <div className="card bg-dark text-center card-front ">
                  <img
                    src={item.img}
                    alt=""
                    height="90%"
                    className="card-img-top"
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-white text-center">
                      {item.name}
                    </h5>
                  </div>
                </div>
                <div className="card bg-dark   text-white card-back">
                  <img
                    src={item.img}
                    className="rounded-circle d-block mx-auto"
                    height="80px"
                    width="80px"
                    alt=""
                  />
                  <div className="card-body mx-2 my-0">
                    <p>Name: {item.name}</p>
                    <p>Birthday: {item.birthday}</p>
                    <p>
                      Occupation:{" "}
                      {item.occupation.map((i) => (
                        <ul>
                          <li>{i}</li>
                        </ul>
                      ))}
                      <p>Status: {item.status}</p>
                    </p>
                    Appearance:
                    {item.appearance.map((a) => (
                      <ul>
                        <li>Season: {a}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default Body;
