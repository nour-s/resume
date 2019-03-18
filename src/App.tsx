import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<div className={'container'}>
					<div className={'info'}>
						<div className={'info-picture'}>
							<div className={'frame'}>
								<div className={'photo'} />
							</div>
						</div>
						<h1 className={'name'}>Nour Sabouny</h1>
						<h2 className={'title'}>Full Stack developer</h2>
						<div className={'about'}>
							<div className={'headerWithIcon'}>
								<div className={'frame frame--small'}>
									<span>A</span>
								</div>
								<h3 className={'headerWithIcon-title'}>About Me</h3>
							</div>
							<p>
								I have passion for computers in general and for writing software in
								particular, be it Web, Mobile, or Desktop application. I don't stop
								learning and always seeking new challenges.
							</p>
							<p>
								I love video games, photographing, reading books, watching SciFi movies,
								and DIY projects.
							</p>
						</div>
						<div className={'contact'}>
							<div className={'headerWithIcon'}>
								<div className={'frame frame--small'}>
									<span>C</span>
								</div>
								<h3 className={'headerWithIcon-title'}>Contact</h3>
							</div>
							<div className={'contact-item'}>
								<span>Phone</span>
								<span>+999 999 999 9999</span>
							</div>
							<div className={'contact-item'}>
								<span>Website</span>
								<span>
									<a href="http://nour-s.com">http://nour-s.com</a>
								</span>
							</div>
							<div className={'contact-item'}>
								<span>Email</span>
								<span>
									<a href="mailto:name@domain.com">name@domain.com</a>
								</span>
							</div>
						</div>
					</div>
					<div className={'details'}>
						<div className={'section'}>
							<div className={'section-main'}>
								<div className={'frame frame--small'}>
									<span>E</span>
								</div>
								<h3 className={'section-header'}>Experiences</h3>
							</div>
							<div className={'division'}>
								<div className={'division-header'}>
									<div className={'division-main-date'}>2017 - Present</div>
									<div className={'division-main-position'}>
										<span>Full Stack developer</span>
										<span>TigerSpike</span>
									</div>
								</div>
								<ul>
									<li>
										Support and contribute to software development and design processes.
									</li>
									<li>
										Follow defined development best practices, including wiki
										contributions, code commenting and documentation, source control.
									</li>
									<li>Execute and review test plans (where necessary).</li>
									<li>Author and critique software designs and architectures.</li>
									<li>
										Critique application wireframes, use cases, user journeys, and
										designs.
									</li>
									<li>Identify project development tasks. Mentor junior colleagues</li>
								</ul>
								<p className={'division-content'} />
							</div>
							<div className={'division'}>
								<div className={'division-header'}>
									<div className={'division-main-date'}>2016 - 2017</div>
									<div className={'division-main-position'}>
										<span>Senior Software Developer</span>
										<span>Company Name</span>
									</div>
								</div>
								<ul>
									<li>
										Translated application storyboards and use cases into functional
										applications.
									</li>
									<li>
										Designed, built, and maintained efficient, reusable, and reliable Java
										code.
									</li>
									<li>
										Ensured the best possible performance, and quality of the
										applications.
									</li>
									<li>
										Identified bottlenecks and bugs, and devise solutions to these
										problems.
									</li>
									<li>
										Helped maintain code quality, organization, and automatization.
									</li>
								</ul>
							</div>
							<div className={'division'}>
								<div className={'division-header'}>
									<div className={'division-main-date'}>2013 - 2016</div>
									<div className={'division-main-position'}>
										<span>Senior Software Developer / Team Lead</span>
										<span>Company Name</span>
									</div>
								</div>
								<ul>
									<li>
										Crafted, designed, communicated and defined the software architecture
										that solves the problem at hand.
									</li>
									<li>
										Gave input as needed to issues like tools and environment selection.
									</li>
									<li>Researched and recommended software tools to use.</li>
								</ul>
							</div>
							<div className={'division'}>
								<div className={'division-header'}>
									<div className={'division-main-date'}>2011 - 2013</div>
									<div className={'division-main-position'}>
										<span>Senior Software Developer / Team Lead</span>
										<span>Company Name</span>
									</div>
								</div>
								<ul>
									<li>
										Lead a team of developers, supervise the progress of tasks using TFS,
										and Scrum.
									</li>
									<li>Designed the system architecture with the best standards</li>
									<li>
										Designed database using SQL Server, managed many projects at the
										company.
									</li>
								</ul>
							</div>
						</div>

						<div className={'work-skills'}>
							<div className={'section-main'}>
								<div className={'frame frame--small'}>
									<span>W</span>
								</div>
								<h3 className={'section-header'}>Workskills</h3>
							</div>
							<ul>
								<li>C#</li>
								<li>ASP.NET MVC</li>
								<li>ASP.NET CORE</li>
								<li>Windows Forms (WPF)</li>
								<li>Entity Framework</li>
								<li>SQL Server/MY SQL</li>
								<li>HTML5 / CSS3</li>
								<li>JavaScript / TypeScript</li>
								<li>React / React Native</li>
								<li>Redux</li>
								<li>RESTful APIs</li>
								<li>Java</li>
							</ul>
						</div>
						<div className={'section'}>
							<div className={'section-main'}>
								<div className={'frame frame--small'}>
									<span>C</span>
								</div>
								<h3 className={'section-header'}>Certificates</h3>
							</div>
							<div className={'division'}>
								<div className={'division-header'}>
									<div className={'division-main-date'}>2019</div>
									<div className={'division-main-position'}>
										<span>React Nanodegree Certification</span>
										<span>Udacity</span>
									</div>
								</div>
								<p className={'division-content'} />
							</div>
							<div className={'division'}>
								<div className={'division-header'}>
									<div className={'division-main-date'}>2008</div>
									<div className={'division-main-position'}>
										<span>Microsoft Certified Solutions Developer (MCSD)</span>
										<span>Microsoft</span>
									</div>
								</div>
								<p className={'division-content'} />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default App;
