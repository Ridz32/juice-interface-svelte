<script>
  import { Link } from "svelte-navigator";

  const list = [
    "Indie artists, devs, creators",
    "Ethereum protocols and DAOs",
    "Public goods and services",
    "Open source businesses",
  ];
</script>

<section>
  <article>
    <h1>Community funding for people and projects</h1>
    <p>
      Build a community around a project, fund it, and program its spending.
      Light enough for a group of friends, powerful enough for a global network
      of anons.
    </p>
    <p>
      Powered by public smart contracts on <a
        href="https://ethereum.org/en/what-is-ethereum/">Ethereum.</a
      >
    </p>
    <br />
    <p class="sub-header">Built for:</p>
    {#each list as item}
      <div class="item">
        <img src="./bolt.png" alt="⚡️" />
        <p>{item}</p>
      </div>
    {/each}
    <Link to="/create">
      <button>Design your project</button>
    </Link>
  </article>
  <img id="banny" src="./banny.png" alt="Banny partying with code" />
</section>

<style>
  h1 {
    color: var(--text-header);
    font-size: 2.4rem;
    line-height: 1.2;
    font-weight: 800;
  }

  section {
    max-width: 1080px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
  }

  article {
    flex: 0 0 54%;
    max-width: 54%;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    border-bottom: 1px solid rgb(24, 180, 199);
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.57;
  }

  button {
    margin-top: 2rem;
    background: var(--background-action-primary);
    border-color: transparent;
    box-shadow: 0 6px 10px rgb(0 0 0 / 8%);
    border-radius: var(--radius-sm);
    color: var(--text-over-action-primary);
    font-weight: 500;
    height: 40px;
    padding: 6.4px 15px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0 8px 12px rgb(0 0 0 / 12%);
  }

  #banny {
    min-height: 300px;
    /* max-width: 100%; */
    object-fit: contain;
    display: block;
    flex: 0 0 46%;
    max-width: 46%;
  }

  .sub-header {
    color: var(--text-header);
    font-size: 14px;
  }

  .item {
    display: flex;
    align-items: center;
    margin: 0px 10px;
  }

  .item img {
    height: 24px;
    margin-right: 1em;
  }

  .item p {
    font-style: italic;
    font-weight: 600;
    font-size: 14px;
    margin: 0.2em;
  }
</style>
