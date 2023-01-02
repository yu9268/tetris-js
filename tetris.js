'use strict';

//フィールドサイズ
const FIELD_COL = 10;
const FIELD_ROW = 20;


//ブロック一つのサイズ
const BLOCK_SIZE = 30;

//キャンバスサイズ
const SCREEN_W = BLOCK_SIZE * FIELD_COL;
const SCREEN_H = BLOCK_SIZE * FIELD_ROW;

//テトリミノのサイズ
const TETRI_SIZE = 4;

let can = document.getElementById("can");
let con = can.getContext("2d");

can.width  = SCREEN_W;
can.height = SCREEN_H;

let tetri = [
  [ 0, 0, 0, 0 ],
  [ 1, 1, 0, 0 ],
  [ 0, 1, 1, 0 ],
  [ 0, 0, 0, 0 ],
];

//テトリミノの座標
let tetri_x = 0;
let tetri_y = 0;

//フィールド本体
let field = [];
function init() {
  for (let y = 0; y < FIELD_ROW; y++) {
    field[y] = [];
    for (let x = 0; x < FIELD_COL; x++) {
      field[y][x] = 0;
    }
  }
  
  //テスト
  // field[19][9] = 1;
  // field[19][0] = 1;
}
init();
drawAll();

//ブロック一つを描画
function drawBlock(x, y) {
  let px = x * BLOCK_SIZE;
  let py = y * BLOCK_SIZE;
  
  con.fillStyle="red";
  con.fillRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
  con.strokeStyle="";
  con.strokeRect(px, py, BLOCK_SIZE, BLOCK_SIZE);
}
function drawAll(){

  //フィールドを表示
  con.clearRect(0, 0, SCREEN_W, SCREEN_H);
  for(let y = 0; y < FIELD_ROW; y++){
    for(let x = 0; x < FIELD_COL; x++){
      if ( field[y][x] ){
        drawBlock(x, y);
      }
    }
  }
  
  //テトリミノの表示
  for(let y = 0; y < TETRI_SIZE; y++){
    for(let x = 0; x < TETRI_SIZE; x++){
      if ( tetri[y][x] ){
        drawBlock(tetri_x + x, tetri_y + y);
      }
    }
  }
  
}

document.onkeydown = function(e) {
  // onkeydown keycode 

  switch( e.code ){
    case 'ArrowLeft':
      tetri_x--;
      console.log(e.key);
      break;
    case 'ArrowUp':
      tetri_y--;
      break;
      case 'ArrowRight':
      tetri_x++;
      break;
    case 'ArrowDown':
      tetri_y++;
      break;
    case 'Space':
      break;
  }
  drawAll();
}