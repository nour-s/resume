import React from 'react';

interface OwnProps {
	startYear: string;
	endYear?: string;
	position: string;
	company: string;
}

const Division: React.FunctionComponent<OwnProps> = props => {
	return (
		<div className={'division'}>
			<div className={'division-header'}>
				<div className={'division-main-date'}>
					{props.startYear} - {props.endYear}
				</div>
				<div className={'division-main-position'}>
					<span>{props.position}</span>
					<span>{props.company}</span>
				</div>
			</div>
			{props.children}
			<p className={'division-content'} />
		</div>
	);
};

export default Division;
