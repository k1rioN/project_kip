<svelte:head>
	<title>KIP PROJECT</title>
</svelte:head>


<script>
	let text;
	let result_post;
	let results;


	async function doPost () {
		const res = await fetch(`http://d84030b6807c.ngrok.io/process`, {
		method: 'POST', 
			body: JSON.stringify({
				text
			}),
			headers: 
    {
        'Accept': 'application/json',
			'Content-Type': 'application/json'
    }
		})
		const json = await res.json()
		result_post = JSON.stringify(json)
		
		const res2 = await self.fetch(`http://d84030b6807c.ngrok.io/process`)
			.then(async res => {				
				results = await res.json();
			})
		console.log("Post done")
	}

</script>


<body>
	<h1>ВВЕДИТЕ ТЕКСТ ДЛЯ АНАЛИЗА</h1>
	<textarea bind:value={text}></textarea>
	<button on:click={doPost}>АНАЛИЗ</button>
	<p>{results}</p>
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