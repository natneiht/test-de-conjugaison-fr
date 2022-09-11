<script>
  import { each } from "svelte/internal";
  import {
    pronomsList,
    tempsSelectedTemplate,
    verbWithEtre,
  } from "../staticParams";
  import {
    loadQuestion,
    getRandomItemFromArray,
    getRandomInt,
    isComposeTemps,
    getAuxiliary,
  } from "../functions";
  import { questionStore, tempsStore } from "../store.js";
  import { navigate } from "svelte-routing";

  export const maxVerbList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let maxVerbValue = 10;
  let storeValue;
  const modeList = Object.keys(pronomsList);
  let tempsSelected = tempsSelectedTemplate;
  console.log(tempsSelectedTemplate);
  // Load template from loacal storage
  const localTempsData = localStorage.getItem("_temps");
  if (localTempsData) {
    tempsSelected = JSON.parse(localTempsData);
  } else {
    tempsSelected = tempsSelectedTemplate;
  }

  const tempsList = modeList.map((mode) => {
    const returnData = Object.keys(pronomsList[mode]);
    return returnData;
  });

  console.log(modeList);
  console.log(tempsList);
  console.log(tempsSelected);

  // Save template in local storage

  // Init questions
  const initQuestion = async () => {
    // Reduce temps list
    let tempsSelectedList = [];
    console.log(tempsSelected);
    Object.keys(tempsSelected).forEach((mode) => {
      const temps = Object.keys(tempsSelected[mode]);
      const selectedTemps = [];
      temps.forEach((item) => {
        if (tempsSelected[mode][item] == true) selectedTemps.push(item);
      });
      if (selectedTemps.length > 0) {
        tempsSelectedList.push([mode, selectedTemps]);
      }
    });

    console.log(tempsSelected);
    if (tempsSelectedList.length > 0) {
      // Update temps list in store
      tempsStore.update((temps) => tempsSelected);

      // Load question
      const response = await loadQuestion(maxVerbValue);
      if (response) {
        questionStore.update((value) => response.data);
      }

      // Generate questions from data
      // Question struture:
      // {infinitif: 'aller', pronom: 'Je',
      // mode: "Indicatif", temps: "Présent", answer: "vais"}

      let questionList = [];
      const { verbList } = response.data;
      const totalQuestion = verbList.length;
      const verbListDetail = response.data.detail;
      verbListDetail.forEach((verb, index) => {
        const infinitif = verb["_id"];
        const rndMode = getRandomItemFromArray(tempsSelectedList);
        const mode = rndMode[0];
        const rndTemps = getRandomItemFromArray(rndMode[1]);
        const temps = rndTemps;

        // Get "pronom" by "mode" and "temps"
        const pronomArray = pronomsList[mode][temps];
        const pronomId = getRandomInt(0, pronomArray.length - 1);
        const pronomKey = pronomArray[pronomId];
        let pronom = pronomKey;
        if (pronomKey == "il") {
          pronom = getRandomItemFromArray(["il", "elle"]);
        } else if (pronomKey == "ils") {
          pronom = getRandomItemFromArray(["ils", "elles"]);
        }

        // Get answer
        const verbDetail = response.data.detail;
        const participePasse = verbDetail[index][mode][temps][pronomId];
        let answer = participePasse;
        // accord
        if (verbWithEtre.includes(infinitif)) {
          if (pronom == "elle") {
            // feminin sg.
            answer = participePasse + "e";
          } else if (pronom == "elles") {
            // feminin pl.
            answer = participePasse + "es";
          } else {
            answer = participePasse;
          }
        }

        // Get auxiliary
        const auxiliary = getAuxiliary(verb["_id"], temps, mode, pronomId);
        const space = auxiliary == "" ? "" : " ";
        answer = auxiliary + space + answer;

        questionList.push({
          infinitif,
          mode,
          temps,
          pronom,
          answer,
          compose: isComposeTemps(temps, mode),
          auxiliary,
        });
      });

      localStorage.setItem("_temps", JSON.stringify(tempsSelected));

      questionStore.update((value) => (value = questionList));

      // Navigate to test page
      navigate("/test", { replace: false });
    } else {
      alert("Select at least 1 tense in list below!");
    }
  };
</script>

<div class="container content-container">
  <div>
    <div class="form-group row">
      <label class="col-sm-4 col-form-label" for="maxVerb">
        Nombre de verbes:
      </label>
      <div class="col-sm-4">
        <select
          name="maxVerb"
          id="maxVerb"
          class="max-question-select"
          bind:value={maxVerbValue}
          on:change={() => console.log(maxVerbValue)}
        >
          {#each maxVerbList as num}
            <option value={num}>{num}</option>
          {/each}
        </select>
      </div>

      <div class="col-sm-4">
        <button
          class="btn btn-info main-start-button"
          on:click={async () => {
            await initQuestion();
          }}
        >
          Démarrer
        </button>
      </div>
    </div>
    <div class=" form-group row">
      <div class="col-sm-4" />
      <div class="col-sm-8 temps-list">
        {#each modeList as modeItem, index}
          <h6>{modeItem}</h6>
          {#each tempsList[index] as temps}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                bind:checked={tempsSelected[modeItem][temps]}
              />
              <span class="form-check-label">
                {temps}
              </span>
            </div>
          {/each}
        {/each}
      </div>
    </div>
  </div>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Test de conjugaison</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p> -->
</div>
