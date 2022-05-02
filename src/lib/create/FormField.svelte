<script lang="ts">
  export let field: FormField;
  // NOTE: don't like this approach of passing around a store state, but can't seem to pass down
  // the specific store key to bind here in the child component
  export let dataStore: any;

  // TODO: Why can't I export this type?
  // enum InputType {
  //   Input = "input",
  //   TextArea = "textarea",
  // }

  interface FormField {
    id: string;
    label: string;
    placeholder?: string;
    description?: string;
    prefix?: string;
    // type?: InputType;
    type?: string;
    props?: {
      required?: boolean;
      maxlength?: number;
    };
  }
</script>

<label for={field.id}>
  {#if field.props?.required}<small>*</small>{/if}
  {field.label}
</label>
<div class="input-container">
  {#if field.prefix} <div class="prefix">{field.prefix}</div> {/if}
  {#if field.type === "input" || !field.type}
    <input
      id={field.id}
      placeholder={field.placeholder}
      bind:value={$dataStore[field.id]}
      {...field.props}
    />
  {:else if field.type === "textarea"}
    <textarea
      id={field.id}
      placeholder={field.placeholder}
      bind:value={$dataStore[field.id]}
      {...field.props}
    />
  {/if}
</div>
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
    flex-grow: 1;
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
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 1.5715;
    background-color: transparent;
    border: none;
    transition: all 0.3s;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
  }

  .prefix {
    width: 15px;
    text-align: center;
  }
  .description {
    font-size: 14px;
    font-weight: 300;
    color: #666;
    margin-top: 0;
  }
</style>
