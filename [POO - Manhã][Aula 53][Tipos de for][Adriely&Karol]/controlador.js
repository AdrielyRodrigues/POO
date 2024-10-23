let iptnome = document.getElementById('iptnome');
let iptestado = document.getElementById('iptestado');
let iptano = document.getElementById('iptano');
let iptescudo = document.getElementById('iptescudo');
let btnCadastrar = document.getElementById('btnCadastrar');

/*----------------------------------------------------------------------------------------*/
let containerCards = document.getElementById('containerCards');
desenharCards(containerCards, listaDeTimes);

    function quandoCadastrar(){
        let timeTemp = {
            nome : iptnome.value,
            anoDeFundacao: iptano.value,
            estadoDeOrigem:iptestado.value,
            fotoEscudo: iptescudo.value
            };

        listaDeTimes.push(timeTemp);

        desenharCards(containerCards, listaDeTimes);

}
 
btnCadastrar.addEventListener('click', quandoCadastrar);
