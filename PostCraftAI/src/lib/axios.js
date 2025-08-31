import axios from 'axios';


const axiosClient = axios.create({
   baseURL: 'https://postcraftai.in/public/api',
 
  withCredentials: true, 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});
 
export default axiosClient;