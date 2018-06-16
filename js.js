u(window).on("load",function (){
var slideshows = u(".slideshow");
UltraLang.forAll(slideshows.content,function (slideshow,s,c){
var controls = slideshow.getAttribute("data-slideshow-controls");
for(var i = 0;i < slideshow.children.length;i++){
slideshow.children[i].setAttribute("data-slideshow-id",c)
};
if(controls === "_auto"){
var speed = slideshow.getAttribute("data-slideshow-speed");
setInterval(function (){
UltraLang.css.slideshow(c,"next");
},speed * 1000)
}else{
controls = document.getElementById(controls);
for(var i = 0;i < controls.children.length;i++){
controls.children[i].addEventListener("click",function (e){
if(e.target.getAttribute("data-slideshow-control") === "previous"){
UltraLang.css.slideshow(c,"previous");
}else{
if(e.target.getAttribute("data-slideshow-control") === "next"){
UltraLang.css.slideshow(c,"next");
}else{
UltraLang.css.slideshow(c,e.target.getAttribute("data-slideshow-control"));
};
};
})
};
};
});

});
UltraLang.css = {};
UltraLang.css.slideshow = function (c,a){
var slides = [];
var activeSlide = -1;
for(var i = 0;i < document.getElementsByClassName("slide").length;i++){
if(document.getElementsByClassName("slide")[i].getAttribute("data-slideshow-id") === c.toString()){
if(document.getElementsByClassName("slide")[i].classList.contains("active")){
activeSlide = i;
};
if(a){document.getElementsByClassName("slide")[i].classList.remove("active")};
slides.push(document.getElementsByClassName("slide")[i]);
};
};
if(a === "next"){if(activeSlide === -1 || !slides[activeSlide+1]){activeSlide = 0;}else{activeSlide++};slides[activeSlide].classList.add("active")};
if(a === "previous"){if(activeSlide === -1 || !slides[activeSlide-1]){activeSlide = (slides.length-1);}else{activeSlide--};slides[activeSlide].classList.add("active")};
if(slides[parseFloat(a)]){slides[parseFloat(a)].classList.add("active")};
return [slides,activeSlide];
}