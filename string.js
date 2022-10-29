module.exports = function ({ value, props } = {}) {
	if (props) {
		if (props.type === 'String') {
			return value
		}
	}
}