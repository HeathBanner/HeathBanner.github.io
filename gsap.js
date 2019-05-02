// import TweenMax from "/node_modules/gsap/TweenMax"

TweenMax.from("#intro", 2, {css:{x:200, opacity:0}});
TweenMax.from("nav", 2, {css:{x:-200, opacity:0}})
TweenMax.from(".header2", 2, {css:{x:200, opacity:0}});
TweenMax.from(".header2", 3, {css:{borderColor: 'none'}, delay: 2})
TweenMax.from("#heathMirror", 2, {css:{x:-200, opacity:0}});
TweenMax.staggerFrom('.sideNav', 1, {opacity:0, x:200, delay: 0.5}, 0.5)
