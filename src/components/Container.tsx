import {ReactNode} from 'react';

export function Container({children}: {children: ReactNode}) {
	return (
		<div className='bg-slate-100 flex justify-center items-center w-full h-screen'>
			{children}
		</div>
	);
}
