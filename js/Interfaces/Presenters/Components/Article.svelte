<script>

	import Index from '/js/Interfaces/Presenters/Index/Index.svelte';
	import Button from '/js/Interfaces/Presenters/Button/Index.svelte';
	import Form from '/js/Interfaces/Presenters/Form/Index.svelte';


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
