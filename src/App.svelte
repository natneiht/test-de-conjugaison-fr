<script>
  import { each } from "svelte/internal";

  import HomeIcon from "./assets/home.svg";
  import StartPage from "./components/StartPage.svelte";
  import TestPage from "./components/TestPage.svelte";
  import ResultPage from "./components/ResultPage.svelte";
  import { Router, Route } from "svelte-routing";
</script>

<main>
  <div class="header">
    <a href="/"><img src={HomeIcon} class="float: left;" alt="Logo" /> </a>
    <div class="header-center">
      <h4>Test de conjugaison des verbes français</h4>
    </div>
  </div>
  <Router>
    <Route path="/" component={StartPage} />
    <Route path="/test" component={TestPage} />
    <Route path="/result" component={ResultPage} />
  </Router>
  <div class="footer" style="text-align: center;">
    <hr />
    Par Huynh Thien Tan - 2022
  </div>
</main>
