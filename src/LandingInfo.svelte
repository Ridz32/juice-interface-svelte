<script>
  const list = [
    "Indie artists, devs, creators",
    "Ethereum protocols and DAOs",
    "Public goods and services",
    "Open source businesses",
  ];
</script>

<section>
  <article>
    <h1>Community funding for people and projects!</h1>
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
    <p>Built for:</p>
    <!-- For each item in list -->
    {#each list as item}
      <div class="item">
        <img src="./bolt.png" alt="⚡️" />
        <p>{item}</p>
      </div>
    {/each}
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
  #banny {
    min-height: 300px;
    /* max-width: 100%; */
    object-fit: contain;
    display: block;
    flex: 0 0 46%;
    max-width: 46%;
  }

  .item {
    display: flex;
    align-items: center;
    margin: 0px 20px;
  }

  .item img {
    height: 24px;
    margin-right: 1em;
  }

  .item p {
    font-style: italic;
    font-weight: 600;
    margin: 0.2em;
  }
</style>
