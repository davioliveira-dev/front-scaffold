import {api} from '@/constants/api';
import axios, {AxiosRequestConfig} from 'axios';
import {useEffect, useState} from 'react';

type Options = AxiosRequestConfig & {
	doOnMount?: boolean;
};

function useFetch<T>(
	url: string,
	{doOnMount = false, ...options}: Options = {},
) {
	const [data, setData] = useState<T>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetch = (options?: AxiosRequestConfig) => {
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

	useEffect(() => {
		if (typeof doOnMount === 'boolean' && !doOnMount) {
			return;
		}

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
	}, [url, doOnMount]);

	return {data, loading, error, fetch};
}

export default useFetch;
