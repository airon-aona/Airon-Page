function AbrirImagem(link){
    var open = document.getElementById('openImg');
    var view = document.getElementById('view');

    if(link != ''){
        open.style.backgroundColor = "rgba(0, 0, 0, 0.342)"
        view.src = link;
    }else{
        open.style.backgroundColor = 'none';
        view.src = `none`;
    }
    console.log(link);
}