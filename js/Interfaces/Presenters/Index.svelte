<script>

	import SlideMenu from '/js/Interfaces/Presenters/Components/SlideMenu.svelte';
	import Layout from '/js/Interfaces/Presenters/Components/Layout.svelte';

	export let category = ''
	export let article = ''

	let _slideMenuEvent = null


	function didInitSlideMenu(e) {
		_slideMenuEvent = e
	}

	function didClickHeaderBars() {
		if (_slideMenuEvent) {
			// console.log(_slideMenuEvent)
			_slideMenuEvent.detail.didClick()
		}
	}

</script>

<style lang="scss">

</style>

<SlideMenu on:didInit={ didInitSlideMenu }/>
<Layout
	category={ category }
	article={ article }
	didClickHeaderBars={ didClickHeaderBars }
/>
