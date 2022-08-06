export const opacityTransition = {
  show: {
    opacity: 1
  },
  hide: {
    opacity: 0
  }
}

export const bounceTransition = {
  show: {
    y: [-2.5, 2.5],
    transition: {
      repeat: Infinity,
      duration: 1,
      repeatType: 'reverse'
    }
  },
}

export const cardContainerTransition = {
	hide: {
		opacity: 0
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1
		}
	}
}