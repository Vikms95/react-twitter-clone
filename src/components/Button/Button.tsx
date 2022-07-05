import React from 'react';
import styled, { css } from 'styled-components';

export default function Button(props: any) {
	const { children, className, handleClick } = props;
	return (
		<button onClick={handleClick} className={className}>
			{children}
		</button>
	);
}
