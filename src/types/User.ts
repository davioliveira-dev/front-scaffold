export type Unidade = {
	codigo: number;
	valor: string;
	status: string;
	tipo: string;
	dataCriacao: string;
	unidadePai?: any;
	empresaDTO?: any;
	escritorio?: any;
};

export type Estado = {
	codigo: number;
	valor: string;
	status: string;
};

export type Regional = {
	codigo: number;
	valor: string;
	status: string;
	tipo: string;
	dataCriacao: string;
	unidadePai?: any;
	empresaDTO?: any;
	escritorio?: any;
};

export type Municipio = {
	codigo: number;
	descricao: string;
	estado: Estado;
	uf: string;
	regional: Regional;
};

export type UnidadeEscritorio = {
	codigo: number;
	valor: string;
	status: string;
	tipo: string;
	dataCriacao: string;
	unidadePai?: any;
	empresaDTO?: any;
	escritorio?: any;
};

export type Escritorio = {
	id: number;
	nome: string;
	cnpj: string;
	endereco: string;
	status: string;
	bairro: string;
	cep: string;
	municipio: Municipio;
	email: string;
	telefone: string;
	responsavelEstado?: any;
	unidade: UnidadeEscritorio;
	observacoes?: any;
	descricaoArquivo?: any;
	caminhoArquivo?: any;
};

export type User = {
	usuarioId: number;
	codigoSetor: number;
	login: string;
	senha: string;
	senhaTemp?: any;
	novaSenha?: any;
	novaSenhaConfirmacao?: any;
	nome: string;
	cpfCnpj: string;
	tipoUsuario: string;
	unidade: Unidade;
	escritorio: Escritorio;
	listaSistemas?: any;
	listaMenus?: any;
};
