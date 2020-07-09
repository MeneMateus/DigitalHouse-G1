const timestamp = '1594249223';
const hash = 'f5f3ec77735cc4274e769bc0e8ec89b5';
const apikey = '3cb815c299a15d9df1ad3abe71dd9d7e';


for (let j = 530; j < 537; j++){
    let url = `http://gateway.marvel.com/v1/public/comics/${j}?ts=${timestamp}&apikey=${apikey}&hash=${hash}`

    fetch(url).then((resposta) => {
        return resposta.json()
    }).then((data) => {
        data.data.results.forEach(elemento => {
            const imgHQ = elemento.thumbnail.path + '.' + elemento.thumbnail.extension
            const title = elemento.title;
            const descricao = elemento.description;

            DivHQ(imgHQ)
        });
        
    })

}


let i = 0;
function DivHQ(hq){
    let recebeHQ = hq;
    if(!recebeHQ.match("image_not")){
        const img = document.getElementById(`imagem-hq${i}`).src = recebeHQ;
        i+=1;
    }
}

