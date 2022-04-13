
import HighlightJsAjuster from '/js/Infrastructure/HighlightJsAjuster.js'


class HighlightJsAjusterGateway {

	constructor(selector) {
		this._highlightJsAjuster = new HighlightJsAjuster(selector)
	}

	create(value, lang) {
		return this._highlightJsAjuster.create(value, lang)
	}

}

export default HighlightJsAjusterGateway
