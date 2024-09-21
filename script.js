gsap.registerPlugin(ScrollTrigger);

function cursor() {
	const cursor = document.querySelector(".cursor");
	document.addEventListener("mousemove", (e) => {
		const x = e.clientX + window.scrollX;
		const y = e.clientY + window.scrollY;

		gsap.to(cursor, {
			x: x,
			y: y,
			opacity: 0.8,
			duration: 1.2,
			ease: "power4.out",
			scrub: 2,
		});
	});
}

cursor();

function page1() {
	const tl = gsap.timeline();
	tl.from(".page1 h1", {
		y: 50,
		opacity: 0,
		duration: 0.7,
		ease: "power4.out",
	});

	tl.from(".page1 h2, .page1 a", {
		y: 50,
		opacity: 0,
		ease: "power4.out",
	});
}

page1();

function page2() {
	gsap.from(".page2 h1, .page2 h2", {
		opacity: 0,
		duration: 0.7,
		ease: "linear",
		y: 50,

		scrollTrigger: {
			trigger: ".page2",
			start: "top 70%",
			end: "top 0%",
			scrub: 2,
		},
	});

	gsap.from(".page2 p", {
		x: -100,
		opacity: 0,
		scrollTrigger: {
			trigger: ".page2",
			start: "top 40%",
			end: "top 10%",
			scrub: 2,
			stagger: 0.2,
		},
	});
}

page2();

function page3() {
	gsap.from(".page3 h1, .page3 h2", {
		opacity: 0,
		duration: 0.7,
		ease: "linear",
		y: 50,

		scrollTrigger: {
			trigger: ".page3",
			start: "top 70%",
			end: "top 0%",
			scrub: 2,
		},
	});

	gsap.from(
		".page3 .frontend button, .page3 .backend button, .page3 .tools button",
		{
			opacity: 0,
			duration: 0.7,
			ease: "linear",
			x: 50,
			stagger: 0.3,

			scrollTrigger: {
				trigger: ".page3",
				start: "top 70%",
				end: "top -80%",
				scrub: 2,
			},
		}
	);
}

page3();

function page4() {
	const ecommerce = document.querySelector(".ecommerce");

	ecommerce.addEventListener("mouseenter", (e) => {
		
		gsap.to(ecommerce, {
			scale: 1.1,
			duration: 0.5,
			ease: "power4.out",
			opacity: 0.5,
		});
	});
	ecommerce.addEventListener("mouseleave", (e) => {
		gsap.to(ecommerce, {
			scale: 1,
			duration: 0.5,
			ease: "power4.out",
			backGroundColor: "transparent",
			opacity: 1,
		});
	});
	gsap.from(".page4 h1, .page4 h2", {
		opacity: 0,
		duration: 0.7,
		ease: "linear",
		y: 50,

		scrollTrigger: {
			trigger: ".page4",
			start: "top 70%",
			end: "top 0%",
			scrub: 2,
		},
	});

	gsap.from(".page4 p,.page4 .projects", {
		opacity: 0,
		duration: 0.7,
		ease: "linear",
		scale: 0,

		scrollTrigger: {
			trigger: ".page4",
			start: "top 70%",
			end: "top 0%",
			scrub: 2,
		},
	});
}

page4();

function page5() {
	gsap.from(".page5 h1, .page5 h2", {
		opacity: 0,
		duration: 0.7,
		ease: "linear",
		y: 50,

		scrollTrigger: {
			trigger: ".page5",
			start: "top 90%",
			end: "top 97%",
			scrub: 2,
		},
	});

	gsap.from(".page5 p", {
		opacity: 0,
		duration: 0.7,
		ease: "linear",
		y: 50,

		scrollTrigger: {
			trigger: ".page5",
			start: "top 90%",
			end: "top 97%",
			scrub: 2,
		},
	});
}

page5();
