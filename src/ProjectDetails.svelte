<script lang="ts">
  import * as state from "./stores";
  import InfoBox from "./InfoBox.svelte";
  import Input from "./Input.svelte";
  import UploadField from "./UploadField.svelte";

  const onChange = (id: string) => (e: Event) => {
    const target = e.target as HTMLInputElement;
    state[id].set(target.value);
  };

  function onLogoChange(src: string) {
    state.logo.set(src);
  }

  const formFields = [
    {
      id: "name",
      label: "Project name",
      placeholder: "Peach's Juicebox Stand",
      props: {
        required: true,
      },
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

<InfoBox info="You can edit your project details later on at any time." />
{#each formFields as field}
  <Input {field} {onChange} />
{/each}
<UploadField onChange={onLogoChange} />
