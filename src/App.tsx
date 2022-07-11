import {Suspense} from 'react';
import {Router} from './router';

export function App() {
	return (
		<div className='App'>
			<Suspense fallback='Loading...'>
				<Router />
			</Suspense>
		</div>
	);
}
