import {api} from '@/constants/api';
import axios, {AxiosRequestConfig} from 'axios';
import {useEffect, useState} from 'react';

function useFetch<T>(url: string, options?: AxiosRequestConfig) {
	const [data, setData] = useState<T>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const refetch = (options?: AxiosRequestConfig) => {
		setLoading(true);
		axios(url, {...api, ...options})
			.then(response => {
				setData(response.data as T);
			})
			.catch(err => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	if (options?.method === 'POST' || options?.method === 'PUT') {
		return {data, loading, error, refetch};
	}

	useEffect(() => {
		setLoading(true);
		axios(url, {...api, ...options})
			.then(response => {
				setData(response.data);
			})
			.catch(err => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [url]);

	return {data, loading, error, refetch};
}

export default useFetch;
