import axios from 'axios';
import config from "../config";

const API_URL = config.API_URL;

export const getUsers = () => axios.get(API_URL); // get all posts
