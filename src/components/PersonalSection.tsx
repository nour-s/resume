import React, { Component } from 'react';
import IconTitle from './IconTitle';
import ContactItem from './ContactItem';
import ProfilePicture from './ProfilePicture';

const contactItems = [
	{ label: 'Phone', value: '+999 999 999 9999' },
	{ label: 'Website', value: 'http://nour-s.com', href: 'http://nour-s.com' },
	{ label: 'Email', value: 'name@domain.com', href: 'mailto:name@domain.com' },
];

const fullName = 'Nour Sabouny';
const title = 'Full Stack developer';
const about =
	"I have passion for computers in general and for writing software in particular, be it Web, Mobile, or Desktop application. I don't stop learning and always seeking new challenges.";
const hobbies =
	'I love video games, photographing, reading books, watching SciFi movies, and DIY projects.';
const imageUrl = '/img/me.png';

class PersonalSection extends Component {
	render() {
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
