export default {
  data: () => ({
    countIndex: -1,
    confimIndex: -1,
    clientX: 0
  }),
  methods: {
    touchStart (e) {
      this.clientX = e.clientX
    },
    touchMove (e) {
      let moveX = e.clientX
      let x = moveX - this.clientX
      let _index = e.target.dataset.index
      console.log(x)
      // left
      if (x <= -40) {
        this.countIndex = _index
        this.confimIndex = -1
      }
      // right
      if (x > 40) {
        this.confimIndex = -1
        this.countIndex = -1
      }
    },
    deleteConfim (e) {
      let _index = e.target.dataset.index
      this.confimIndex = _index
    }
  }
}
