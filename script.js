function startLoader() {

    let counterElement = document.querySelector(".counter");
    let currentValue = 0;


    function updateCounter() {
        if ( currentValue === 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1 ;

        if(currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay= Math.floor(Math.random() * 200) + 10;
        setTimeout(updateCounter, delay);
    }
    updateCounter();

}

startLoader();

gsap.to(".counter", 0.25 , {
    delay: 3.5,
    opacity: 0,
},);

gsap.to(".bar", 1.5, {
    delay: 3.3,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.from(".h1v", 1.5, {
    delay: 3.6,
    y: 100,
    stagger: {
        amount:0.5,

    },
    ease: "power4.inOut",
});

gsap.from(".h1v2", 1.7, {
    delay: 3.7,
    y: 100,
    stagger: {
        amount:0.5,

    },
    ease: "power4.inOut",
});
gsap.from(".h1v3", 1.8, {
    delay: 3.8,
    y: 100,
    stagger: {
        amount:0.5,

    },
    ease: "power4.inOut",
});
gsap.from(".h1v4", 1.9, {
    delay: 3.8,
    y: 100,
    stagger: {
        amount:0.5,

    },
    ease: "power4.inOut",
});