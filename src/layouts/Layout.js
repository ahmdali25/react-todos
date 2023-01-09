import React from 'react';
import Auth from '../utils/Auth';
import Header from '../layouts/Header';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
	const navigate = useNavigate();
	React.useEffect(() => {
		if (Auth.isAuthorization()) {
			navigate('/v1');
		} else {
			navigate('/v1/signin');
		}
	}, [navigate]);
	return (
		<div>
            <Header>
			</Header>
			<Outlet />
        </div>
	);
};

export default Layout;