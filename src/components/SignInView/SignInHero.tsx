import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import logoSmall from '../../assets/logo-blue-small.png';

const SignInHeroContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

const SignInLogoSmall = styled.img`
	width: 4.9rem;
`;

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

const SignInLogInButton = styled(SignInButton)`
	color: rgb(29, 155, 240);
`;

const SignInPhoneButton = styled(SignInButton)`
	background: rgb(29, 155, 240);
	color: white;
	&:hover {
		background: rgb(26, 140, 216);
	}
`;

const SignInHeroHeader = styled.h1`
	font-size: 4.5em;
	line-height: 1.2em;
`;

const SignInHeroSubHeader = styled.h2`
	font-size: 2.5em;
`;

export default function SignInHero(props: any) {
	const { className } = props;
	return (
		<SignInHeroContainer className={className}>
			<SignInLogoSmall src={logoSmall}></SignInLogoSmall>
			<SignInHeroHeader>Happening now</SignInHeroHeader>
			<SignInHeroSubHeader>Join twitter today.</SignInHeroSubHeader>
			<SignInButton> Register with Google </SignInButton>
			<SignInButton> Register with Apple </SignInButton>
			<SignInPhoneButton>Register with your telephone number</SignInPhoneButton>
			<SignInLogInButton>Sign-in</SignInLogInButton>
		</SignInHeroContainer>
	);
}
