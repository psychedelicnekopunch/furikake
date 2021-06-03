
import Index from '/js/interfaces/presenters/Index.svelte';


class ButtonContoller {

	constructor() {

	}


	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
			props: {
				category: 'button',
				article: 'index',
			},
		})
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}

}


export default ButtonContoller;
