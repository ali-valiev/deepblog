import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error.message);
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
};

export default useFetch;
