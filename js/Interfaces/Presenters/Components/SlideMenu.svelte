<script>

	import { onMount } from 'svelte'
	import { createEventDispatcher } from 'svelte'
	import Nav from '/js/Interfaces/Presenters/Components/Nav.svelte';

	export let category = ''
	export let article = ''

	const _dispatch = createEventDispatcher()

	let isOpen = false


	function click() {
		console.log('click')
		isOpen = !isOpen
	}


	onMount(() => {
		_dispatch('didInit', {
			didClick: () => {
				click()
			}
		})
	})

</script>

<style lang="scss">
	.slide-menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		background: rgba(0, 0, 0, 0.7);
		.slide-menu-nav {
			width: 90%;
			height: 100%;
			background: #fff;
		}
		.slide-menu-out {
			width: 10%;
			height: 100%;
		}
		.slide-menu-close {
			i {
				font-size: 22px;
				cursor: pointer;
			}
		}
	}
</style>


{#if isOpen }
	<div class="slide-menu hide-pc">
		<div class="slide-menu-nav">
			<div class="slide-menu-close">
				<i on:click={ click } class="fas fa-times padding-medium color-blue-link"></i>
			</div>
			<Nav category={ category } article={ article }/>
		</div>
		<div on:click={ click } class="slide-menu-out"></div>
	</div>
{/if}
