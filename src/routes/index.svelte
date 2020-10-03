<svelte:head>
	<title>KIP PROJECT</title>
</svelte:head>


<script>
	let text;


</script>


<body>
	<h1>ВВЕДИТЕ ТЕКСТ ДЛЯ АНАЛИЗА</h1>
	<textarea bind:value={text}></textarea>

</body>



<style>
	
	textarea { width: 100%; height: 200px; }
	h1 {
		text-align: center;
	}

</style>