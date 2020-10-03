<svelte:head>
	<title>KIP PROJECT</title>
</svelte:head>


<script>
	let text;

	async function doAnalyse (text) {

	}

</script>


<body>
	<h1>ВВЕДИТЕ ТЕКСТ ДЛЯ АНАЛИЗА</h1>
	<textarea bind:value={text}></textarea>
	<button on:click={doAnalyse}>АНАЛИЗ</button>
</body>



<style>
	
	textarea { width: 100%; height: 200px; }
	h1 {
		text-align: center;
	}
	button {
		position: center;
		width: 101%;
		height: 50px;
	}
</style>