<template>
     <div class="finalizar-compra">
        <div class="container">
            <div class="row">
                <div class="col-md-12">    

                    <h2 style="font-weight:bolder"> Finalizar Compra</h2>
                    <p> Preço Total: linkar com o carrinho</p>

                    <form class="formulario">
                        <p>CPF</p>
                        <input id="CPF"  type="text" placeholder="12345678900"><br><br>
                        <p>Número do Cartão</p>
                        <input id="numero-cartao" type="text" placeholder="1111222233334444"><br><br>
                        <div class="list-inline-compra"> 
                            <li>   
                            <p>Data de Validade</p>
                            <input id="data-validade" type="date" min="21-06-2022" max="21-06-2050"><br><br>
                            </li>
                            <li>
                            <p>Código de Segurança</p>
                            <input id="codigo-seguranca" type="securitycode" placeholder="123"><br><br>
                            </li>
                        </div>
                        <p>Endereço de Entrega</p>
                        <input id="endereco" type="text" placeholder="Rua XXXX, Número Y, Ap Z"><br><br>

                    </form>

                    <form class="formulario" id="finalizar" >
                        <div class="list-inline-compra">
                            <li><input id="botao_finalizar" type="submit" value="Finalizar Compra" ></li>
                            <div class="listafim"><li><a href="/carrinho">Voltar para Carrinho</a></li></div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
    <br><br><br>
</template>

<script>
export default {
  name: 'Finalizar_Compra',
}
</script>

<style>
    .finalizar-compra{
    margin:auto;
    margin-top: 4.6em;
    color: black;
    width: 600px;
}

.formulario{
    background-color: var(--cinza-claro);
    font-weight: bolder;
    font-size: 1.1em;
    padding-left: 3%;
    padding-top: 1%;
}

.formulario input {
    background-color: var(--cinza-claro);
    border: none;
    border-bottom: 1px solid black;
}

.formulario#finalizar {
    background-color: white;
    padding-bottom: 15px;
}

.formulario#finalizar input[type=submit]{
    background-color: black;
    color: white;
    transition-duration: 0.2s;
}

.formulario input[type=submit]:hover{
    font-weight: bold;
    background-color: white;
    color: black;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.formulario#finalizar a{
    color: black;
    text-decoration: underline;
}

.formulario#finalizar a:hover{
    color: var(--primary);
}

.list-inline-compra{
    display: flex;
    text-decoration: none;
    gap: 1.7em;
}
.list-inline-compra li{
    list-style-type: none;
} 

.listafim{
    position:relative;
    right: -35.9%;
}



input[type=text] {
    width: 63.3%;
    box-sizing: border-box;
}
input[type=securitycode] {
    width: 85%;
}
</style>