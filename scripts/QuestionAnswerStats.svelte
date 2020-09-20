<script>
	export let question;
	export let answersCount;
    export let answerStats;
    
    $: sortedAnswerStats =[...answerStats]
        .sort(([_, count1], [__, count2]) => count2 - count1)
        .map(([answer, count]) => ({answer, count, items: Array(count).fill('🦊')}))
</script>

<section class="question-answer-stats">
    <h1>{question} ({answersCount} réponses)</h1>
    {#if sortedAnswerStats.length >= 1}
    <ul>
        {#each sortedAnswerStats as {answer, count, items}}
        <li>
            <span class="answer">{answer}</span>
            <span class="count">{count}/{answersCount}</span>
            {#each items as i}{i}{/each}
        </li>
        {/each}
    </ul>
    {:else}
    No data. Maybe try uploading the <a href="./data/fake-zoom-poll-file.csv">test file</a>
    {/if}
    
</section>

<style>
    .question-answer-stats{
        margin-bottom: 1em;
    }

    .question-answer-stats h1{
        font-size: 1.2rem;
    }

    .question-answer-stats li .count{
        display: inline-block;
        width: 4em;
        font-weight: bold;
        text-align: center;
    }

    .question-answer-stats li .answer{
        display: block;
    }
    

</style>

