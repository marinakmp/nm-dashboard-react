export default function fetchUrl(endpoint) {
  let fetchedData = fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });

  return fetchedData;
}
