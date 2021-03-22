<script>

	export let category = ''
	export let article = ''

</script>

<style lang="scss">
	li {
		a {
			display: block;
		}
	}
	ul.button-index {
		& {
			background: #e1e5e8;
		}
	}
</style>

<nav class="padding-medium font-small color-blue-link">
	<ul class="{ category }-{ article }">
		<!-- <li><a href="/align">Align</a></li> -->
		<li class="button-index"><a href="/button">Button</a></li>
		<!-- <li><a href="/card">Card</a></li>
		<li><a href="/color">Color</a></li>
		<li><a href="/form">Form</a></li>
		<li><a href="/grid">Grid</a></li>
		<li><a href="/layout">Layout</a></li>
		<li><a href="/list">List</a></li>
		<li><a href="/md">Markdown</a></li>
		<li><a href="/menu">Menu</a></li>
		<li><a href="/modal">Modal</a></li>
		<li><a href="/spacing">Spacing</a></li>
		<li>
			<a href="/text">Text</a>
			<ul>
				<li><a href="/text#headline">Headline</a></li>
				<li><a href="/text#fontSize">Font Size</a></li>
				<li><a href="/text#paragraph">Paragraph</a></li>
			</ul>
		</li> -->
	</ul>
</nav>
