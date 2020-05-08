import React, { FunctionComponent } from 'react';
import IconTitle from './IconTitle';
import ContactItem from './ContactItem';
import ProfilePicture from './ProfilePicture';
import { CvData } from '../models/CvData';

const PersonalSection: FunctionComponent<CvData> = ({
	imageUrl,
	fullName,
	title,
	about,
	hobbies,
	contactItems,
}) => (
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

export default PersonalSection;
