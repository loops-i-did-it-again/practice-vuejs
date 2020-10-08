var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      num1: null,
      num2: null,
      num3: null,
      result: null,
    };
  },
  methods: {
    computeSum: function () {
      this.result =
        parseInt(this.num1) + parseInt(this.num2) + parseInt(this.num3);
    },
  },
});
