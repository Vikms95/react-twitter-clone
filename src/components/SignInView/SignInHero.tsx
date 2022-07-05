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

const HeroLogoSmall = styled.img`
	width: 4.5rem;
`;

const HeroHeader = styled.h1`
	margin: 3rem 0 1rem 0;
	font-size: 4em;
	line-height: 1.2em;
`;

const HeroSubHeader = styled.h2`
	font-size: 2em;
`;

const HeroSmallHeader = styled(HeroSubHeader)`
	font-size: 1.4em;
	margin-top: 1.6em;
	margin-bottom: 0.15em;
`;

const ButtonsContainer = styled.article`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

const SignInButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	max-width: 25rem;
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

const EmailButton = styled(SignInButton)`
	background: rgb(29, 155, 240);
	color: white;
	margin-bottom: -1em;

	&:hover {
		background: rgb(26, 140, 216);
	}
`;

const LoginButton = styled(SignInButton)`
	color: rgb(29, 155, 240);
`;

const StyledFAIcon = styled(FontAwesomeIcon)`
	font-size: 1.4em;
`;

const ButtonSeparator = styled.h3`
	color: antiquewhite;
	width: min(25rem, 70%);
	margin: 0 auto;
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

const SignInTerms = styled.p`
	color: grey;
	max-width: 25rem;
	font-size: 0.9em;
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
			<HeroLogoSmall src={logoSmall}></HeroLogoSmall>
			<HeroHeader>Happening now</HeroHeader>
			<HeroSubHeader>Join twitter today.</HeroSubHeader>

			{/* THIS IS WHERE FUNCTIONALITY HAPPENS */}
			<ButtonsContainer>
				<SignInButton>
					<StyledFAIcon icon={faGoogle}></StyledFAIcon>
					Sign up with Google{' '}
				</SignInButton>
				<SignInButton>
					<StyledFAIcon icon={faApple}></StyledFAIcon>
					Sign up with Apple{' '}
				</SignInButton>
				<ButtonSeparator>
					<span style={spanBlackStyle}>or</span>
				</ButtonSeparator>
				<EmailButton> Sign-up with email </EmailButton>
				<SignInTerms>
					By signing up, you agree to the{' '}
					<span style={spanBlueStyle}>Terms of Service</span> and{' '}
					<span style={spanBlueStyle}>Privacy Policy</span>, including{' '}
					<span style={spanBlueStyle}>Cookie Use.</span>
				</SignInTerms>
				<ButtonsContainer>
					<HeroSmallHeader> Already have an account? </HeroSmallHeader>
					<LoginButton>Sign in</LoginButton>
				</ButtonsContainer>
			</ButtonsContainer>
			{/* -------- */}
		</SignInHeroContainer>
	);
}
