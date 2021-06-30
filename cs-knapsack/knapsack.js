class KnapSack {
    constructor(weight,price,capacity) {
        this.weight = weight
        this.price = price
        this.capacity = capacity
    }

    sortByWeight(){
        let weight = this.weight
        let price = this.price
        let temp1, temp2
        for (let i = 1; i < weight.length; i++) {
            let j = i
            temp1 = weight[i]
            temp2 = price[i]
            while (j > 0 && temp1 < weight[j - 1]) {
                weight[j] = weight[j - 1]
                price[j] = price[j - 1]
                j--
            }
            weight[j] = temp1
            price[j] = temp2
        }
        return {
            weight,
            price
        }
    }

    max(jum, comb){
        let temp1, temp2
        for (let i = 1; i < jum.length; i++) {
            let j = i
            temp1 = jum[i]
            temp2 = comb[i]
            while (j > 0 && temp1 < jum[j - 1]) {
                jum[j] = jum[j - 1]
                comb[j] = comb[j - 1]
                j--
            }
            jum[j] = temp1
            comb[j] = temp2
        }
        // console.log(jum)
        // console.log(comb)
        return `laptop yang dapat dibawa : ${comb[comb.length-1].split('')} (kg) \njumlah harga : Rp. ${jum[jum.length-1]}`
        
        //or
        // let m = jum.reduce((a,b,i) => a[0] < b ? [b,i] : a, [Number.MIN_VALUE,-1])
        // let ind = m[1]
        // return `laptop yang dapat dibawa : ${comb[ind].split('')} (kg) \njumlah harga : ${m[0]}`
    }

    knapSack() {
        let weight = this.sortByWeight().weight
        let price = this.sortByWeight().price
        let capacity = this.capacity

        let comb = []
        let jum = []
        let f = (s, weight, sp, price, count) => {
            for(let i=0; i<weight.length; i++){

                if(s  + weight[i] <= capacity){
                    comb.push(`${sp}${weight[i]}`)
                    jum.push(`${count  + price[i]}`)
                }
                f(s + weight[i], weight.slice(i+1), sp + weight[i], price.slice(i+1), count + price[i])

            }
        }
        f(0, weight, '', price, 0)
        console.log(this.max(jum, comb))
    }

    choose() {
        this.knapSack()
    }
}

module.exports = KnapSack;