<script lang="ts">
  import InfoBox from "./InfoBox.svelte";
  import Input from "./Input.svelte";
  import { Tab, Tabs, TabList, TabPanel } from "./Tabs";
  import UploadField from "./UploadField.svelte";
  import * as state from "./stores";
  import Preview from "./Preview.svelte";

  const onChange = (id: string) => (e: Event) => {
    const target = e.target as HTMLInputElement;
    state[id].set(target.value);
  };

  const formFields = [
    {
      id: "name",
      label: "Project name",
      required: true,
      placeholder: "Peach's Juicebox Stand",
    },
    {
      id: "description",
      label: "Project description",
      placeholder: "1000 characters max",
      type: "textarea",
      props: {
        maxlength: 10000,
      },
    },
    {
      id: "website",
      label: "Website",
      placeholder: "https://your-project.com",
      description: "Your project's website",
      props: {
        type: "url",
      },
    },
    {
      id: "twitter",
      label: "Twitter",
      prefix: "@",
      placeholder: "your-project",
      description: "Your project's Twitter handle",
    },
    {
      id: "discord",
      label: "Discord",
      placeholder: "https://discord.gg/abcdefgh",
      description: "An invite link to your project's Discord server",
      props: {
        type: "url",
      },
    },
    {
      id: "payButtonText",
      label: "Pay button text",
      placeholder: "Pay",
      description:
        'Text displayed on your project\'s "pay" button. Leave this blank to use the default.',
    },
    {
      id: "payDisclosure",
      label: "Pay disclosure",
      placeholder: "Payment disclosure",
      description:
        "This text will be displayed to your supporters before they complete their payment.",
      type: "textarea",
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
          {#each formFields as field}
            <Input {field} {onChange} />
          {/each}
          <UploadField />
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
