import { React } from 'react';
import './App.scss';
import DisplayList from './components/displayList';

const App = (context) =>
	<div className="App" role="App">
		<div>{	DisplayList(context) }</div>
	</div>;

export default App;
