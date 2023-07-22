<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(["aboutMe"]),
  },
};
</script>

<template>
  <div>
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <!-- About profile image -->
      <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src="~/static/danish-saber.jpeg" class="rounded-lg w-96" alt="" />
      </div>

      <!-- About details -->
      <div class="w-full sm:w-3/4 text-left">
        <p
          v-for="bio in aboutMe"
          :key="bio.id"
          class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
        >
          {{ bio.bio }}
        </p>
      </div>
    </div>
    <br><br>
    <strong class="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >PROFESSIONAL SKILLS</strong
    >
    <ul
      class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
    >
      <li class="mb-2">
        - Proficient in HTML5, CSS3 (Bootstrap and Tailwind css), JavaScript and
        typescript.
      </li>
      <li class="mb-2">
        - Extensive experience with various frontend frameworks such as
        <b> Vue.js/React.js</b>.
      </li>
      <li class="mb-2">
        - Experience with <b> Vuetify and Quasar</b> UI component libraries, leveraging
        their extensive pre-built components and styling options and enhancing
        the user interface.
      </li>
      <li class="mb-2">
        - Ability to integrate Backend APIs and work with JSON data for dynamic
        content rendering.
      </li>
      <li class="mb-2">
        - Experience in integrating 3rd party libraries and plugins to enhance
        frontend functionality.
      </li>
      <li class="mb-2">
        - Adept at using version control systems like Git for collaborative
        development, enabling seamless code management and teamwork.
      </li>
      <li class="mb-2">
        - Proficient in working with Linux environments, providing flexibility
        and customization.
      </li>
      <li class="mb-2">
        - Familiarity with Webpack for bundling and optimizing frontend assets,
        ensuring performance
      </li>
      <li class="mb-2">
        - Well-versed in Agile methodologies, particularly Scrum, for efficient
        project management and collaboration, like Jira.
      </li>
      <li class="mb-2">
        - Knowledge of Web3 and DApps (Decentralized Applications), enabling the
        development of blockchain-based applications and smart contracts.
      </li>
      <li class="mb-2">
        - Proficient in deploying projects on domains/servers, ensuring smooth
        and reliable delivery of web applications to end-users.
      </li>
    </ul>
  </div>
</template>
