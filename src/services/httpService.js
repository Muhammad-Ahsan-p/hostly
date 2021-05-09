import axios from "axios";

// TODO: Remove it
// async function test() {
//   const data = await axios.get("http://localhost:3000/api/hostels");
//   console.log(data);
// }

// test();

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (expectedError) return Promise.reject(error);

  alert("Something happened...");
  console.log(error);
});

export default axios;
