var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Dani",
      showExtraInformation: false,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoa...";
    },
  },
});
