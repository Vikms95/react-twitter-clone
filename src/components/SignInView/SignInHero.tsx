import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const SignInButton = styled(Button)`
	font-weight: 900;
	font-size: 1em;
	background: transparent;
	border: 0 solid rgb(207, 217, 222);
	border-width: 1px;
	border-radius: 9999px;
	padding: 0.5em 3em;
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

const HeaderSignInHero = styled.h1`
	font-size: ;
`;

export default function SignInHero() {
	return (
		<section>
			<HeaderSignInHero>Happening now.</HeaderSignInHero>
			<p>Join twitter today.</p>
			<SignInButton> Register with Google </SignInButton>
			<SignInButton> Register with Apple </SignInButton>
			<SignInPhoneButton>Register with your telephone number</SignInPhoneButton>
			<LogInButton>Sign-in</LogInButton>
		</section>
	);
}
