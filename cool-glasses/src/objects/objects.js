class Compras {
    constructor () {
        this.objs = [];
    };
    saveJson () {
        fs.writeFileSync('./compras.json', JSON.stringify(this.objs));
    };
    getObjs () {
        fetch('http://localhost:3000/compras')
            .then(res => res.json())
            .then(data => {
                this.objs = data;
                return data;
            })
            .catch(err => console.log(err.message));
        
        return this.objs; 
    };
    pushObjs ( newItem ) {
        fetch('http://localhost:3000/compras')
            .then(res => res.json())
            .then(data => {
                this.objs = data;
                this.objs.push(newItem);
                this.saveJson();
            })
            .catch(err => console.log(err.message))
    }
}

// let compras = Compras();
export var compras = new Compras();
    // {idxProduto: 1, qtd:3},
    // {idxProduto: 4, qtd:1}


export var estoque = [
    {idxProduto: '1', qtdEstoque: 4, vendidos: 1},
    {idxProduto: '2', qtdEstoque: 3, vendidos: 14},
    {idxProduto: '3', qtdEstoque: 9, vendidos: 2},
    {idxProduto: '4', qtdEstoque: 20, vendidos: 13},
    {idxProduto: '5', qtdEstoque: 2, vendidos: 5},
]
