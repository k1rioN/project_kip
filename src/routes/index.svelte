<svelte:head>
	<title>KIP PROJECT</title>
</svelte:head>


<script>
	import TransitionWrapper from '../components/TransitionWrapper.svelte'
	import Chart from 'svelte-frappe-charts';
	let text;
	let result_post = '';
	let status = false;
	let math = 25;


	function switchStatus() {
		status = true;
	}

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
		diagramStatus = true;
	}

	let data = {
    labels: ['Математический', 'Физический', 'Экономический', 'Правовой', 'Нормативный', 'Доктринальный ', 'Организационный', 'Маркетинговый', 'Социально-компьютерный', 'Технический'],
    datasets: [
      {
        values: [math, 12, 3, 9, 8, 15, 9, 10, 20, 11]
      }
    ]
  };
</script>


<body>
	<TransitionWrapper>
		<h1>ВВЕДИТЕ ТЕКСТ ДЛЯ АНАЛИЗА</h1> <br/>
	<p></p>
	<textarea bind:value={text}></textarea>
	<button on:click={doPost} on:click={switchStatus}>АНАЛИЗ</button>
	<p>{result_post}</p>
	{#if status === true}
	{#if (process.browser) }
	<Chart data={data} type="line" />
	{/if}
	{/if}
	</TransitionWrapper>
</body>



<style>
	textarea { width: 100%; height: 200px; margin-top: -20px; }
	h1 {
		text-align: center;
		margin-top: -30px;
		margin-bottom: 5px;
	}
	button {
		position: center;
		width: 101%;
		height: 50px;
		margin-top: -18px;
	}
	
</style>