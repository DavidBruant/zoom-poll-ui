<script>
	export let question;
	export let answersCount;
    export let answerStats;
    
    $: sortedAnswerStats =[...answerStats]
        .sort(([_, count1], [__, count2]) => count2 - count1)
        .map(([answer, count]) => ({answer, items: Array(count).fill('🧘')}))
</script>

<section class="question-answer-stats">
    <h1>{question} ({answersCount} réponses)</h1>
    <ul>
        {#each sortedAnswerStats as {answer, items}}
        <li>
            {#each items as i}{i}{/each}
            <span>{answer}</span>
        </li>
        {/each}
    </ul>
</section>

<style>
    .question-answer-stats h1{
        font-size: 1.2rem;
    }
    
</style>

