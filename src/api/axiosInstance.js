import axios from 'axios';
import { errorHandler, requestHandler, successHandler } from '../api/axiosInterceptor';

const axiosInstance = axios.create({
	baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
});

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// Handle response process
axiosInstance.interceptors.response.use(
	(response) => successHandler(response),
	(error) => errorHandler(error),
);

export default axiosInstance;