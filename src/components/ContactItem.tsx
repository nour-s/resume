import React, { FunctionComponent } from 'react';

interface OwnProps {
	label: string;
	value: string;
	href?: string;
}

const ContactItem: FunctionComponent<OwnProps> = ({ href, label, value }) => {
	return (
		<div className={'contact-item'}>
			<span>{label}</span>
			{href ? <a href={href}>{value}</a> : <span>{value}</span>}
		</div>
	);
};

export default ContactItem;
