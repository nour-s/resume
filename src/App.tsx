import React, { Component } from 'react';
import PersonalSection from './components/PersonalSection';
import DetailsSection from './components/DetailsSection';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className={'container'}>
				<PersonalSection />
				<DetailsSection />
			</div>
		);
	}
}

export default App;
