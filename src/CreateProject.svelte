<script lang="ts">
  import InfoBox from "./InfoBox.svelte";
  import Input from "./Input.svelte";
  import { Tab, Tabs, TabList, TabPanel } from "./Tabs";
  import UploadField from "./UploadField.svelte";

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
            <Input {field} />
          {/each}
          <UploadField />
        </TabPanel>
      </section>
      <section>
        <h1>Preview:</h1>
        <div class="info">
          <div class="logo">🧃</div>
          <div class="info-text">
            <h1>Untitled Project</h1>
            <div class="social-list">
              <p>Dog</p>
              <p>
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="twitter"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  ><path
                    d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"
                  /></svg
                > @dog
              </p>
              <p>discord</p>
            </div>
            <p>Description blabla...</p>
          </div>
        </div>
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

  section:last-of-type h1 {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.333);
    margin-bottom: 0px;
  }

  .description {
    color: rgba(0, 0, 0, 0.6);
    overflow-wrap: break-word;
    padding-right: 0.5rem;
  }

  .info {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.333);
  }
  .logo {
    background-color: rgb(231, 227, 220);
    height: 150px;
    width: 150px;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-text {
    padding: 0px 20px;
  }
  .info .info-text h1 {
    font-size: 36px;
    font-weight: 500;
    margin: 0;
  }

  .social-list {
    display: flex;
  }

  .social-list p {
    margin-right: 20px;
    color: var(--text-over-action-secondary);
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
