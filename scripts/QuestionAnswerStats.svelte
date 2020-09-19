<script>
	export let question;
	export let answersCount;
    export let answerStats;
    
    $: sortedAnswerStats =[...answerStats]
        .sort(([_, count1], [__, count2]) => count2 - count1)
        .map(([answer, count]) => ({answer, count}))
</script>

<section class="question-answer-stats">
    <h1>{question} ({answersCount} réponses)</h1>
    <ul>
        {#each sortedAnswerStats as {answer, count}}
        <li>
            <span class="count">{count}/{answersCount}</span>
            <span class="answer">{answer}</span>
        </li>
        {/each}
    </ul>
</section>

<style>
    .question-answer-stats{
        margin-bottom: 1em;
    }

    .question-answer-stats h1{
        font-size: 1.2rem;
    }

    .question-answer-stats li{
        display: flex;
        flex-direction: row;
    }

    .question-answer-stats li .count{
        display: inline-block;
        width: 4em;
        font-weight: bold;
        text-align: center;
    }
    
</style>

