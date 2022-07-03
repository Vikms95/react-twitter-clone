import React from 'react';
import styled, { css } from 'styled-components';

export default function Button(props: any) {
	const { children, className } = props;
	return <button className={className}>{children}</button>;
}
