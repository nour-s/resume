import React from 'react';

interface OwnProps {
	text: string;
}

const IconTitle: React.FunctionComponent<OwnProps> = props => {
	return (
		<div className={'section-main'}>
			<div className={'frame frame--small'}>
				<span>{props.text[0].toUpperCase()}</span>
			</div>
			<h3 className={'section-header'}>{props.text}</h3>
		</div>
	);
};

export default IconTitle;
