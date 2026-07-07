const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;

const target = parseFloat(counter.dataset.target);

let count = 0;

const speed = target / 80;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = target % 1 === 0 ? Math.ceil(count) : count.toFixed(1);

requestAnimationFrame(update);

}else{

counter.innerText = target % 1 === 0 ? target : target.toFixed(1);

}

};

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>observer.observe(counter));

const words = [
    "Applied Data Scientist",
    "AI Engineer",
    "Business Intelligence Analyst",
    "Healthcare Analytics Professional"
];

let index = 0;

setInterval(() => {

    document.getElementById("typing-text").textContent = words[index];

    index = (index + 1) % words.length;

}, 2200);

const revealElements = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(section => {
    section.classList.add("hidden");
    revealObserver.observe(section);
});
window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});
