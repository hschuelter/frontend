// npm start
import React from 'react';
import './App.css';
// import Home from './components/Home';
// import ShowData from './components/ShowData';
import About from './components/About';
import Search from './components/Search';
// import ShowVenues from './components/ShowVenues';
import ShowJournals from './components/ShowJournals';
import ShowConferences from './components/ShowConferences';
import Test from './components/Test';
import { Route, Redirect, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' 		 	component={Search} />
				<Route exact path='/about' 	 	component={About} />
				<Route exact path='/search'	 	component={Search} />
				<Route exact path='/periodicos' component={ShowJournals} />
				<Route exact path='/eventos'    component={ShowConferences} />
				<Route exact path='/test'	    component={Test} />
				<Redirect from='*' to='/' />
			</Switch>
		</div>
	)
}

export default App;
