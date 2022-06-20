import * as fs from 'fs';

class Compras {
    constructor () {
    };
    getObjs () {
        let aux;
        if (localStorage.length==0)
            aux = [];
        else
            aux = JSON.parse(localStorage.compras);

        console.log('aux: ', aux);
        return aux;

    };
    pushObjs ( newItem ) {
        let aux;

        if (localStorage.length==0) 
            aux = [];
        else
            aux = JSON.parse(localStorage.compras);
            
        aux.push(newItem);
        localStorage.compras = JSON.stringify(aux);
    }
}

export var compras = new Compras();

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
