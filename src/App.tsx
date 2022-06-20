import {Login} from '@/pages/Login';
import {Route, Routes} from 'react-router-dom';

export function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Login />} />
			</Routes>
		</div>
	);
}
