function OpenModal(src) {
    var modal = document.getElementById('modal');
    var img = document.getElementById('modalImg');

        modal.classList.toggle('off');
        img.src = src

        if(src !== undefined){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }

}