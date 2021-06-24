var mouse_event="";
 canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="";
var radius="";
var circumference_width="";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="mouseDown";
    color=document.getElementById("colour").value;
    circumference_width=document.getElementById("width_of_circumference").value;
    radius=document.getElementById("radius").value;
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_x_position=e.clientX-canvas.offsetLeft;
    var current_y_position=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouseDown"){
        console.log("Current coordinates are:");
        console.log("x="+current_x_position);
        console.log("y="+current_y_position);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.line_width=circumference_width;
        ctx.arc(current_x_position,current_y_position,radius,0,2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
   mouse_event="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
   mouse_event="mouseleave";
}
function clearArea() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}