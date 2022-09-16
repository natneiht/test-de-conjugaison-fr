<script>
  import { prevent_default } from "svelte/internal";

  import { answerStore } from "../store";

  // Get user's answer from store
  let userAnswerList;
  answerStore.subscribe((value) => (userAnswerList = value));

  // console.log(userAnswerList);
  // Count result
  const totalCorrect = userAnswerList.reduce(
    (prv, crr) => (crr["result"] == "correct" ? (prv += 1) : prv),
    0
  );
  const totalWrong = userAnswerList.reduce(
    (prv, crr) => (crr["result"] == "wrong" ? (prv += 1) : prv),
    0
  );
</script>

<div class="container content-container">
  <div class="row">
    <h5>
      Nombre de bonnes réponses:
      <span class="correct">{totalCorrect}</span>
    </h5>
  </div>
  <div class="row">
    <h5>
      Nombre de mauvaises réponses:
      <span class="wrong">{totalWrong}</span>
    </h5>
  </div>
  <div class="row">
    <a href="/">
      <h5>Réessayer</h5>
    </a>
  </div>

  <hr />
  <div class="row">
    <h5>Détail</h5>
  </div>
  <!-- <div class="row checkbox">
    <label>
      <input type="checkbox" />
      Afficher toutes les réponses
    </label>
  </div> -->
  <hr />

  <div class="container">
    {#each userAnswerList as ans, index}
      <div class="row">
        <div class="col-1">{index + 1}</div>

        <div class="col-4">
          {ans["question"]["pronom"]} ({ans["question"]["infinitif"]})
          <span class={ans["result"]}>
            {#if ans["result"] == "wrong"}
              <s><b>{ans["userAnswer"]}</b></s>
            {:else}
              <b>{ans["userAnswer"]}</b>
            {/if}
          </span>
        </div>
        <div class="col-4">
          <!-- <span class="correct">{ans["question"]["pronom"]}</span> - -->
          <span>{ans["question"]["mode"]}</span> -
          <span>{ans["question"]["temps"]}</span>
        </div>
        <div class="col-3">
          {#if ans["result"] == "wrong"}
            <span class="wrong"> <b>{ans["question"]["answer"]}</b> </span>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
