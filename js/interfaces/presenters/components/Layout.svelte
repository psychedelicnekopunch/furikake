<script>

	import Version from '/js/interfaces/presenters/components/Version.svelte';
	import Nav from '/js/interfaces/presenters/components/Nav.svelte';
	import Header from '/js/interfaces/presenters/components/Header.svelte';
	import Footer from '/js/interfaces/presenters/components/Footer.svelte';
	import SubFooter from '/js/interfaces/presenters/components/SubFooter.svelte';
	import MainFooter from '/js/interfaces/presenters/components/MainFooter.svelte';
	import Article from '/js/interfaces/presenters/components/Article.svelte';


	export let category = ''
	export let article = ''
	export let didClickHeaderBars = function() {}

</script>

<style lang="scss">

</style>

<div class="layout dashboard bg-superdark-gray">
	<header class="layout-header bg-dark-gray color-white-link padding-medium">
		<Header didClick={ didClickHeaderBars }/>
	</header>
	<div class="layout-column bg-white">
		<div class="layout-column-sub-primary bg-superlight-gray hide-mobile hide-tablet">
			<div class="layout-content">
				<header class="layout-header padding-medium">
					<div class="padding-medium bg-light-gray font-xsmall">
						<Version/>
					</div>
				</header>
				<Nav category={ category } article={ article }/>
			</div>
			<footer class="layout-footer padding-small">
				<SubFooter/>
			</footer>
		</div>
		<div class="layout-column-main">
			<div class="layout-content">
				<Article category={ category } article={ article }/>
				<footer class="layout-footer padding-small">
					<MainFooter/>
				</footer>
			</div>
		</div>
	</div>
	<footer class="layout-footer bg-superdark-gray color-white padding-small font-xsmall">
		<Footer/>
	</footer>
</div>
