<script>
  import CreateProjectButton from "./CreateProjectButton.svelte";
  import InfoBox from "./InfoBox.svelte";
  import Input from "./Input.svelte";
  import { Tab, Tabs, TabList, TabPanel } from "./Tabs";

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
  <h1>Design your project 🎨</h1>
  <Tabs>
    <TabList>
      <Tab>1. Project details</Tab>
      <Tab>2. Funding cycle</Tab>
      <Tab>3. Review and deploy</Tab>
    </TabList>
    <div class="row">
      <section>
        <TabPanel>
          <InfoBox
            info="You can edit your project details later on at any time."
          />
          <Input label="Project name" placeholder="Peach's Juicebox Stand" required />
        </TabPanel>
      </section>
      <section />
    </div>
  </Tabs>
</div>

<style>
  #create {
    padding: 20px 80px 80px;
    margin-bottom: 40px;
    background: var(--background-l0);
  }

  .row {
    display: flex;
    flex-wrap: row wrap;
    margin-top: 40px;
  }

  h1 {
    color: var(--primary-text);
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 40px;
  }

  section:first-of-type {
    flex: 0 0 42%;
    max-width: 42%;
    margin-right: 40px;
  }

  section:last-of-type {
    flex: 0 0 58%;
    max-width: 58%;
    border-left: 1px solid rgba(0, 0, 0, 0.094);
  }
</style>
