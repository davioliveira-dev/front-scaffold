import {api} from '@/constants/api';
import {ForgotPassword} from '@/pages/ForgotPassword';
import {Login} from '@/pages/Login';
import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Provider} from 'use-http';

export function App() {
	return (
		<div className='App'>
			<Provider {...api}>
				<Suspense fallback='Carregando...'>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/esqueci-minha-senha' element={<ForgotPassword />} />
					</Routes>
				</Suspense>
			</Provider>
		</div>
	);
}
