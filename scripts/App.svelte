<script>
	export let questionsAnswersStats;

	import {csvParseRows} from 'd3-dsv';
	import Dropzone from 'svelte-file-dropzone';
	import QuestionAnswerStats from './QuestionAnswerStats.svelte';

	function onFile({detail: {acceptedFiles, fileRejections}}){
		
		if(fileRejections && fileRejections.length >= 1)
			console.warn('fileRejections', fileRejections)

		const [file] = acceptedFiles;

		(new Promise( (resolve) => {
			const reader = new FileReader();  
			reader.addEventListener("loadend", e => {
				resolve(reader.result);
			});
			reader.readAsText(file);
		}))
		.then(textContent => {
			const csvData = csvParseRows(textContent)
			
			const data = csvData
				.slice(1) // skip column names row
				.map(([id, name, email, date, question, answer]) => ({question, answers: answer.split(';')}))

			console.log('data', data)

			const perQuestionAnswerStats = new Map()
			const perQuestionAnswerCount = new Map()

			for(const {question, answers} of data){
				let answerStats = perQuestionAnswerStats.get(question) || new Map();
				let answerCount = perQuestionAnswerCount.get(question) || 0;

				for(const answer of answers){
					const count = answerStats.get(answer) || 0;
					answerStats.set(answer, count + 1)
				}

				perQuestionAnswerStats.set(question, answerStats)
				perQuestionAnswerCount.set(question, answerCount + 1)
			}

			questionsAnswersStats = [...perQuestionAnswerStats]
				.map(([question, answerStats]) => ({question, answerStats, answersCount: perQuestionAnswerCount.get(question)}))

			console.log('questionsAnswersStats', questionsAnswersStats)
		})

	}

</script>

<Dropzone on:drop={onFile} />

{#each questionsAnswersStats as {question, answersCount, answerStats} }
<QuestionAnswerStats question={question} answersCount={answersCount} answerStats={answerStats}/>
{/each}

