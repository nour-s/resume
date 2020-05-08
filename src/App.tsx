import React, { FunctionComponent } from 'react';
import PersonalSection from './components/PersonalSection';
import DetailsSection from './components/DetailsSection';
import './App.css';
import cv_content from './cv-content.json';
import { CvData } from './models/CvData';

const App: FunctionComponent = ({}) => (
	<div className={'container'}>
		<PersonalSection {...cv_content as CvData} />
		<DetailsSection detailsData={cv_content as CvData} />
	</div>
);

export default App;
