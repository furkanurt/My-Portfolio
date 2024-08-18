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

        let delay= Math.floor(Math.random() * 200) + 1;
        setTimeout(updateCounter, delay);
    }
    updateCounter();

}

startLoader();
gsap.to(".overlay", 1.5 , {
    delay: 2,
    onComplete: function() {
        document.querySelector(".overlay").style.zIndex = -1;
    }
});

gsap.to(".counter", 0.25 , {
    delay: 2.4,
    opacity: 0,
    onComplete: function() {
        document.querySelector(".counter").classList.add('hidden');
    }
},);

gsap.to(".bar", 1.5, {
    delay: 2,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.from(".h1v", 1.5, {
    delay: 2.8,
    y: 100,
    stagger: {
        amount:0.5,

    },
    ease: "power4.inOut",
});

gsap.from(".h1v2", 1.7, {
    delay: 2.9,
    y: 100,
    stagger: {
        amount:0.5,

    },
    ease: "power4.inOut",
});
gsap.from(".h1v3", 1.8, {
    delay: 3,
    y: 100,
    stagger: {
        amount:0.5,

    },
    ease: "power4.inOut",
});
gsap.from(".h1v4", 1.9, {
    delay: 3.1,
    y: 100,
    stagger: {
        amount:0.5,

    },
    ease: "power4.inOut",
});

document.addEventListener('scroll', () => {
    const nav = document.getElementById("nav");
    const aside = document.getElementById('set-height');
    
    if (window.scrollY > aside.offsetHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('.home-background');
    video.play().catch(function(error) {
        console.log('Video autoplay blocked:', error);
    });
});

function sendEmail() {
    window.location.href = "mailto:onurtozlu@hotmail.com";
}