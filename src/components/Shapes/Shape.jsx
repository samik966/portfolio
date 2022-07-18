const Shape = ({ className, ...styleProps }) => {
  const classNames = className ? `shape ${className}` : 'shape'
	return <div className={classNames} style={{ ...styleProps }} />
}

export default Shape
