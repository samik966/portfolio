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
