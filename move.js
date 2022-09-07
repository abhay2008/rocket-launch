AFRAME.registerComponent('move', {
  schema: {
    movey: {
      type: 'number', default: 1
    }
  },
  tick: function() {
    let pos = this.el.getAttribute('position')
    this.data.movey += 0.01
    pos.y = this.data.movey
    this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
  }
})