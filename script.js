// const scene = document.getElementById('mountains')
// const layers = scene.children

// const depth = [0.2, 0.4, 0.6 ,0.6, 0.8, 1 ] // глубина движения

// let windowWidht = null
// let windowHeight = null
// let windowCenterX = null
// let windowCenterY = null

// function startAnimation(){
//     scene.addEventListener('mousemove', onMouseMove)
// }

// function onMouseMove(event){
//     console.log("move");
//     const clientX = event.clientX
//     const clientY = event.clientY

//     if(windowCenterX && windowCenterY){
//       //действия
//     }

//     if(windowCenterX !=0  && windowCenterY!=0){
//         //действия
//       }
// }

// startAnimation()

function ege(x){
  let a = 0
  let b = 0
  while(x > 0){
    let y = x%10
    if(y>3) a++
    if(y<8) b++
    x = x/10
  }
  console.log(a);
  console.log(b))

