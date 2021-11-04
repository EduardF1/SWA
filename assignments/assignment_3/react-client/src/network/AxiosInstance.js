import axios from 'axios';
import {baseURL} from "../assets/Constants";

export const instance = axios.create({
  baseURL: baseURL
});