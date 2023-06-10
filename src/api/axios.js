import axios from "axios";

// let api = axios.create({
//    baseURL :"http://localhost:8000",
//    withCredentials : true
// });
// export default api

export default axios.create({
   baseURL :"http://localhost:8000",
   withCredentials : true
});





// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8000"