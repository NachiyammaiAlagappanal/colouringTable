const mixColor = (
	colorOne, colorTwo, percentage
) => {
	if(percentage === 0)
		return colorOne;
	else {
		const intToHex = (num) => {
			let hex = Math.round(num).toString(16);

			if(hex.length === 1)
				hex = `0${ hex }`;
			return hex;
		};

		// check input
		colorOne = colorOne || '#000000';
		colorTwo = colorTwo || '#ffffff';
		percentage = percentage || 0.5;

		// 1: validate input, make sure we have provided a valid hex
		if(colorOne.length !== 4 && colorOne.length !== 7)
			throw new error('colors must be provided as hexes');

		if(colorTwo.length !== 4 && colorTwo.length !== 7)
			throw new error('colors must be provided as hexes');

		if(percentage > 1 || percentage < 0)
			throw new error('percentage must be between 0 and 1');

		// output to canvas for proof
		const cvs = document.createElement('canvas');
		const ctx = cvs.getContext('2d');

		cvs.width = 90;
		cvs.height = 25;

		// color1 on the left
		ctx.fillStyle = colorOne;
		ctx.fillRect(
			0, 0, 30, 25
		);

		// color2 on the right
		ctx.fillStyle = colorOne;
		ctx.fillRect(
			60, 0, 30, 25
		);

		// 2: check to see if we need to convert 3 char hex to 6 char hex, else slice off hash
		//      the three character hex is just a representation of the 6 hex where each character is repeated
		//      ie: #060 => #006600 (green)
		if(colorOne.length === 4)
			colorOne = colorOne[1] + colorOne[1] + colorOne[2] + colorOne[2] + colorOne[3] + colorOne[3];
		else
			colorOne = colorOne.substring(1);
		if(colorTwo.length === 4)
			colorTwo = colorTwo[1] + colorTwo[1] + colorTwo[2] + colorTwo[2] + colorTwo[3] + colorTwo[3];
		else
			colorTwo = colorTwo.substring(1);

		// console.log(`valid: c1 => ${ colorOne }, c2 => ${ colorTwo }`);

		// 3: we have valid input, convert colors to rgb
		colorOne = [
			parseInt(colorOne[0] + colorOne[1], 16),
			parseInt(colorOne[2] + colorOne[3], 16),
			parseInt(colorOne[4] + colorOne[5], 16),
		];
		colorTwo = [
			parseInt(colorTwo[0] + colorTwo[1], 16),
			parseInt(colorTwo[2] + colorTwo[3], 16),
			parseInt(colorTwo[4] + colorTwo[5], 16),
		];

		// console.log(`hex -> rgba: c1 => [${ colorOne.join(', ') }], c2 => [${ colorTwo.join(', ') }]`);

		// 4: blend
		let colorThree = [
			(1 - percentage) * colorOne[0] + percentage * colorTwo[0],
			(1 - percentage) * colorOne[1] + percentage * colorTwo[1],
			(1 - percentage) * colorOne[2] + percentage * colorTwo[2],
		];

		// console.log(`c3 => [${ colorThree.join(', ') }]`);

		// 5: convert to hex
		colorThree = `#${ intToHex(colorThree[0]) }${ intToHex(colorThree[1]) }${ intToHex(colorThree[2]) }`;

		// console.log(colorThree);

		// color3 in the middle
		ctx.fillStyle = colorThree;
		ctx.fillRect(
			30, 0, 30, 25
		);

		return colorThree;
	}
};

export default mixColor;
