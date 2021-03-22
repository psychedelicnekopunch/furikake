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

</script>

<style lang="scss">

</style>

<div class="layout">
	<header class="layout-header bg-dark-gray color-white-link padding-medium">
		<Header/>
	</header>
	<div class="layout-content layout-content-calc-header layout-content-calc-footer">
		<div class="layout-column">
			<div class="layout-sub bg-superlight-gray">
				<header class="layout-header padding-medium">
					<div class="padding-medium bg-light-gray font-xsmall">
						<Version/>
					</div>
				</header>
				<div class="layout-content-scroll layout-content-calc-header layout-content-calc-footer">
					<Nav category={ category } article={ article }/>
				</div>
				<footer class="layout-footer padding-small">
					<SubFooter/>
				</footer>
			</div>
			<div class="layout-main">
				<div class="layout-content-scroll layout-content-calc-footer padding-medium">
					<Article category={ category } article={ article }/>
				</div>
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
