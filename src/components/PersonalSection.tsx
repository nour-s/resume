import React, { Component } from 'react';
import IconTitle from './IconTitle';
import ContactItem from './ContactItem';
import ProfilePicture from './ProfilePicture';
import { CvData } from '../models/CvData';

interface OwnProps {
	personalData: CvData;
}

class PersonalSection extends Component<OwnProps> {
	render() {
		const {
			imageUrl,
			fullName,
			title,
			about,
			hobbies,
			contactItems,
		} = this.props.personalData;
		return (
			<div className={'info'}>
				<ProfilePicture imgUrl={imageUrl} />
				<h1 className={'name'}>{fullName}</h1>
				<h2 className={'title'}>{title}</h2>
				<div className={'about'}>
					<IconTitle text="About Me" />
					<p>{about}</p>
					<p>{hobbies}</p>
				</div>
				<div className={'contact'}>
					<IconTitle text="Contact" />
					{contactItems.map(ci => (
						<ContactItem
							key={ci.label}
							label={ci.label}
							value={ci.value}
							href={ci.href}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default PersonalSection;
