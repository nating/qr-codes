/*

dot.js

This file exports a function for drawing a dot centre piece for a QRCode

  --Geoff Natin 11/1/18 17:41

*/
import React from 'react';

//Returns an SVG Element for a piece of the 'dot' codeStyle
export function drawDotPiece(x,y,modules,pieceProperties,props){
  var length = modules.length;
  var width = props.size;
  var height = props.size;
  var xsize = width / (length + 2 * props.padding);
  var ysize = height / (length + 2 * props.padding);
  var px = (x * xsize + props.padding * xsize)+xsize/2;
  var py = (y * ysize + props.padding * ysize)+ysize/2;
  return (<circle key={px+':'+py} cx={px} cy={py} r={xsize/3} fill={props.color} />);
}