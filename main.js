var images = [
"Monkey_01.png",
"Monkey_02.png",
"Monkey_03.png",
"Monkey_04.png",
"Monkey_05.png",
"Monkey_06.png",
"Monkey_07.png",
"Monkey_08.png",
"Monkey_09.png",
"Monkey_10.png"
];

var i=0;
function nextslide(){
    if(i==9){
        i=0;
    }
    document.getElementById("album").src= images[i];
    i++;
}