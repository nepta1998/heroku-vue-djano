<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Api from "../service/api";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    Api.getAll()
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }
};
</script>
