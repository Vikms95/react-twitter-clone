import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Container from '../Container/Container';
import SignInBanner from './SignInBanner';
import SignInHero from './SignInHero';

const SignInContainer = styled(Container)`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export default function SignInView() {
	return (
		<SignInContainer>
			<SignInBanner></SignInBanner>
			<SignInHero></SignInHero>
		</SignInContainer>
	);
}
