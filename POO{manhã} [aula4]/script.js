let cllr1 = {
    foto:'samsungA14.png',
    marca: 'Samsung',
    modelo: 'Galaxy A14',
    armazenamento: '128GB',
    ram: '4GB',
    processador: 'Exynos 1330',
    qualidadeCamera: '50MP +5MP + 2MP',
    tipoTela: 'Tela Infinita de 6.6"** 60Hz',
    cargaBateria: '5000mAh',
    cor: 'preto',
    preco: 'R$998',
    anoDeLancamento: '2023'

}

let cllr2 = {
    foto:'samsungA34.jpg',
    marca: 'Samsung',
    modelo: 'Galaxy A34',
    armazenamento: '128GB',
    ram: '6GB',
    cargaBateria: '5.000mAh ',
    qualidadeCamera: '13MP',
    processador: 'octa-core',
    tipoTela: 'Tela Infinita de 6.6" 120Hz',
    preco: 'R$1349,00',
    cor: 'violeta',
    anoDeLancamento: '2021'

}

let cllr3 = {
    foto:'iphoneXR.webp',
    marca: 'Apple',
    modelo: 'iPhone XR',
    armazenamento: '128GB',
    ram: '3GB',
    processador: 'A12 Bionic',
    qualidadeCamera: '3840 px x 2160 px',
    tipoTela: ' LCD Liquid Retina HD de 6,1 polegadas',
    cargaBateria: '2942 mAh',
    cor: 'preto',
    preco: 'R$1689',
    anoDeLancamento: '2018'

}
let cllr4 = {
    foto:'iphone15PROMAX.webp',
    marca: 'Apple',
    modelo: 'iPhone 15 Pro Max',
    armazenamento: '256GB',
    ram: '8GB',
    processador: 'A16 Bionic',
    qualidadeCamera: '48 megapixels ',
    tipoTela: '',
    cargaBateria: '',
    cor: 'Titânio Azul',
    preco: 'R$10.378',
    anoDeLancamento: '2023'

}
let cllr5 = {
    foto:'motog22.webp',
    marca: 'Motorola',
    modelo: 'G22',
    armazenamento: '64GB',
    ram: '4GB',
    processador: 'Helio G37',
    qualidadeCamera: '2,40 px',
    tipoTela: '  IPS',
    cargaBateria: '4001-5000 mAh',
    cor: 'preto',
    preco: 'R$647,99',
    anoDeLancamento: '2022'

}
let listaDeCelulares = []
listaDeCelulares.push(cllr1)
listaDeCelulares.push(cllr2)
listaDeCelulares.push(cllr3)
listaDeCelulares.push(cllr4)
listaDeCelulares.push(cllr5)
console.log("imprimindo com o for")
for (let i = 0; i < listaDeCelulares.length; i++) {

    console.log(`${listaDeCelulares[i].marca} , ${listaDeCelulares[i].modelo} -->R$ ${listaDeCelulares[i].preco}`)
}

/////////////////////////////
for (let i = 0; i < listaDeCelulares.length; i++){
    document.write(`
    <div class="card">
        <img class="foto" src="img/${listaDeCelulares[i].foto}">
        <p class="nome">${listaDeCelulares[i].marca} ${listaDeCelulares[i].modelo}</p>
        <p class="armazenamento">${listaDeCelulares[i].armazenamento}</p>
        <p class="ram">${listaDeCelulares[i].ram}</p>
        <p class="cor">${listaDeCelulares[i].cor}</p>
        <p class="preco">  ${listaDeCelulares[i].preco}<p>
    </div>
    
    `);

}


















































