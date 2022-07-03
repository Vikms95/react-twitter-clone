import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const SignInButton = styled(Button)`
	background: transparent;
	border: 0 solid rgb(207, 217, 222);
	border-width: 1px;
	border-radius: 9999px;
	padding: 0.5em 3em;
	font-size: 1em;
	&:hover {
		background-color: rgb(207, 217, 222);
	}
`;

const LogInButton = styled(SignInButton)`
	color: rgb(29, 155, 240);
`;

const SignInPhoneButton = styled(SignInButton)`
	background: rgb(29, 155, 240);
	color: white;
	&:hover {
		background: rgb(26, 140, 216);
	}
`;

export default function SignInHero() {
	return (
		<section>
			<SignInButton>Iniciar sesión con Google</SignInButton>
			<SignInButton>Iniciar sesión con Apple</SignInButton>
			<SignInPhoneButton>
				Registrarte con el número de telefono
			</SignInPhoneButton>
			<LogInButton>Iniciar sesion</LogInButton>
		</section>
	);
}
