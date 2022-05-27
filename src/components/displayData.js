/* eslint-disable no-magic-numbers */
import { React } from 'react';
import mixColor from '../services/mixColor';

const displayData = (context) => {
	const { config: { data }} = context;

	return (
		<div>{ data.map((num) => {
			const style = {
				width: '50px',
				height: '100px',
				background: mixColor(
					'#ffff66', '#003366', num
				),
			};

			return (
				<div key={ num }style={ style }>{ num }</div>);
		})}</div>
	);
};

export default displayData;
