import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

import logoSmall from '../../assets/logo-blue-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

const SignInHeroContainer = styled.section`
	display: flex;
	flex-direction: column;
`;

const SignInLogoSmall = styled.img`
	width: 4.9rem;
`;

const SignInHeroHeader = styled.h1`
	font-size: 4.5em;
	line-height: 1.2em;
`;

const SignInHeroSubHeader = styled.h2`
	font-size: 2.5em;
`;

const SignInButtonsContainer = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

const SignInButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	font-weight: 900;
	font-size: 1.25em;
	padding: 0.5em 4em;
	background: transparent;
	border: 0 solid rgb(207, 217, 222);
	border-width: 1px;
	border-radius: 9999px;

	&:hover {
		background-color: rgb(207, 217, 222);
	}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	font-size: 1.4em;
`;

const SignInLogInButton = styled(SignInButton)`
	color: rgb(29, 155, 240);
`;

const ButtonSeparator = styled.h3`
	color: antiquewhite;
	width: 70%;
	margin: 0.7em auto;
	overflow: hidden;
	text-align: center;

	&:before {
		content: '';
		display: inline-block;
		width: 91%;
		vertical-align: middle;
		border-bottom: 1px solid;
		margin: 0 0.5em 0 -55%;
	}

	&:after {
		content: '';
		display: inline-block;
		width: 45%;
		vertical-align: middle;
		border-bottom: 1px solid;
		margin: 0 0.55% 0 0.5em;
	}
`;

const SignInEmailButton = styled(SignInButton)`
	background: rgb(29, 155, 240);
	color: white;
	&:hover {
		background: rgb(26, 140, 216);
	}
`;

const SignInTerms = styled.p`
	color: grey;
`;

const spanBlueStyle = {
	color: 'rgb(29, 155, 240)',
};

const spanBlackStyle = {
	color: 'black',
};

export default function SignInHero(props: any) {
	const { className } = props;
	return (
		<SignInHeroContainer className={className}>
			<SignInLogoSmall src={logoSmall}></SignInLogoSmall>
			<SignInHeroHeader>Happening now</SignInHeroHeader>
			<SignInHeroSubHeader>Join twitter today.</SignInHeroSubHeader>
			{/* THIS IS WHERE FUNCTIONALITY HAPPENS */}
			<SignInButtonsContainer>
				<SignInButton>
					<StyledFontAwesomeIcon icon={faGoogle}></StyledFontAwesomeIcon>
					Sign-up with Google{' '}
				</SignInButton>
				<SignInButton>
					<StyledFontAwesomeIcon icon={faApple}></StyledFontAwesomeIcon>
					Sign-up with Apple{' '}
				</SignInButton>
				<ButtonSeparator>
					<span style={spanBlackStyle}>or</span>
				</ButtonSeparator>
				<SignInEmailButton> Sign-up with email </SignInEmailButton>
				<SignInTerms>
					By signing up, you agree to the{' '}
					<span style={spanBlueStyle}>Terms of Service</span> and{' '}
					<span style={spanBlueStyle}>Privacy Policy</span>, including{' '}
					<span style={spanBlueStyle}>Cookie Use.</span>
				</SignInTerms>
				<SignInButtonsContainer>
					<SignInHeroSubHeader> Already have an account? </SignInHeroSubHeader>
					<SignInLogInButton>Sign-in</SignInLogInButton>
				</SignInButtonsContainer>
			</SignInButtonsContainer>
			{/* -------- */}
		</SignInHeroContainer>
	);
}
