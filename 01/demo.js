window.onload = function() {

  // create and initialize a 3D renderer
  var r = new X.renderer3D();
  r.init();
  
  // create a cube
  cube = new X.cube();
  // skin it..
  cube.texture.file = 'http://lessons.goxtk.com/data/xtk.png';
  
  r.add(cube); // add the cube to the renderer
  r.render(); // ..and render it
  
  // add some animation (could also be realized using requestAnimationFrame)
  setInterval(function() {

    // rotation by 1 degree in X and Y directions
    cube.transform.rotateX(1);
    cube.transform.rotateY(1);
    // .. and re-render
    r.render();
    
  }, 16.7); // best value to get the 60 FPS
  
};