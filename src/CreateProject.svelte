<script>
  import CreateProjectButton from "./CreateProjectButton.svelte";

  const items = [
    {
      title: "Project details",
      description: "Project name, handle, links, and other details.",
    },
    {
      title: "Funding cycle",
      description: "Your project's funding cycle target and duration.",
    },
    {
      title: "Funding distribution",
      description: "How your project will distribute funds.",
    },
    {
      title: "Reserved tokens",
      description: "Reward specific community members with tokens.",
    },
    {
      title: "Incentives",
      description: "Adjust incentives for paying your project.",
    },
    {
      title: "Restricted actions",
      description: "Restrict payments and printing tokens",
    },
  ];
</script>

<div id="create">
  <div class="row">
    <section>
      <h1>Design your project 🎨</h1>
      {#each items as item, index}
        <CreateProjectButton
          title={item.title}
          description={item.description}
          number={index + 1}
        />
      {/each}
    </section>
    <section />
  </div>
</div>

<style>
  #create {
    padding: 20px 40px 40px;
    margin-top: 150px;
    margin-bottom: 40px;
    background: var(--background-l0);
  }

  .row {
    display: flex;
    flex-wrap: row wrap;
    margin-top: 40px;
  }

  h1 {
    font-size: 1.17em;
    font-weight: 400;
  }

  section {
    display: block;
    padding-left: 40px;
    padding-right: 40px;
  }

  section:first-of-type {
    flex: 0 0 42%;
    max-width: 42%;
  }

  section:last-of-type {
    flex: 0 0 58%;
    max-width: 58%;
    border-left: 1px solid rgba(0, 0, 0, 0.094);
  }
</style>
