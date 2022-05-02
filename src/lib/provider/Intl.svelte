<script>
    import { setContext } from "svelte";
    import { writable } from 'svelte/store'
    import lingui from "@lingui/core";
    export let config;
    const store = writable()
    $: {
      let i18n = lingui.setupI18n(config);
      store.set(i18n)
    }
    setContext("i18n", { subscribe: store.subscribe });
  </script>

  <!-- Inspiration taken by: https://github.com/hyperlab/svelte-lingui -->
  
  <!-- TODO svelte complains that the component "is not a valid SSR component"
    regardless of adapter.

    When resolved, use intl;

    <Intl config={{
        locale: "en",
        catalogs: {
            en: {
            messages: {
                "Hello world": "Hello world"
            }
            },
            es: {
            messages: {
                "Hello world": "Hola mundo",
                "Hello {name}": "Hola {name}"
            }
            }
        }
        }}>
        <Trans> </Trans>
        or
        <Trans message="" props={} />
    </Intl>
  -->

  <slot />