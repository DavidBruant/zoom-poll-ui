import App from './App.svelte';

const questionsAnswersStats = [
	{
		question: 'Ça roule ?',
		answersCount: 13,
		answerStats: new Map([
			['yep', 9],
			['nope', 4],
		])
	},
	{
		question: 'Yo ?',
		answersCount: 12,
		answerStats: new Map([
			['A', 5],
			['B', 2],
			['C', 7],
			['D, la réponse D', 9],
		])
	}
]

const app = new App({
	target: document.querySelector('.svelte-main'),
	props: {
		questionsAnswersStats
	}
});

export default app;