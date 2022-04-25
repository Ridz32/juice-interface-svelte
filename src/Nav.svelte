<script>
    import Wallet from './Wallet.svelte';
    import DarkmodeToggle from './DarkmodeToggle.svelte';
</script>

<nav>
  <ul>
    <li><img src="./juice_logo-ol.png" alt="Juicebox logo" /></li>
    <li><a href="/">Projects</a></li>
    <li><a href="/">FAQ</a></li>
    <li><a href="/">Discord</a></li>
    <li><a href="/">Resources </a></li>
  </ul>

  <ul>
      <li><DarkmodeToggle /></li>
      <li><Wallet /></li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 50px;
  }

  img {
    max-height: 45px;
  }

  ul {
    display: flex;
    align-items: center;
    padding-inline-start: 0px;
  }

  li {
    list-style-type: none;
    margin: 0 10px;
  }

  a {
    color: var(--text-color);
    font-weight: 600;
    font-size: 14px;
  }
</style>
