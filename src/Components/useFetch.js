import { useState } from "react";

export default function useFetch(baseUrl) {
  const [loading, setLoading] = useState(true);

  function get(url) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      })
          .then((response) => response.json())
          .then((data) => {
            if (!data) {
              setLoading(false);
              return reject(data);
            }
            setLoading(false);
            resolve(data);
          })
          .catch((error) => {
            setLoading(false);
            reject(error);
          });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
          .then((data) => {
            if (!data) {
              setLoading(false);
              return reject(data);
            }
            setLoading(false);
            resolve(data);
          })
          .catch((error) => {
            setLoading(false);
            reject(error);
          });
    });
  }

  function put(url, body) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
          .then((data) => {
            if (!data) {
              setLoading(false);
              return reject(data);
            }
            setLoading(false);
            resolve(data);
          })
          .catch((error) => {
            setLoading(false);
            reject(error);
          });
    });
  }

  return { get, post, put, loading };
}
