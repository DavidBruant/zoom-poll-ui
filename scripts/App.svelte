<script>
	export let name;

	import QuestionAnswerStats from './QuestionAnswerStats.svelte';

	$: answerStats = new Map([
		['A', 5],
		['B', 2],
		['C', 7],
		['D, la réponse D', 9],
	])
</script>

<h2>Hello {name}!</h2>
<QuestionAnswerStats question="Yo ?" answersCount="12" answerStats={answerStats}/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

