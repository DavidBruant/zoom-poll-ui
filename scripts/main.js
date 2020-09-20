import App from './App.svelte';

const questionsAnswersStats = []

const app = new App({
	target: document.querySelector('.svelte-main'),
	props: {
		questionsAnswersStats
	}
});

export default app;