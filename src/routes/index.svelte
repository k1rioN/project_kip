<svelte:head>
	<title>KIP PROJECT</title>
</svelte:head>


<script>
	import TransitionWrapper from '../components/TransitionWrapper.svelte'
	import TransitionWrapperAfter from '../components/TransitionWrapperAfter.svelte'
	import Chart from 'svelte-frappe-charts';
	let text;
	let result_post = '';
	let status = false;
	let math;
	let physics;
	let animation = false;
	let results;
	let data;
	let econom;
	let pravo;
	let norma; 
	let doktri;
	let organ;
	let market;
	let soc;
	let tech;
	let mathcount;
	let physicscount;
	let economcount;
	let pravocount;
	let normacount;
	let doktricount;
	let organcount;
	let marketcount;
	let soccount;
	let techcount;


	async function doPost () {
		const res = await fetch(`https://b10e92433b6a.ngrok.io/process`, {
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
		result_post = await res.json()
		status = true;
		animation = true;
		physics = result_post.physics.words;
		math = result_post.math.words;
		econom = result_post.economy.words;
		pravo = result_post.rules.words;
		norma = result_post.normative.words;
		doktri = result_post.const.words;
		organ = result_post.organization.words;
		market = result_post.marketing.words;
		soc = result_post.computer.words;
		tech = result_post.tech.words;
		mathcount = result_post.math.count;
		physicscount = result_post.physics.count;
		economcount = result_post.economy.count;
		pravocount = result_post.rules.count;
		normacount = result_post.normative.count;
		doktricount = result_post.const.count;
		organcount = result_post.organization.count;
		marketcount = result_post.marketing.count;
		soccount = result_post.computer.count;
		techcount = result_post.tech.count;
		console.log(physics)
	}
	function back() {
		animation = false;
	}
</script>


<body>
	{#if animation == false}
	<div class="before">
	<TransitionWrapper>
		<h1>ВВЕДИТЕ ТЕКСТ ДЛЯ АНАЛИЗА</h1> <br/>
		<p></p>
		<textarea bind:value={text}></textarea>
		<button on:click={doPost}>АНАЛИЗ</button>
		</TransitionWrapper>
	</div>
	{:else}
	{#await doPost}
	<p>...подождите</p>
	{:then}
	<div class="after">
	<TransitionWrapperAfter>
		<p></p>
		<textarea class="textafter" bind:value={text} readonly disabled></textarea> <br/>
	</TransitionWrapperAfter>
	</div>
	<div class="physics">
	<TransitionWrapper>
		<h3>Физические слова:</h3>
		<textarea class="phytext" readonly disabled>
			{physics}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="math">
	<TransitionWrapper>
		<h3>Математические слова:</h3>
		<textarea class="mathtext" readonly disabled>
			{math}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="econom">
	<TransitionWrapper>
		<h3>Экономические слова:</h3>
		<textarea class="economtext" readonly disabled>
			{econom}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="pravo">
	<TransitionWrapper>
		<h3>Правовые слова:</h3>
		<textarea class="pravotext" readonly disabled>
			{pravo}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="norma">
	<TransitionWrapper>
		<h3>Нормативные слова:</h3>
		<textarea class="normatext" readonly disabled>
			{norma}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="doktri">
	<TransitionWrapper>
		<h3>Доктриальные слова:</h3>
		<textarea class="doktritext" readonly disabled>
			{doktri}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="organ">
	<TransitionWrapper>
		<h3>Организационные слова:</h3>
		<textarea class="organtext" readonly disabled>
			{organ}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="market">
	<TransitionWrapper>
		<h3>Маркетинговые слова:</h3>
		<textarea class="markettext" readonly disabled>
			{market}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="soc">
	<TransitionWrapper>
		<h3>Социальные слова:</h3>
		<textarea class="soctext" readonly disabled>
			{soc}
		</textarea>
	</TransitionWrapper>
	</div>
	<div class="tech">
	<TransitionWrapper>
		<h3>Технические слова:</h3>
		<textarea class="techtext" readonly disabled>
			{tech}
		</textarea>
	</TransitionWrapper>
	</div>
	{#if status === true}
		{#if (process.browser) }
		<Chart data={data = {
    labels: ['Математический', 'Физический', 'Экономический', 'Правовой', 'Нормативный', 'Доктринальный ', 'Организационный', 'Маркетинговый', 'Социально-компьютерный', 'Технический'],
    datasets: [
      {
        values: [mathcount, physicscount, economcount, pravocount, normacount, doktricount, organcount, marketcount, soccount, techcount]
      }
    ]
  }} type="line"/>
		{/if}
	{/if}
	{/await}
	<button on:click={back} class="back">Вернуться назад</button>
	{/if}
</body>



<style>
	textarea { width: 100%; height: 200px; margin-top: -30px; background-color: white; resize: none; }
	.back {
		margin-top: 10px;
		height: 30px;
		width: 160px;
		margin-left: 330px;
		position: absolute;
	}
	.tech {
		position: absolute;
		left: 1076px;
		top: 250px;
		text-align: center;
	}
	.soc {
		position: absolute;
		left: 852px;
		top: 250px;
		text-align: center;
	}
	.market {
		position: absolute;
		left: 628px;
		top: 250px;
		text-align: center;
	}
	.organ {
		position: absolute;
		left: 394px;
		top: 250px;
		text-align: center;
	}
	.doktri {
		position: absolute;
		left: 183px;
		top: 250px;
		text-align: center;
	}
	.norma {
		position: absolute;
		left: 120%;
		top: 25px;
		text-align: center;
	}
	.pravo {
		position: absolute;
		left: 95%;
		top: 25px;
		text-align: center;
	}
	.physics {
		position: absolute;
		left: 45%;
		top: 25px;
		text-align: center;
	}
	.econom {
		position: absolute;
		left: 70%;
		top: 25px;
		text-align: center;
	}
	.mathtext, .phytext, .economtext, .pravotext, .normatext, .doktritext, .organtext, .markettext, .soctext, .techtext {
		position: relative;
		width: 190px;
		height: 150px;
		background-color: white;
		resize: none;
		top: 10px;
		margin-top: 3px;
		text-align: center;
		font-size: 17px;
		overflow-wrap: break-word;
		hyphens: auto;
	}
	.math {
		position: absolute;
		left: 20%;
		top: 25px;
		text-align: center;
	}
	.textafter {
		font-size: 20px;
		top: 5%;
		width: 500px;
		height: 400px;
		background-color: whitesmoke;
		resize: none;
	}
	.after {
		position: relative;
		top: 15%;
		left: -50%;
	}
	h1 {
		text-align: center;
		margin-top: 60px;
		margin-bottom: 5px;
	}
	button {
		position: center;
		width: 101%;
		height: 50px;
		margin-top: -10px;
		margin-left: -2px;
		margin-bottom: 40px;
	}
	p {
		margin-top: 30px;
		margin-bottom: 20px; 
	}

</style>