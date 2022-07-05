import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';

const FeedContainer = styled(Container)`
	display: flex;
	flex-direction: column;
`;

const FeedHeader = styled.header`
	display: flex;
	padding: 1em;
	font-weight: 900;
	border-bottom: 1px solid rgba(255, 245, 245, 0.863);
`;

export default function Feed() {
	return (
		<FeedContainer>
			<FeedHeader> Home </FeedHeader>
		</FeedContainer>
	);
}
