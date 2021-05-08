let colorIndex = 0;
let colorIndexSelector = 0;
document.addEventListener("mouseenter", event=>{
  document.getElementById("instructions").style.opacity = "0";
  let colorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"].reverse();
  let coordY = event.clientY + "px";
  let coordX = event.clientX + "px";
  document.addEventListener("mousemove", event=>{
    coordY = event.clientY + "px";
    coordX = event.clientX + "px";
  });
  let createThing = setInterval(()=>{
    let circles = [];
    for(let x = 0; x < 6; x++) {
      circles.push(document.createElement("div"));
    }
    for(let x = 0; x < circles.length; x++) {
      if (x === 0) {
        document.body.append(circles[x]);
        circles[x].style.top = coordY;
        circles[x].style.left = coordX;
      }
      circles[x].classList.add(`circleInner${x+1}`);
      circles[x].style.borderColor = colorArray[colorIndex];
      if (x !== circles.length-1) {
        circles[x].append(circles[x+1]);
      }
    } 
    colorIndexSelector++;
    if (colorIndexSelector === 5) {
      colorIndexSelector = 0;
      colorIndex++;
    }
    if (colorIndex === colorArray.length) {
      colorIndex = 0;
    }
    setTimeout(()=>{
      document.body.removeChild(circles[0]);
    }, 1000);
  }, 50);
  document.addEventListener("mouseleave", ()=>{
    document.getElementById("instructions").style.opacity = "1";
    clearInterval(createThing);
  });
});

// window.addEventListener("scroll", function() {
// 	show_cursor.reverse();
// });
// 		var work_section = document.querySelector('.work_section');
// 		work_section.addEventListener('mousemove', e => {
// 		gsap.to(".cursor", {
// 			x: e.pageX - 60,
// 			y: e.pageY - 60,
// 			ease: Power4.easeOut
// 		});
// 	});
		
//     // gsap.set(".cursor", {
//     //     autoAlpha: 0,
//     //     scale: 0.8
//     // });
    
    

// let work_button = document.querySelector('.work_button');


// work_button.addEventListener('click', function() {
// 	// event.stopPropagation();
// 	gsap.to(window, {
// 		duration: 0.5,
// 		scrollTo: '.work_section',
// 		ease: Circ.easeOut
// 	});
// });


function scrollToStudio() {
    window.scroll({top: 1050, left: 0, behavior: 'smooth'});
  }

  function scrollToLab() {
    window.scroll({top: 2030, left: 0, behavior: 'smooth'});
  }

  function scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }





