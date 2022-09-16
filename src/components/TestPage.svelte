<script>
  import { answerStore, questionStore } from "../store";
  import { pronomsList } from "../staticParams";
  import { navigate } from "svelte-routing";

  import CorrectIcon from "../assets/correct.svg";
  import WrongIcon from "../assets/wrong.svg";

  //   Question list from store
  let questionList;

  // Local state - init value
  let currentQuestionId = 0;
  let currentAnswer = "";
  let answerList = [];

  //   Get question list from store
  questionStore.subscribe((value) => {
    questionList = value;
  });

  if (!questionList || questionList.length == 0) window.location = "/";

  let totalQuestion = questionList.length;

  console.log(questionList);

  const addAnswer = () => {
    const question = questionList[currentQuestionId];
    const userAnswer = currentAnswer.trim();
    // Check result here
    console.log(question["answer"], userAnswer);
    const result = question["answer"] == userAnswer ? "correct" : "wrong";

    answerList.push({
      question,
      userAnswer,
      result,
    });
    console.log(answerList);
  };
  const finishTest = () => {
    // To result Pg
    alert("Done!");
    answerStore.update((value) => answerList);
    navigate("/result");
  };
  const moveNextQuestion = () => {
    if (currentQuestionId < totalQuestion - 1) {
      currentAnswer = "";
      currentQuestionId++;
    } else {
      finishTest();
    }
  };
</script>

<div class="container content-container">
  <div class="row">
    <div class="col-6 align-left">
      <h3>{currentQuestionId + 1}/{totalQuestion}</h3>
    </div>
    <div class="col-6 align-right">
      <img alt="correct-icon" src={CorrectIcon} class="correct-icon" />
      <span class="correct">0</span> |
      <img alt="wrong-icon" class="wrong-icon" src={WrongIcon} />
      <span class="wrong">0</span>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h3>
        {questionList[currentQuestionId]["temps"]}
        {questionList[currentQuestionId]["mode"][0] == "I" ? "de l'" : "du"}
        {questionList[currentQuestionId]["mode"]}
      </h3>
    </div>
    <div class="row">
      <div class="col-3" style="text-align: right;">
        <b>
          <h4 class="pronom-highlight">
            {questionList[currentQuestionId]["pronom"]}
          </h4>
        </b>
      </div>
      <div class="col-3">
        <input
          type="text"
          class="form-control"
          on:keypress={(e) => {
            if (e.keyCode == "13") {
              addAnswer();
              moveNextQuestion();
            }
          }}
          bind:value={currentAnswer}
        />
      </div>
      <div class="col-3" style="text-align: left;">
        <span>
          <h3>({questionList[currentQuestionId]["infinitif"]})</h3>
        </span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <b />
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <button
        class="btn btn-info"
        disabled={!currentAnswer}
        on:click={() => {
          addAnswer();
          moveNextQuestion();
        }}
        >{currentQuestionId == totalQuestion - 1 ? "Finir" : "Suivant"}</button
      >
    </div>
  </div>
</div>
