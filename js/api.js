const timestamp = '1594249223';
const hash = 'f5f3ec77735cc4274e769bc0e8ec89b5';
const apikey = '3cb815c299a15d9df1ad3abe71dd9d7e';

let description = {}
let title = []

for (let j = 530; j < 537; j++){
    let url = `http://gateway.marvel.com/v1/public/comics/${j}?ts=${timestamp}&apikey=${apikey}&hash=${hash}`

    fetch(url).then((resposta) => {
        return resposta.json()
    }).then((data) => {
        data.data.results.forEach(elemento => {
            const imgHQ = elemento.thumbnail.path + '.' + elemento.thumbnail.extension
            const titleHQ = elemento.title

            DivHQ(imgHQ, titleHQ)
        });
    })
}


let i = 0;

function DivHQ(hq, titleHQ){
    let recebeHQ = hq;
    let recebeTitle = titleHQ;
    if(!recebeHQ.match("image_not")){
        const img = document.getElementById(`imagem-hq${i}`).src = recebeHQ;
        title.push(recebeTitle)
        i+=1;
    }
}




document.addEventListener('dblclick', function(e){
    let linkImg = e.path[0].src;
    let posicao = e.path[0].alt;
    posicao = posicao.substring(3, 4)
    let titleHQDesc = title[posicao-1]
    localStorage.setItem('linkImgHQ', linkImg);
    localStorage.setItem('valueTitle', titleHQDesc);

    validaLink(linkImg);
}, false)


function validaLink(linkImg){
    if(linkImg != undefined){
        mudaPaginaDesc(linkImg)
    }
}



function mudaPaginaDesc(linkImg){
    window.location = 'Space_Comics - Copia/index.html';
}
