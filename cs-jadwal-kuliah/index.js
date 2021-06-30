const jadwal = require('./jadwal');

let nama = ['Bahasa Indonesia', 'Kewarganegaraan', 'Fisika', 'Matematika I', 'Struktur Data', 'Agama','English I'];
let mulai = [7,7,9,9,10,12,11]
let selesai = [9,8,12,10,12,13,12]
let choosing = new jadwal(nama,mulai,selesai);
choosing.choose()