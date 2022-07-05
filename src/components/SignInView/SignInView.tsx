import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import SignInHero from './SignInHero';

import banner from '../../assets/banner.png';

const SignInContainer = styled(Container)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(501px, 1fr));
	min-height: 100%;

	@media (max-width: 1000px) {
		&:nth-child(1) {
			min-height: 200vh;
		}
	}
`;

const SignInBanner = styled.section`
	background-image: url(${banner});
  
  @media (max-width: 1000px) {
    grid-row: 2;   
`;

const StyledSignInHero = styled(SignInHero)`
	padding: 3.2em;
`;

export default function SignInView() {
	return (
		<SignInContainer>
			<SignInBanner></SignInBanner>
			<StyledSignInHero></StyledSignInHero>
		</SignInContainer>
	);
}
