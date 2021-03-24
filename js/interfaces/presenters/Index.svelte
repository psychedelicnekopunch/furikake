<script>

	import SlideMenu from '/js/interfaces/presenters/components/SlideMenu.svelte';
	import Layout from '/js/interfaces/presenters/components/Layout.svelte';

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
