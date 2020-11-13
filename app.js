let forest = document.querySelector(`#forest`);
let dark = document.querySelector(`#dark`);

forest.style.background = `none`;

//переключатель фонаря
on = false;

document.addEventListener('click', function (ev) {

    on = !on;

    if (on) {
        let x = ev.pageX / window.innerWidth * 100;
        let y = ev.pageY / window.innerHeight * 100;
        forest.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 160px, rgba(0,0,0,0.95) 200px)`;
        dark.style.background = `none`;
    } else {
        forest.style.background = `none`;
        dark.style.background = `black`;
    }
});

document.addEventListener('mousemove', function (ev) {
    
    if (on) {
        let x = ev.pageX / window.innerWidth * 100;
        let y = ev.pageY / window.innerHeight * 100;
        forest.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 160px, rgba(0,0,0,0.95) 200px)`;
        dark.style.background = `none`;
    }
})

