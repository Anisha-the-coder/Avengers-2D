var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";
var block_image = "";

function player_update(){
    fabric.Image.fromURL("Captain America.jpg", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
    })
}
