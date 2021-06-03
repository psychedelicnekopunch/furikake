<script>

	import Index from '/js/interfaces/presenters/index/Index.svelte';
	import Button from '/js/interfaces/presenters/button/Index.svelte';
	import Form from '/js/interfaces/presenters/form/Index.svelte';


	export let category = ''
	export let article = ''

</script>

<style lang="scss">

</style>

{#if category == 'index'}
	{#if article == 'index'}
		<Index/>
	{/if}
{/if}

{#if category == 'button'}
	{#if article == 'index'}
		<Button/>
	{/if}
{/if}

{#if category == 'form'}
	{#if article == 'index'}
		<Form/>
	{/if}
{/if}
