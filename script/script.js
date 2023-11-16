const myText = new SplitType(".content-name")
gsap.registerPlugin(ScrollTrigger);
gsap.to(
    ".char",{
        x: 0,
        duration: 2,
        stagger: 0.05,
        duration: .1
    }
)
gsap.from(
    ".nav",{
        y:"-118%",
        duration: 1,
        delay: 1,
        ease: "bounce.out"
    }
)