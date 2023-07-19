import interact from 'https://cdn.interactjs.io/v1.9.20/interactjs/index.js'


var element = document.getElementById('draggable'),
x = 0, y = 0;
interact(element)
  .draggable({
    snap: {
      targets: [
        interact.createSnapGrid({ x: 50, y: 50 })
      ]
    },
    inertia: false,
    restrict: {
      restriction: element.parentNode,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      endOnly: true
    }
  }).on('dragmove', function (event) {
    x += event.dx;
    y += event.dy;
    event.target.style.webkitTransform = 'translate(' + x + 'px, ' - y + 'px)';
    event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'; 
  });


// const position = { x: 0, y: 0 };


// var gridTarget = interact.snappers.grid({
//   // can be a pair of x and y, left and top,
//   // right and bottom, or width, and height
//   x: 50,
//   y: 50,

//   // optional
//   range: 10,

//   // optional
//   offset: { x: 5, y: 10 },

//   // optional
//   limits: {
//     top: 0,
//     left: 0,
//     bottom: 500,
//     height: 500
//   }
// })

// interact('.grid').draggable({
//   modifiers: [
//     interact.modifiers.snap({ targets: [gridTarget] })
//   ]
// })
// interact('.draggable').draggable({
//   listeners: {
//     start (event) {
//       console.log(event.type, event.target)
//     },
//     move (event) {
//       position.x += event.dx
//       position.y += event.dy

//       event.target.style.transform =
//         `translate(${position.x}px, ${position.y}px)`
//     },
//   }
// })