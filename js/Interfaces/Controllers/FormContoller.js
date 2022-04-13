
import Index from '/js/Interfaces/Presenters/Index.svelte';


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
	}

}


export default FormContoller;
