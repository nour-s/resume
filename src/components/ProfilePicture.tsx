import React from 'react';

interface OwnProps {}

const ProfilePicture: React.FunctionComponent<OwnProps> = props => {
	return (
		<div className={'info-picture'}>
			<div className={'frame'}>
				<div className={'photo'} />
			</div>
		</div>
	);
};

export default ProfilePicture;
