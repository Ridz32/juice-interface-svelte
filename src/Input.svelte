<script lang="ts">
  export let field: FormField;

  // TODO: Why can't I export this type?
  // enum InputType {
  //   Input = "input",
  //   TextArea = "textarea",
  // }

  interface FormField {
    id: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    description?: string;
    prefix?: string;
    // type?: InputType;
    type?: string;
  }
</script>

<label for="name">
  {#if field.required}<small>*</small>{/if}
  {field.label}
</label>
{#if field.type === "input" || !field.type}
  <input id="name" type="text" placeholder={field.placeholder} />
{:else if field.type === "textarea"}
  <textarea id="name" placeholder={field.placeholder} />
{/if}
{#if field.description}
  <p class="description">{field.description}</p>
{/if}

<style>
  label {
    display: block;
    margin: 20px 0px 10px;
  }
  small {
    font-size: 8px;
    color: red;
    vertical-align: text-top;
  }
  input,
  textarea {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
    list-style: none;
    -webkit-font-feature-settings: "tnum", "tnum";
    font-feature-settings: "tnum", "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: transparent;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
  }

  .description {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    margin-top: 0;
  }
</style>
