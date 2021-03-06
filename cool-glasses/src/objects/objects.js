
class Compras {
    constructor () {
    };
    getObjs () {
        let aux;

        if (!localStorage.getItem('compras'))
            aux = [];
        else
            aux = JSON.parse(localStorage.compras);

        return aux;

    };
    pushObjs ( newItem ) {
        let aux;

        if (!localStorage.getItem('compras')) 
            aux = [];
        else
            aux = JSON.parse(localStorage.compras);

        const idx = aux.findIndex(o => o.id_produto == newItem.id_produto);
        if(idx == -1){
            aux.push(newItem);
            localStorage.compras = JSON.stringify(aux);
        }
        else{
            aux[idx].qtd++;
            localStorage.setItem("compras", JSON.stringify(aux));
        }
    };
    popObjs ( item ) {
        let aux;

        if (localStorage.length==0) 
            aux = [];
        else
            aux = JSON.parse(localStorage.compras);

        const idx = aux.findIndex(o => o.id_produto == item.id_produto);
        if(idx != -1){
            if(aux[idx].qtd == 1){
                aux.splice(idx, 1);
                localStorage.setItem("compras", JSON.stringify(aux));
            }
            else{
                aux[idx].qtd--;
                localStorage.setItem("compras", JSON.stringify(aux));
            }
        }
    };
    deleteCarrinho(){
        let aux = [];
        localStorage.setItem("compras", JSON.stringify(aux));
    }
}

export var compras = new Compras();

// class Estoque {
    
//     constructor () {
//         fetch('http://localhost:3000/estoque')
//             .then(res => res.json())
//             .then(data => {
//                 this.objs = data;
//             })
//             .catch(err => console.log(err.message));
//     };
//     saveJson () {
//         fs.writeFileSync('./estoque.json', JSON.stringify(this.objs));
//     };
//     getObjs () {
//         fetch('http://localhost:3000/estoque')
//             .then(res => res.json())
//             .then(data => {
//                 this.objs = data;
//                 return data;
//             })
//             .catch(err => console.log(err.message));
        
//         return this.objs; 
//     };
//     pushObjs ( newItem ) {
//         fetch('http://localhost:3000/estoque')
//             .then(res => res.json())
//             .then(data => {
//                 this.objs = data;
//                 this.objs.push(newItem);
//                 this.saveJson();
//             })
//             .catch(err => console.log(err.message))
//     }
// }

// export var estoque = new Estoque();


class Pedidos {
    constructor () {
    };
    getObjs () {
        let aux;

        if (!localStorage.getItem('pedidos'))
            aux = [];
        else
            aux = JSON.parse(localStorage.pedidos);

        return aux;

    };
    pushObjs ( newItem ) {
        let aux;

        if (!localStorage.getItem('pedidos')) 
            aux = [];
        else
            aux = JSON.parse(localStorage.pedidos);

        const idx = aux.findIndex(o => o.idx_produto == newItem.idx_produto);
        if(idx == -1){
            aux.push(newItem);
            localStorage.pedidos = JSON.stringify(aux);
        }
        else{
            aux[idx].qtd++;
            localStorage.setItem("pedidos", JSON.stringify(aux));
        }
    };
    popObjs ( item ) {
        let aux;

        if (localStorage.length==0) 
            aux = [];
        else
            aux = JSON.parse(localStorage.pedidos);

        const idx = aux.findIndex(o => o.idx_produto == item.idx_produto);
        if(idx != -1){
            if(aux[idx].qtd == 1){
                aux.pop(item);
                localStorage.pedidos = JSON.stringify(aux);
            }
            else{
                aux[idx].qtd--;
                localStorage.setItem("pedidos", JSON.stringify(aux));
            }
        }
    };
}

export var pedidos = new Pedidos();
