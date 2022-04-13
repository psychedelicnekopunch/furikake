
import Index from '/js/Interfaces/Presenters/Index.svelte';


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
