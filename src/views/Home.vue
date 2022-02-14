<template>
  <div class="home">
    <SchoolSelector msg="Hitta och Jämför"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter} from 'vue-router'
import SchoolSelector from '@/components/SchoolSelector.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SchoolSelector,
  },
  setup() {

    const router = useRouter();
    const selectedSchools = ref('gymnaseskolor');

    // onMounted(() => {
    //   router.push(`/${selectedSchools.value}/hitta-och-jamfor`)
    // })
  }
});
</script>
