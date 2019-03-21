import React, { Component } from 'react';
import Division from './Division';
import Section from './Section';
import { CvData } from '../models/CvData';

interface OwnProps {
	detailsData: CvData;
}

class DetailsSection extends Component<OwnProps> {
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
		const { experiences, skills, certificates } = this.props.detailsData;

		return (
			<div className={'details'}>
				<Section title="Experiences">
					{experiences.map(exp => (
						<Division key={exp.startYear} {...exp}>
							{this.renderJobDescription(exp.jobDescription)}
						</Division>
					))}
				</Section>
				<Section title="Workskills" extraClassName="work-skills">
					<ul>
						{skills.map(s => (
							<li>{s}</li>
						))}
					</ul>
				</Section>
				<Section title="Certificates">
					{certificates.map(cert => (
						<Division {...cert} />
					))}
				</Section>
			</div>
		);
	}
}

export default DetailsSection;
