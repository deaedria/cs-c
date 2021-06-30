class MinSpanningT {
    constructor(vertices, edges, size) {
        this.vertices = vertices
        this.edges = edges
        this.size = size
    }

    sort() {
        let edges = this.edges
        let size = this.size
        let temp1, temp2
        for (let i = 1; i < size.length; i++) {
            let j = i
            temp1 = size[i]
            temp2 = edges[i]
            while (j > 0 && temp1 < size[j - 1]) {
                size[j] = size[j - 1]
                edges[j] = edges[j - 1]
                j--
            }
            size[j] = temp1
            edges[j] = temp2
        }
        return {
            size,
            edges
        }
    }

    minimunSpanningTree() {
        let edges = this.sort().edges
        let size = this.sort().size
        let vertices = this.vertices

        let list = [[edges[0], size[0]]]
        let list1 = []
        let l = 1

        for (let k = 0; k <= list.length - 1; k++) {
            for (let j = list.length; j <= size.length - 1; j++) {
                if (l < vertices.length - 1) {
                    // for (let k = 0; k <= list.length - 1; k++)
                        
                        if (edges[j][0] == list[k][0].charAt(0) || edges[j][0] == list[k][0].charAt(1) ||
                            edges[j][1] == list[k][0].charAt(1) || edges[j][1] == list[k][0].charAt(0)) {
                            // list1.push(list[k])
                            list1.push([edges[j],size[j]])
                        }
                        
                    // }

                    if (list1.length == 0 || list1.length == 1) {
                        list.push([edges[j], size[j]])
                        j = size.length
                        l++
                        // list1 = []
                    } else {
                        list1 = []
                    }                 
                }
            }
        }
        console.log(list)
    }

    choose() {
        this.minimunSpanningTree()
    }
}

module.exports = MinSpanningT;