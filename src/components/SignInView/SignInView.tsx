import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const SignInButton = styled(Button)`
	background: transparent;
	border-radius: 25px;
	padding: 10em;
	font-size: 90em;
`;

export default function SignInView() {
	return (
		<main className='sign-in-view-container'>
			<SignInButton>allo</SignInButton>
		</main>
	);
}
