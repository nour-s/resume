import React, { FunctionComponent } from 'react';
import IconTitle from './IconTitle';

interface OwnProps {
	title: string;
	extraClassName?: string;
}

const Section: FunctionComponent<OwnProps> = props => {
	return (
		<div className={`section ${props.extraClassName}`}>
			<IconTitle text={props.title} />
			{props.children}
		</div>
	);
};

export default Section;
