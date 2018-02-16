// Psuedo code for Russle Pathing
// Create an output list of all paths, using multi length arrays and recursive
//    functions for one quadrant.  The remaining quadrants will be mirrored.

"use strict";

// startignTile arrays for one quadrant assuming 4x4 grid
var startingTiles = new Array();
startingTiles[0] = new Array (1,2); // X Values
startingTiles[1] = new Array (1,2); // Y values


var discoveredPath = new Array();   // path retruned by the pathing function
var pathsList = new Array();        // list of all discovered paths




function whoAreMyNeighbors ( startingTile ){
    // pass in the starting tile, return an array with
    var neighborList = new Array(); // list of neighboring tiles
    

    return neighborlist;
}
