<script lang="ts">
  import { Tab, Tabs, TabList, TabPanel } from "./Tabs";
  import Preview from "./Preview.svelte";
  import ProjectDetails from "./ProjectDetails.svelte";
  import FundingCycle from "./FundingCycle.svelte";
  import Button from "./Button.svelte";

  function onClick(tabId: string) {
    document.getElementById(tabId).click();
  }
</script>

<div id="create">
  <h1>Design your project 🎨</h1>
  <Tabs>
    <TabList>
      <Tab id="details">1. Project details</Tab>
      <Tab id="funding">2. Funding cycle</Tab>
      <Tab id="review">3. Review and deploy</Tab>
    </TabList>
    <div class="row">
      <section>
        <TabPanel>
          <ProjectDetails />
          <Button onClick={() => onClick("funding")}>Next: Funding cycle</Button
          >
        </TabPanel>
        <TabPanel>
          <FundingCycle />
          <Button onClick={() => onClick("review")}
            >Next: Review and deploy</Button
          >
        </TabPanel>
      </section>
      <section>
        <Preview />
      </section>
    </div>
  </Tabs>
</div>

<style>
  #create {
    padding: 20px 80px 80px;
    margin: 0 auto;
    margin-bottom: 40px;
    background: var(--background-l0);
    max-width: 1200px;
  }
  
  .row {
    display: flex;
    max-width: 1120px;
    margin-top: 40px;
    gap: 40px;
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
  }

  section:last-of-type {
    flex: 0 0 58%;
    max-width: 58%;
    padding-left: 40px;
    border-left: 1px solid rgba(0, 0, 0, 0.094);
  }

  @media (max-width: 850px) {
    .row {
      flex-flow: row wrap;
    }
    section:first-of-type,
    section:last-of-type {
      flex: 0 0 100%;
      max-width: 100%;
      margin-right: 0;
    }

    section:last-of-type {
      border-left: none;
      padding-left: 0;
    }
  }
</style>
