import React from 'react';

export default function Container(props: any) {
	const { children, className } = props;
	return <main className={className}>{children}</main>;
}
