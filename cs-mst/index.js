const minimunSpanningTree = require('./mst');

let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
let edges = ['AB', 'AC', 'AD', 'BD', 'BE', 'CD', 'CG', 'DF', 'EF', 'EG', 'FG']
let size = [16, 22, 25, 14, 26, 9, 35, 24, 15, 28, 8]
// let vertices = ['A', 'B', 'C', 'D', 'E', 'F']
// let edges = ['ED', 'AB', 'AE', 'CD', 'BC', 'EF', 'CF', 'AF', 'BF', 'CF']
// let size = [2, 3, 4, 4, 5, 5, 6, 7, 8, 8]
// let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
// let edges = ['AC', 'CE', 'EG', 'AB', 'CD', 'EF', 'AD', 'DF', 'BF']
// let size = [1, 2, 9, 5, 3, 7, 4, 8, 6]
let hasil = new minimunSpanningTree(vertices,edges,size);
hasil.choose()