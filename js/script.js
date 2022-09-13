const app = new Vue({
  el: "#pippo",
  data: {
    start_message: "hello World",
    img: [
      "img/001.jpg",
      "img/002.jpg",
      "img/003.jpg",
      "img/004.jpg",
      "img/005.jpg",
    ],
    index_img: 0,
  },
  methods: {
    next_img: function () {
      this.index_img++;
    },
    previous_img: function () {
      this.index_img--;
    },
  },
});
