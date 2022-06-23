import base64 from 'base-64';

const headers = new Headers();

const USERNAME = import.meta.env.USUARIO_AUTH || 'virtual-2018';
const PASSWORD = import.meta.env.SENHA_AUTH || 'kajgsdkasgd214';

const authorization = base64.encode(`${USERNAME}:${PASSWORD}`);

console.log(authorization);

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json, text/plain, */*');
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Authorization', `Basic ${authorization}`);
headers.append(
	'Access-Control-Allow-Methods',
	'GET, POST, PUT, DELETE, OPTIONS',
);

export {headers};
