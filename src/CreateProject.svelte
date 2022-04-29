<script lang="ts">

  import { Tab, Tabs, TabList, TabPanel } from "./Tabs";
  import Preview from "./Preview.svelte";
import ProjectDetails from "./ProjectDetails.svelte";
import FundingCycle from "./FundingCycle.svelte";


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
          <ProjectDetails />
        </TabPanel>
        <TabPanel>
          <FundingCycle />
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
    padding-left: 40px;
    border-left: 1px solid rgba(0, 0, 0, 0.094);
  }

  @media (max-width: 850px) {
    section:first-of-type,
    section:last-of-type {
      flex: 0 0 100%;
      max-width: 100%;
      margin-right: 0;
    }
  }
</style>
