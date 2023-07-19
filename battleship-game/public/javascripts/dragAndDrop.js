const interact = require('interactjs');

const position = { x: 0, y: 0 }


exports.doDrag = function(name){
    interact(name).draggable({
        listeners: {
          start (event) {
            console.log(event.type, event.target)
          },
          move (event) {
            position.x += event.dx
            position.y += event.dy
      
            event.target.style.transform =
              `translate(${position.x}px, ${position.y}px)`
          },
        }
      })
}
interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})