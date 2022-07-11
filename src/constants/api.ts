import {AxiosRequestConfig} from 'axios';

const URL = import.meta.env.API_BASE_URL;

export const api: AxiosRequestConfig = {
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json, text/plain, */*',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	},
};
