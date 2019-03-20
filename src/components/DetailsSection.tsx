import React, { Component } from 'react';
import Division from './Division';
import IconTitle from './IconTitle';

const skills = [
	'C#',
	'ASP.NET MVC',
	'ASP.NET CORE',
	'Windows Forms (WPF)',
	'Entity Framework',
	'SQL Server/MY SQL',
	'HTML5 / CSS3',
	'JavaScript / TypeScript',
	'React / React Native',
	'Redux',
	'RESTful APIs',
	'Java',
];

const experiences = [
	{
		startYear: '2017',
		endYear: 'Present',
		position: 'Full Stack developer',
		company: 'TigerSpike',
		jobDescription: [
			'Support and contribute to software development and design processes.',
			'Follow defined development best practices, including wiki contributions,code commenting and documentation, source control.',
			'Execute and review test plans (where necessary).',
			'Author and critique software designs and architectures.',
			'Critique application wireframes, use cases, user journeys, and designs.',
			'Identify project development tasks. Mentor junior colleagues',
		],
	},
	{
		startYear: '2016',
		endYear: '2017',
		position: 'Senior Software Developer',
		company: 'Company Name',
		jobDescription: [
			'Translated application storyboards and use cases into functional applications.',
			'Designed, built, and maintained efficient, reusable, and reliable Java code.',
			'Ensured the best possible performance, and quality of the applications.',
			'Identified bottlenecks and bugs, and devise solutions to these problems.',
			'Helped maintain code quality, organization, and automatization.',
		],
	},
	{
		startYear: '2013',
		endYear: '2016',
		position: 'Senior Software Developer / Team Lead',
		company: 'Company Name',
		jobDescription: [
			'Crafted, designed, communicated and defined the software architecture that solves the problem at hand.',
			'Gave input as needed to issues like tools and environment selection.',
			'Researched and recommended software tools to use.',
		],
	},
	{
		startYear: '2011',
		endYear: '2013',
		position: 'Senior Software Developer / Team Lead',
		company: 'Company Name',
		jobDescription: [
			'Lead a team of developers, supervise the progress of tasks using TFS, and Scrum.',
			'Designed the system architecture with the best standards',
			'Designed database using SQL Server, managed many projects at the company.',
		],
	},
];

const certificates = [
	{
		startYear: '2019',
		position: 'React Nanodegree Certification',
		company: 'Udacity',
	},
	{
		startYear: '2008',
		position: 'Microsoft Certified Solutions Developer (MCSD)',
		company: 'Microsoft',
	},
];

class DetailsSection extends Component {
	renderJobDescription = (jobDescription: string[] | string) => {
		if (Array.isArray(jobDescription)) {
			return (
				<ul>
					{jobDescription.map(line => (
						<li>{line}</li>
					))}
				</ul>
			);
		} else {
			return <p>{jobDescription}</p>;
		}
	};

	render() {
		return (
			<div className={'details'}>
				<div className={'section'}>
					<IconTitle text="Experiences" />
					{experiences.map(exp => (
						<Division key={exp.startYear} {...exp}>
							{this.renderJobDescription(exp.jobDescription)}
						</Division>
					))}
				</div>
				<div className={'work-skills'}>
					<IconTitle text="Workskills" />
					<ul>
						{skills.map(s => (
							<li>{s}</li>
						))}
					</ul>
				</div>
				<div className={'section'}>
					<IconTitle text="Certificates" />
					{certificates.map(cert => (
						<Division {...cert} />
					))}
				</div>
			</div>
		);
	}
}

export default DetailsSection;
