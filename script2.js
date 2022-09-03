window.addEventListener('load', loader);

function loader(){

    
    const TLLOAD1 = gsap.timeline({
        default: {
            ease: "power2"
        },
    })

    const TLLOAD2 = gsap.timeline({
        default: {
            ease: "power2"
        },
        repeat: -1
    })

    TLLOAD1
    .to('.home-container .content hr', {transform: "translateY(-50%) scaleX(1)"})
    .to('.home-container .content p span', {top: "50%"})
    .to('.home-container .content h1 span', {top: "50%"});

    TLLOAD2
    .to('.home-container .video-wrapper .video-1', {width: "100%", stagger: '.05s', duration: .5, delay: 0.1})
    .to('.home-container .video-wrapper .video-1', {width: "0%", stagger: '.05s', duration: .5, delay: 0.1}, "+=5")
    .to('.home-container .video-wrapper .video-2', {width: "100%", stagger: '.05s', duration: .5, delay: 0.1})
    .to('.home-container .video-wrapper .video-2', {width: "0%", stagger: '.05s', duration: .5, delay: 0.1}, "+=5")

}