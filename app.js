let light = document.querySelector(`#light`);

//переключатель фонаря
on = false;

document.addEventListener('click', function (ev) {

    on = !on;

    if (on) {
        let x = ev.pageX / window.innerWidth * 100;
        let y = ev.pageY / window.innerHeight * 100;
        light.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 160px, rgba(0,0,0,0.95) 200px)`;
    } else {
        light.style.background = `none`;
    }
});

document.addEventListener('mousemove', function (ev) {
    
    if (on) {
        let x = ev.pageX / window.innerWidth * 100;
        let y = ev.pageY / window.innerHeight * 100;
        light.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 160px, rgba(0,0,0,0.95) 200px)`;
    }
})
