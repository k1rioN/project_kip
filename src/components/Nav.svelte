<script>
	import { fade, fly } from 'svelte/transition';
	let visible = true;
</script>

<style>
	p {
		font-weight: 300;
		padding: 0 1em;
		text-align: center;
		float: inherit;
	}

	

	img {
		width: 350px;
		height: 200px;
		margin-right: 10px;
		margin-top: -10px;
		margin-bottom: -20px;
	}
</style>






{#if visible}
	<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
		<img in:fly="{{ y: 200, duration: 2000 }}" out:fade src="gAoHnb0oeEk.jpg" alt="kip"/>
	</p>
{/if}