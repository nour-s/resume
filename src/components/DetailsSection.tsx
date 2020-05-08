import React, { FunctionComponent } from 'react';
import Division from './Division';
import Section from './Section';
import { CvData } from '../models/CvData';

interface OwnProps {
	detailsData: CvData;
}

const JobDescription = ({
	jobDescription,
}: {
	jobDescription: string[] | string;
}) =>
	Array.isArray(jobDescription) ? (
		<ul>
			{jobDescription.map((line, i) => (
				<li key={i}>{line}</li>
			))}
		</ul>
	) : (
		<p>{jobDescription}</p>
	);

const DetailsSection: FunctionComponent<OwnProps> = ({
	detailsData: { experiences, skills, certificates },
}) => (
	<div className={'details'}>
		<Section title="Experiences">
			{experiences.map((exp, i) => (
				<Division key={i} {...exp}>
					<JobDescription jobDescription={exp.jobDescription} />
				</Division>
			))}
		</Section>
		<Section title="Workskills" extraClassName="work-skills">
			<ul>
				{skills.map((s, i) => (
					<li key={i}>{s}</li>
				))}
			</ul>
		</Section>
		<Section title="Certificates">
			{certificates.map((cert, i) => (
				<Division key={i} {...cert} />
			))}
		</Section>
	</div>
);

export default DetailsSection;
