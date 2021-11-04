import axios from 'axios';
import {baseURL} from "../assets/Constants";

/**
 * Singleton for the HTTP client.
 * @type {AxiosInstance} the type of the HTTP client.
 */
export const instance = axios.create({
  baseURL: baseURL
});