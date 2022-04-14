
import HighlightJs from '/js/Infrastructure/HighlightJs.js'


class HighlightJsGateway {

	constructor(selector) {
		this._highlightJs = new HighlightJs(selector)
	}

	ajustWidth(parentSelector) {
		return this._highlightJs.ajustWidth(parentSelector)
	}

	create(value, lang) {
		return this._highlightJs.create(value, lang)
	}

}

export default HighlightJsGateway
