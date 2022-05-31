<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      projectDomain: "danishsaber.com",
      projectName: "Web3 & Dapps Developer",
      author: "Danish",
    };
  },
  computed: {
    ...mapState(["copyrightDate"]),
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ copyrightDate }}
      <a
        href="https://github.com/imdanishsaber/"
        target="__blank"
        class="
          font-general-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ projectDomain }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
