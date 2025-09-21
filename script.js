document.querySelector('#changeColor').addEventListener('click', function() {

    let colorAleatory = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + colorAleatory;
});