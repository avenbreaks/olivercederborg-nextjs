import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { logEvent } from "../utils/analytics";
import { FaDribbble } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const AboutSection = (props) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			gsap.registerPlugin(ScrollTrigger);
		}
		//about section timeline
		const aboutTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#about .section-line",
				start: "top bottom",
				end: "=-300",
			},
		});
		aboutTl
			.fromTo(
				"#about .section-line",
				1,
				{
					width: 0,
				},
				{
					width: "4rem",
					ease: "power3.inOut",
				}
			)
			.from("#about .section-category", 1.5, {
				x: -10,
				opacity: 0,
				stagger: 0.3,
				skewX: 5,
				delay: -0.5,
				ease: "power3.out",
			})
			.from(".about-h2", 1, {
				x: -70,
				opacity: 0,
				stagger: 0.3,
				skewX: 3,
				delay: -1.5,
				ease: "power3.out",
			});

		//about skills timeline
		const skillsTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#skills",
				start: "top bottom",
				end: "=-300",
			},
		});
		skillsTl
			.fromTo(
				"#skills .intro-line",
				1,
				{
					width: 0,
				},
				{
					width: "1.5rem",
					ease: "power3.inOut",
				}
			)
			.from("#skills .intro-text", 1, {
				opacity: 0,
				x: -10,
				stagger: 0.3,
				skewX: 2,
				delay: -0.5,
			})
			.from(".skills-content", 1, {
				y: -20,
				opacity: 0,
				stagger: 0.3,
				skewX: 2,
				delay: -0.75,
			})
			.from(".about-cta", 1, {
				y: -20,
				opacity: 0,
				stagger: 0.3,
				delay: -0.5,
				ease: "power3.out",
			});

		const aboutMeTl = gsap.timeline({
			scrollTrigger: {
				trigger: "#aboutme",
				start: "top bottom",
				end: "=-300",
			},
		});
		aboutMeTl
			.fromTo(
				"#aboutme .intro-line",
				1,
				{
					width: 0,
				},
				{
					width: "1.5rem",
					ease: "power3.inOut",
				}
			)
			.from("#aboutme .intro-text", 1, {
				opacity: 0,
				x: -10,
				stagger: 0.3,
				delay: -0.5,
			})
			.from(".aboutme-content", 1, {
				y: -20,
				opacity: 0,
				stagger: 0.3,
				delay: -0.75,
			});

		gsap.from("#about-img", 1, {
			opacity: 0,
			x: -50,
			ease: "power3.out",
			delay: 0.5,
			scrollTrigger: {
				trigger: "#about-img",
				start: "top bottom",
				end: "=-300",
			},
		});
	});

	return (
		<section
			id='about'
			className={
				"pt-26 pb-32 md:pt-32 md:pb-48 overflow-x-hidden" +
				(props.sectionNumber % 2 === 0
					? " bg-backgroundTwo "
					: props.sectionNumber % 2 != 0
					? " bg-backgroundOne"
					: "")
			}>
			<div className='container'>
				<div className='flex flex-row items-center'>
					<div className='section-line bg-primaryBrand w-16 h-1 mr-6'></div>
					<p className='section-category text-greyText text-base font-medium'>
						About
					</p>
				</div>

				<h2 className='about-h2 lg:text-secheader mt-8 text-4xl font-semibold text-white'>
					Get a closer look at who I am.
				</h2>

				<section className='mt-30 grid w-1/3 grid-cols-2 gap-5'>
					<a
						href='https://dribbble.com/oliver'
						target='_blank'
						className='default-focus bg-lightGrey hover:bg-lighterGrey flex flex-col px-5 py-5 text-base text-white transition-colors duration-200 ease-in-out rounded-sm outline-none'>
						<p className='opacity-90 inline-flex items-center text-sm'>
							Dribbble Followers
						</p>
						<p className='mt-1 text-3xl font-semibold'>
							{props.account.followers_count}
						</p>
					</a>
					<a
						href='https://dribbble.com/oliver'
						target='_blank'
						className='default-focus bg-lightGrey hover:bg-lighterGrey flex flex-col px-5 py-5 text-base text-white transition-colors duration-200 ease-in-out rounded-sm outline-none'>
						<p className='opacity-90 inline-flex items-center text-sm'>
							Some New Stat
						</p>
						<p className='mt-1 text-3xl font-semibold'>420</p>
					</a>
				</section>

				<div className='lg:flex-row lg:mt-20 flex flex-col-reverse items-start mt-16'>
					<div className='lg:w-7/12 w-full'>
						<div id='aboutme' className='flex flex-row items-center'>
							<div className='intro-line bg-primaryBrand w-6 h-1 mr-6'></div>
							<p className='intro-text text-base font-medium text-white'>
								Who am I
							</p>
						</div>

						<p className='aboutme-content text-greyText mt-6 text-base font-normal leading-loose'>
							I'm Oliver Cederborg, 23 years old and from Denmark.{" "}
							<br></br>Digital design has been an interest of mine for
							many years, and I work with anything from logo design to UI
							design and front-end development. <br></br>All the skills
							and tools I use, are self-taught over many years of
							practice and expanding my horizons.
						</p>

						<div id='skills' className='flex flex-row items-center mt-12'>
							<div className='intro-line bg-primaryBrand w-6 h-1 mr-6'></div>
							<p className='intro-text text-base font-medium text-white'>
								Skills &amp; Tools
							</p>
						</div>

						<p className='skills-content text-greyText mt-6 text-base font-normal leading-loose'>
							Design: Figma, Photoshop, Illustrator, After Effects
						</p>
						<p className='skills-content text-greyText mt-2 text-base font-normal leading-loose'>
							Development: JavaScript, React, Next.js, HTML, CSS/SCSS,
							TailwindCSS, WordPress
						</p>

						<div className='about-cta md:flex-row flex flex-col'>
							<AnchorLink
								href='#connect'
								onClick={() =>
									logEvent(
										`Get in touch`,
										`User clicked CTA on about section`
									)
								}
								className='default-focus bg-primaryBrand hover:bg-lighterGrey mt-14 inline-flex items-center justify-center w-auto px-8 py-4 text-base font-medium text-white duration-300 ease-in-out'>
								Get in touch
							</AnchorLink>
						</div>
					</div>

					<div className='md:w-5/12 flex flex-col self-start justify-end w-9/12'>
						<img
							id='about-img'
							src='/images/about-oliver.webp'
							alt='About Oliver Cederborg'
							className='md:max-h-sm md:mt-0 object-contain w-full h-full mt-0 pointer-events-none'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
