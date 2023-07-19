import axios from 'axios';
import config from "../config";

URL = config.API_URL;

export const getUsers = () => axios.get(URL); // get all posts
