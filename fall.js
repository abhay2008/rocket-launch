AFRAME.registerComponent('fall', {
  schema: {
    movey: {
      type: 'number', default: 0
    }
  },
  tick: function() {
    window.addEventListener('click', (e) => {
      this.data.movey -= 0.00001
    })
    let pos = this.el.getAttribute('position')
    pos.y += this.data.movey
    this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
  }
})