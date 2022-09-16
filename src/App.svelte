<script>
  import { each } from "svelte/internal";

  import HomeIcon from "./assets/home.svg";
  import MenuIcon from "./assets/menu.svg";
  import StartPage from "./components/StartPage.svelte";
  import TestPage from "./components/TestPage.svelte";
  import ResultPage from "./components/ResultPage.svelte";
  import { Router, Route } from "svelte-routing";

  let showMenu = false;
</script>

<main>
  <!-- <div class="topnav">
    <a href="#home" class="active"><img src={HomeIcon} alt="Logo" /></a>
    <div class="header-center">
      <span>Test de conjugaison des verbes français</span>
    </div>
    <div style={showMenu ? "display: block;" : "display: none;"}>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    <a
      href="javascript:void(0);"
      class="icon"
      on:click={() => (showMenu = !showMenu)}
    >
      <img src={MenuIcon} alt="Menu" />
    </a>
  </div> -->
  <section class="top-nav">
    <div>
      <a href="/" class="active"><img src={HomeIcon} alt="Logo" /></a>
    </div>
    <div class="header-center">
      <span>Test de conjugaison des verbes français</span>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button" />
    </label>
    <ul class="menu">
      <!-- <li><a href="/feedback">Feedback</a></li> -->
      <!-- <li></li> -->
    </ul>
  </section>
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
