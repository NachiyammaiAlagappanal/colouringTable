import { React } from 'react';
import color from '../service/colourManager';

const DisplayList = (context) => {
	const { config: { data }} = context;

	return (
		<div>{ data.map((num) => {
			const style = {
				width: '50px',
				height: '100px',
				backgroundColor: color(num),
			};

			return (
				<div key={ num }style={ style }>{ num }</div>);
		})}</div>
	);
};

export default DisplayList;
