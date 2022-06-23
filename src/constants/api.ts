import {AxiosRequestConfig} from 'axios';
import base64 from 'base-64';

const USERNAME = import.meta.env.USUARIO_AUTH || 'virtual-2018';
const PASSWORD = import.meta.env.SENHA_AUTH || 'kajgsdkasgd214';
const URL =
	import.meta.env.API_BASE_URL || 'http://api.dev.advogado.dataseed.de';

const authorization = base64.encode(`${USERNAME}:${PASSWORD}`);

export const api: AxiosRequestConfig = {
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json, text/plain, */*',
		'Access-Control-Allow-Origin': '*',
		Authorization: `Basic ${authorization}`,
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	},
};
