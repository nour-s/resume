import React from 'react';

interface OwnProps {
	imgUrl: string;
}

const ProfilePicture: React.FunctionComponent<OwnProps> = props => {
	return (
		<div className={'info-picture'}>
			<div className={'frame'}>
				<div className={'photo-wrapper'}>
					<img className="photo" src={props.imgUrl} />
				</div>
			</div>
		</div>
	);
};

export default ProfilePicture;
