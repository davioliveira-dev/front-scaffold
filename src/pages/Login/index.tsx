import logoSrc from '@/assets/logo-ae-consult.png';
import {Container} from '@/components/Container';
import {state} from '@/context/state';
import useFetch from '@/hooks/useFetch';
import {User} from '@/types/User';
import {Button, CircularProgress, TextField} from '@mui/material';
import {useSetAtom} from 'jotai';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

type FormData = {
	email: string;
	password: string;
};

export function Login() {
	const {refetch, loading, error, data} = useFetch<{result: User}>('/login', {
		method: 'POST',
	});
	const {register, handleSubmit} = useForm<FormData>();
	const setUser = useSetAtom(state.user);
	const setLoginDate = useSetAtom(state.loginDate);
	const navigate = useNavigate();

	const onSubmit = async (data: FormData) => {
		const requestData = {
			login: data.email,
			senha: data.password,
		};

		refetch({data: requestData, method: 'POST'});
	};

	useEffect(() => {
		if (data) {
			console.log(data);
			setUser(data.result);
			setLoginDate(new Date().getTime());
		}

		if (error) {
			console.log(error);
		}
	}, [data]);

	return (
		<Container>
			<div className='bg-white rounded-xl w-full h-3/4 border default-border-color md:w-4/5'>
				<div className='grid grid-cols-1 w-full h-full sm:grid-cols-[1.5fr,1fr]'>
					<div className='logo flex justify-center items-center h-full w-full'>
						<img
							src={logoSrc}
							alt='Advocacia Empresarial e Consultoria'
							className='object-contain'
						/>
					</div>
					<div className='form w-full h-full flex flex-col justify-center items-center md:items-start'>
						<h1 className='text-3xl font-bold mb-10 text-gray-600'>
							Login do Usuário
						</h1>
						<form className='w-4/5' onSubmit={handleSubmit(onSubmit)}>
							<TextField
								type='email'
								inputMode='email'
								label='Email'
								variant='outlined'
								className='mb-5 w-full'
								{...register('email', {required: true})}
							/>
							<TextField
								type='password'
								label='Senha'
								variant='outlined'
								className='mb-5 w-full'
								{...register('password', {required: true})}
							/>
							<Button className='w-full' variant='contained' type='submit'>
								{loading ? (
									<CircularProgress size={24.5} color='inherit' />
								) : (
									'Entrar'
								)}
							</Button>
							<Button
								className='mt-5 w-full'
								onClick={() => navigate('/esqueci-minha-senha')}
							>
								Esqueci minha senha
							</Button>
						</form>
						<Button className='mt-5 w-4/5'>
							Não tem cadastro? Faça o seu credenciamento.
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
}
