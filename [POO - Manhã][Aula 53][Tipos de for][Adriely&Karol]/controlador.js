let iptnome = document.getElementById('iptnome');
let iptestado = document.getElementById('iptestado');
let iptano = document.getElementById('iptano');
let iptescudo = document.getElementById('iptescudo');
let btnCadastrar = document.getElementById('btnCadastrar');

/*----------------------------------------------------------------------------------------*/
let containerCards = document.getElementById('containerCards');
desenharCards(containerCards, listaDeTimes);


    //-----------------------------------------------------------------------------------------//
    //Código para carregar a imagem do input file.

    let srcImagem;

        function quandoCarregarArquivo(){
            const fileReader = new FileReader ();
            const arquivos = iptescudo.files;
            
            if(arquivos){ // Verificando se o arquivos não está vazio
                fileReader.onload = function (event) {
                    srcImagem = event.target.result
                }
                fileReader.readAsDataURL(arquivos[0]);
            }
        }
        iptescudo.addEventListener('change', quandoCarregarArquivo);

    //-----------------------------------------------------------------------------------------//
    function quandoCadastrar(){
        let timeTemp = {
            nome : iptnome.value,
            anoDeFundacao: iptano.value,
            estadoDeOrigem:iptestado.value,
            fotoEscudo: srcImagem
            };

        listaDeTimes.push(timeTemp);

        desenharCards(containerCards, listaDeTimes);

}
 
btnCadastrar.addEventListener('click', quandoCadastrar);
