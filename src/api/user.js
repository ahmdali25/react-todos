import Cookies from 'js-cookie';

import axiosInstance from './axiosInstance';

const userAPI = {
	async signIn({ email, password }) {
		try {
			const result = await axiosInstance.post('/auth/login', { email, password });
			Cookies.set('token', result.data.auth_token);
			return result.data;
		} catch (err) {
			console.log(err)
		}
	},
};

export default userAPI;