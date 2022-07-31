const DisplayHtmlString = ({ content }) => {
	return <p dangerouslySetInnerHTML={{ __html: content }} />
}

export default DisplayHtmlString
