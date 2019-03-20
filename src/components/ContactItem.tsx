import React from 'react';

interface OwnProps {
	label: string;
	value: string;
	href?: string;
}

const ContactItem: React.FunctionComponent<OwnProps> = props => {
	return (
		<div className={'contact-item'}>
			<span>{props.label}</span>
			{props.href ? (
				<a href={props.href}>{props.value}</a>
			) : (
				<span>{props.value}</span>
			)}
		</div>
	);
};

export default ContactItem;
