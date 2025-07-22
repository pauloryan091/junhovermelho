    const button = document.getElementById('toogglebtn')
        const body = document.body;

       button.addEventListener('click', () => {
            body.classList.toggle('dark-mode')

        
if(body.classList.contains('dark-mode')) {
    button.textContent = 'acende <3';

} else{
    button.textContent = 'apaga <3';
}

});

