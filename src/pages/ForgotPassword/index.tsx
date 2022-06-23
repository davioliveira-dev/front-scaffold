import {Container} from '@/components/Container';
import {Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export function ForgotPassword() {
	const navigate = useNavigate();

	return (
		<Container>
			<div className='bg-white rounded-xl w-full h-2/3 border default-border-color flex flex-col items-center justify-center md:w-2/4'>
				<h1>Redefinição de senha</h1>
				<TextField
					inputMode='numeric'
					label='CPF/CNPJ Cadastrado no sistema'
					variant='outlined'
					className='my-10 w-2/5'
					required
				/>
				<Button variant='contained' className='w-2/5'>
					Validar
				</Button>
				<Button className='w-2/5 mt-10' onClick={() => navigate('/')}>
					Página Inicial
				</Button>
			</div>
		</Container>
	);
}
