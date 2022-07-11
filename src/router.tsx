import {Dashboard, ForgotPassword, Login} from '@/pages';
import {Route, Routes} from 'react-router-dom';

export function Router() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/forgot-password' element={<ForgotPassword />} />
			<Route path='/dashboard' element={<Dashboard />} />
		</Routes>
	);
}
