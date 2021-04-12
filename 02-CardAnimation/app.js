// Selectors
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const title = document.querySelector('.title');
const cthun = document.querySelector('.cthun img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const plagues = document.querySelector('.plagues');

// Moving animation event
container.addEventListener('pointermove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    // Rotation goes inversed
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener('pointerenter', (e) => {
    card.style.transition = 'none';
    // Popout effect (z axis)
    title.style.transform = 'translateZ(150px)';
    cthun.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    purchase.style.transform = 'translateZ(100px)';
    description.style.transform = 'translateZ(100px)';
    plagues.style.transform = 'translateZ(125px)';
});
// Animate out
container.addEventListener('pointerleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback effect (Z axis)
    title.style.transform = 'translateZ(0px)';
    cthun.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    plagues.style.transform = 'translateZ(0px)';
});
