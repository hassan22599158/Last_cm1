import { Chessboard, FEN } from './src/Chessboard.js';

const board = new Chessboard(document.getElementById("board"), {
  position: FEN.start,
  assetsUrl: "./assets",
  responsive: true
});
