<template>
    <div>
        Htta Och Jamfor
    </div>
    <div>
        {{selectedSchoold}}
    </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'HittaOchJamfor',
  components: {  },
  setup() {
    const route = useRoute();
    const selectedSchoold = ref(route.params.dynamik)

    return {
        selectedSchoold: selectedSchoold.value
    }
  }
});
</script>
