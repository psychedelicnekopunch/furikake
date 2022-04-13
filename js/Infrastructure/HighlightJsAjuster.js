
import hljs from 'highlight.js/lib/core'

// lang
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('html', xml)


class HighlightJsAjuster {

	constructor(selector) {
		this._selector = selector
	}


	// _ajustWidth() {
	// 	console.log(window)
	// 	let targets = document.querySelectorAll(this._selector)
	// 	console.log(this._selector)
	// 	console.log(targets)
	// }

	create(value, lang) {
		value = value.replace(/^\n/, '')
		value = value.replace(/\n\t*$/, '')
		return `<pre><code class="hljs ${lang}">${hljs.highlight(value, { language: lang }).value}</code></pre>`
	}

}

export default HighlightJsAjuster
