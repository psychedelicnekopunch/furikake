
import Index from '/js/Interfaces/Presenters/Index.svelte';


class IndexController {

	constructor() {

	}


	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
			props: {
				category: 'index',
				article: 'index',
			},
		})
	}

}


export default IndexController;
