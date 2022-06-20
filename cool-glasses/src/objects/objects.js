import * as fs from 'fs';

class Compras {
    constructor () {
        // this.objs = [];
        localStorage.compras = JSON.stringify([]);
    };
    getObjs () {
        let aux = JSON.parse(localStorage.compras);
        console.log('aux: ', aux);
        return aux;

        // fetch('http://localhost:3000/compras')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.objs = data;
        //         return data;
        //     })
        //     .catch(err => console.log(err.message));
        
        // return this.objs; 
    };
    pushObjs ( newItem ) {
        let aux = JSON.parse(localStorage.compras);
        aux.push(newItem);
        localStorage.compras = JSON.stringify(aux);

        // fetch('http://localhost:3000/compras')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.objs = data;
        //         this.objs.push(newItem);
        //         this.saveJson();
        //     })
        //     .catch(err => console.log(err.message))
    }
}

export var compras = new Compras();
    // {idxProduto: 1, qtd:3},
    // {idxProduto: 4, qtd:1}


// export var estoque = [
//     {idxProduto: '1', qtdEstoque: 4, vendidos: 1},
//     {idxProduto: '2', qtdEstoque: 3, vendidos: 14},
//     {idxProduto: '3', qtdEstoque: 9, vendidos: 2},
//     {idxProduto: '4', qtdEstoque: 20, vendidos: 13},
//     {idxProduto: '5', qtdEstoque: 2, vendidos: 5},
// ]

class Estoque {
    
    constructor () {
        fetch('http://localhost:3000/estoque')
            .then(res => res.json())
            .then(data => {
                this.objs = data;
            })
            .catch(err => console.log(err.message));
    };
    saveJson () {
        fs.writeFileSync('./estoque.json', JSON.stringify(this.objs));
    };
    getObjs () {
        fetch('http://localhost:3000/estoque')
            .then(res => res.json())
            .then(data => {
                this.objs = data;
                return data;
            })
            .catch(err => console.log(err.message));
        
        return this.objs; 
    };
    pushObjs ( newItem ) {
        fetch('http://localhost:3000/estoque')
            .then(res => res.json())
            .then(data => {
                this.objs = data;
                this.objs.push(newItem);
                this.saveJson();
            })
            .catch(err => console.log(err.message))
    }
}

export var estoque = new Estoque();
