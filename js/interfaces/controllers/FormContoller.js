
import Index from '/js/interfaces/presenters/Index.svelte';


class FormContoller {

	constructor() {

	}


	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
			props: {
				category: 'form',
				article: 'index',
			},
		})
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}

}


export default FormContoller;
