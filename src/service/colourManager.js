/* eslint-disable no-magic-numbers */

const high = (num) => num >= 8;

const mid = (num) => num <= 8 && num >= 5;

const low = (num) => num <= 4 && num >= 1;

const color = (num) => {
	if(high(num))
		return 'green';

	else if(mid(num))
		return 'blue';

	else if(low(num))
		return 'yellow';

	return 'red';
};

export default color;
