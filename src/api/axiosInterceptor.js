import Auth from '../utils/Auth';

export const requestHandler = (config) => {
	if (config) {
		const auth = Auth.isAuthorization();
		if (auth) {
			config.headers.Authorization = `Bearer ${auth}`;
		}
	}
	return config;
};

export const successHandler = (response) => {
	if (response) {
		if (response.status === 200) {
			return response;
		}
	}
	return response;
};

export const errorHandler = (error) => {
	return Promise.reject({ ...error });
};