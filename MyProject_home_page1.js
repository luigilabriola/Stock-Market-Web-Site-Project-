let currentIndex = 5;
const images = [
  "./january.jpg",
  "./february.jpg",
  "./march.jpg",
  "./april.jpg",
  "./may.jpg",
  "./june.jpg",
  "./july.jpg",
  "./august.jpg",
  "./september.jpg",
  "./october.jpg",
  "./november.jpg",
  "./december.jpg"
];
window.onload=function(){
    document.getElementById("imgMonth").src = images[currentIndex];
}
function forward() {
    currentIndex = currentIndex + 1;
    document.getElementById("imgMonth").src = images[currentIndex];
    document.getElementById("btnBackward").disabled=false;
    if (currentIndex == images.length -1) {
        document.getElementById("btnForward").disabled=true;
    }
}
function backward() {
    currentIndex = currentIndex - 1;
    document.getElementById("imgMonth").src = images[currentIndex];
    document.getElementById("btnForward").disabled=false;
    if (currentIndex == 0) {
        document.getElementById("btnBackward").disabled=true;
    }
}
