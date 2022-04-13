<script>

	export let didClick = function() {}

</script>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		.bars {
			width: 50px;
			i {
				color: #fff;
				font-size: 22px;
				line-height: 100%;
				cursor: pointer;
			}
		}
		h1 {
			flex: 1;
		}
	}
</style>

<div class="header">
	<div class="bars hide-pc">
		<i on:click={ didClick } class="fas fa-bars"></i>
	</div>
	<h1><a href="/">furikake</a></h1>
</div>
