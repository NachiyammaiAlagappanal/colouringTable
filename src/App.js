import { React } from 'react';
import './App.scss';
import displayData from './components/displayData';

const App = (context) =>
	<div className="App" role="App">
		<div>{	displayData(context) }</div>
	</div>;

export default App;
