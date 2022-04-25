<script>
    export let description;
    export let number;
    export let title;
</script>

<div role="button">
  <div class="number">{number}</div>
  <div class="details">
    <div class="title">{title}</div>
    <div class="description">
      {description}
    </div>
  </div>
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"
    />
  </svg>
</div>

<style>
  svg {
    align-self: center;
    margin-left: auto;
    fill: rgb(24, 180, 199);
    width: 15px;
    height: 15px;
  }

  .number {
    margin-right: 15px;
  }

  .description {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 0.75rem;
  }

  div[role="button"] {
    display: flex;
    cursor: pointer;
    padding: 15px;
    border-radius: 1px;
    font-weight: 600;
    color: rgb(24, 180, 199);
    border-color: rgb(24, 180, 199);
    border-style: solid;
    border-width: 1px;
    margin-bottom: 16px;
  }
</style>
