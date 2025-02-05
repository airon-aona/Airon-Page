function OpenModal(src) {
    var modal = document.getElementById('modal');
    var img = document.getElementById('modalImg');

    if(src !== 'undefined'){
        modal.classList.toggle('off');
        img.src = src
    }
}