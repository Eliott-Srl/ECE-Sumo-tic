import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    markers: false
})

document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".menu-container", {
        y: "-200%",
        duration: 2,
        ease: "slow",
        delay:  0.5
    });

    gsap.from(".logo-menu", {
        y: "-200%",
        x: "-8rem",
        duration: 2,
        ease: "slow",
        delay: .6
    });

    gsap.from("#discovery-button", {
        y: "400%",
        opacity: "0",
        duration: 1,
        ease: "power4.in"
    })
})

gsap.fromTo(gsap.utils.toArray(["#about-h2", ".icon-container", ".btn-inscription"]), {
    y: '5rem',
    opacity: "0"
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".about",
        toggleActions: 'play none none none'
    }
})

gsap.fromTo(gsap.utils.toArray(["#kit-h2", ".card", ".btn-kit"]), {
    y: '5rem',
    opacity: "0"
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".kit",
        toggleActions: 'play none none none'
    }
})

gsap.fromTo(gsap.utils.toArray([".social-link"]), {
    y: '5rem',
    opacity: "0"
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        toggleActions: 'play none none none'
    }
})

gsap.fromTo(gsap.utils.toArray([".logo-section", ".info-footer"]), {
    y: '5rem',
    opacity: "0"
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        toggleActions: 'restart none none reset'
    }
})

gsap.fromTo(gsap.utils.toArray([".top-section-footer"]), {
    y: '-5rem',
    opacity: "0"
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        toggleActions: 'restart none none reset'
    }
})

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
