class Jadwal {
    constructor(nama,mulai,selesai) {
        this.nama = nama
        this.mulai = mulai
        this.selesai = selesai
    }

    sort(){
        let mulai = this.mulai
        let selesai = this.selesai
        let nama = this.nama
        let temp1, temp2, temp3
        for (let i = 1; i < selesai.length; i++) {
            let j = i
            temp1 = selesai[i]
            temp2 = mulai[i]
            temp3 = nama[i]
            while (j > 0 && temp1 < selesai[j - 1]) {
                selesai[j] = selesai[j - 1]
                mulai[j] = mulai[j - 1]
                nama[j] = nama[j - 1]
                j--
            }
            selesai[j] = temp1
            mulai[j] = temp2
            nama[j] = temp3
        }
        return {
            selesai,
            mulai,
            nama
        }
    }

    jadwal() {
        let selesai = this.sort().selesai
        let mulai = this.sort().mulai
        let nama = this.sort().nama

        let newArr = [[nama[0],mulai[0],selesai[0]]]
        for(let i=1; i<selesai.length; i++){
            newArr.push([nama[i],mulai[i],selesai[i]])
        }
        // console.log(newArr)
        let selected = []
        let k = 0
        selected.push(newArr[0])
        
        for(let j=1; j<newArr.length; j++){
            if(newArr[j][1] >= newArr[k][2]){
                selected.push(newArr[j])
                k = j
            }
        }
        console.log(selected)
    }

    choose() {
        this.jadwal()
    }
}

module.exports = Jadwal;