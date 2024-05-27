import axios from 'axios';
import { API_ADDRESS } from './Constant';

const apiClient = axios.create({
    baseURL:API_ADDRESS,
    timeout:500000,
    mode:'cors',
    headers:{
        'Content-Type':'application/json',
        'access-control-allow-orgin':true
    }
});
export default apiClient;