<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Adelaide, South Australia 5268, Australia",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "imdanishsaber@gmail.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "+61 408 850 447",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <!-- <ContactForm /> -->

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
