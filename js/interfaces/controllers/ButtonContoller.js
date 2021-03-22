
import Index from '/js/interfaces/presenters/button/Index.svelte';


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
	}

}


export default ButtonContoller;
