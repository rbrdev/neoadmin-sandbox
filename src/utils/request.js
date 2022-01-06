const request = (url, options) =>
  fetch(`${process.env.REACT_APP_API_URL}${url}`, {
    ...options,
    headers: getHeaders(options?.headers),
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res
        .json()
        .then((error) => Promise.reject({ status: res.status, error }));
    }
  });

const getHeaders = (headers) => {
  const nextHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem("token"),
    ...headers,
  };

  return Object.keys(nextHeaders)
    .filter((key) => typeof nextHeaders[key] !== "undefined")
    .reduce((reducer, key) => ({ ...reducer, [key]: nextHeaders[key] }), {});
};

export default request;
