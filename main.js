const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World",
      image: "img/dog.jpg",
    };
  },
}).mount("#app");
