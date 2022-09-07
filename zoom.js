AFRAME.registerComponent('zoom', {
  schema: {
    movez: {
      type: 'number', default: 10
    },
    movey: {
      type: 'number', default: 1
    }
  },
  tick: function() {
    let pos = this.el.getAttribute('position')
    this.data.movez += 0.01
    this.data.movey += 0.01
    pos.z = this.data.movez
    pos.y = this.data.movey
    this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
  }
})