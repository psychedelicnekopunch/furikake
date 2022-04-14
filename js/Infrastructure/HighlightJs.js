
import hljs from 'highlight.js/lib/core'

// lang
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('html', xml)


class HighlightJs {

	constructor(selector) {

		this._selector = selector
		this._targets = []

		let self = this

		window.setTimeout(function() {
			self._targets = document.querySelectorAll(self._selector)
			console.log(self._selector)
			console.log(self._targets)
			self.ajustWidth()
		}, 100)
	}


	ajustWidth() {
		let width = 0
		this._targets.forEach((target, _) => {
			if (target.children[0]) {
				target.children[0].style.whiteSpace = 'normal'
			}
		})
		this._targets.forEach((target, _) => {
			width = target.clientWidth
		})
		this._targets.forEach((target, _) => {
			if (target.children[0]) {
				target.children[0].style.whiteSpace = ''
				target.children[0].style.width = `${width}px`
			}
			width = target.clientWidth
		})
	}


	create(value, lang) {
		value = value.replace(/^\n/, '')
		value = value.replace(/\n\t*$/, '')
		return `<pre><code class="hljs ${lang}">${hljs.highlight(value, { language: lang }).value}</code></pre>`
	}

}

export default HighlightJs
