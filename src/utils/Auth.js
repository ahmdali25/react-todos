import Cookies from 'js-cookie';

const Auth = {
	isAuthorization() {
		return Cookies.get('token');
	},
};

export default Auth;