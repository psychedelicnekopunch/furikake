<script>

	import HighlightJsGateway from '/js/Interfaces/Gateways/HighlightJsGateway.js'


	let highlightJsGateway = new HighlightJsGateway('.highlight')


	function resize() {
		highlightJsGateway.ajustWidth()
	}

</script>

<style lang="scss">

</style>


<svelte:window on:resize={resize}/>

<header class="layout-header">
	<h2 class="headline1">Button</h2>
</header>
<div class="padding-medium">
	<h3 class="headline2">Usage</h3>
	<h4 class="headline3">Tag (a, button, div)</h4>
	<div class="padding-bottom-xlarge">
		<a href="/button" class="button default medium">A</a>
		<button type="button" class="button default medium">Button</button>
		<div class="button default medium">div</div>
		<div class="highlight">
			{ @html highlightJsGateway.create(`
<a href="/button" class="button default medium">A</a>
<button type="button" class="button default medium">Button</button>
<div class="button default medium">div</div>
			`, 'html') }
		</div>
	</div>
	<div class="padding-bottom-xlarge">
		<h4 class="headline3">Size (large, medium, small)</h4>
		<div class="button default large">Large</div>
		<div class="button default medium">Medium</div>
		<div class="button default small">Small</div>
		<div class="highlight">
			{ @html highlightJsGateway.create(`
<div class="button default large">Large</div>
<div class="button default medium">Medium</div>
<div class="button default small">Small</div>
			`, 'html') }
		</div>
	</div>
	<div class="padding-bottom-xlarge">
		<h4 class="headline3">Priority (primary, secondary, default)</h4>
		<div class="button primary medium">Primary</div>
		<div class="button secondary medium">Secondary</div>
		<div class="button default medium">Default</div>
		<div class="highlight">
			{ @html highlightJsGateway.create(`
<div class="button primary medium">Primary</div>
<div class="button secondary medium">Secondary</div>
<div class="button default medium">Default</div>
			`, 'html') }
		</div>
	</div>
	<div class="padding-bottom-xlarge">
		<h4 class="headline3">Use Icon (icon-left, icon-right)</h4>
		<div class="button primary medium icon-left"><i class="fas fa-chevron-left"></i>Icon Left</div>
		<div class="button primary medium icon-right">Icon Right<i class="fas fa-chevron-right"></i></div>
		<div class="highlight">
			{ @html highlightJsGateway.create(`
<div class="button primary medium icon-left"><i class="fas fa-chevron-left"></i>Icon Left</div>
<div class="button primary medium icon-right">Icon Right<i class="fas fa-chevron-right"></i></div>
			`, 'html') }
		</div>
	</div>
</div>
