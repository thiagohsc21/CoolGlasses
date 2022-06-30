<template>
    <footer class="rodape">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h3>Sobre nós</h3>
                    <p>Surgimos de uma confraternização de amigos e temos como
                        objetivo restaurar a auto estima do jovem universitário, o qual
                        é destruído todos os dias pela universidade e professores. </p>
                </div>
                <div class="col-md-3">
                    <h3>Atalhos</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/user">Minha Conta</a></li>
                        <li><a href="/carrinho">Carrinho</a></li>
                    </ul>

                </div>
                <div class="col-md-3">
                    <h3>Contato</h3>
                    <p>
                        <i class="fa fa-envelope"></i> coolglasses@email.com <br>
                        <i class="fa fa-phone"></i> (16) 9999-9999 <br>
                        segunda à sexta, 7h30 - 18h30
                    </p>
                </div>
                <div class="col-md-3">
                    <ul class="list-inline">
                        <li><a href="https://facebook.com/" target="_blank"><i class="fa fa-facebook"></i> </a></li> 
                         <li><a href="https://linkedin.com/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                        <p> layout e desenvolvimento GRUPO 7<br>
                            CoolGlasses 2022 | todos os direitos reservados</p>
                </div>

            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.rodape{
    display: block;
    background-color: var(--dark);
    font-size: x-medium;
    padding: 9px;
    width: 100%;
    position: relative;
    bottom: 0;
    left: 0; 
}

.rodape p, a, h3{ 
    color:white; 
}

.list-inline {
    display: flex; 
    flex-direction: row; 
    font-size: 2em;
    gap: 2em;
}
.list-inline li{
    color: black
}

</style>