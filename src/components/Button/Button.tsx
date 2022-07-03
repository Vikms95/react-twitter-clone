import React from 'react';
import styled, { css } from 'styled-components';

export default function Button(props: any) {
	const { children } = props;
	return <button>{children}</button>;
}
