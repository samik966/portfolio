const LoaderImage = ({ className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			className={className}
			width='200px'
			height='200px'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid'
		>
			<g transform='translate(50,50)'>
				<g transform='scale(0.7)'>
					<circle className='outerCircle' cx='0' cy='0' r='50'></circle>
					<circle className='innerCircle' cx='0' cy='-28' r='15'>
						<animateTransform
							attributeName='transform'
							type='rotate'
							dur='1s'
							repeatCount='indefinite'
							keyTimes='0;1'
							values='0 0 0;360 0 0'
						></animateTransform>
					</circle>
				</g>
			</g>
		</svg>
	)
}

export default LoaderImage
