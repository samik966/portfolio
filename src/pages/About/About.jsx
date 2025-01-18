import { motion } from "framer-motion";
import { Transition } from 'components'
import { opacityTransition } from "utils/transitions";
import './About.scss'
const About = () => {
	return (
		<Transition id='about__container'>
			<div className='about'>
				<motion.div className='about__image' variants={opacityTransition}>
					<img src='assets/images/me.jpeg' alt='user' />
				</motion.div>
				<motion.div className='about__description' variants={opacityTransition}>
					<h1>About</h1>
					<p>
						Hello, My name is Samiuddin Khan, I enjoy creating things that live on the internet. I am confident, curious, and passionate about exploring and learning new things.
					</p>
<p> With over 4 years of experience in the IT industry, I have worked extensively in web development, primarily focusing on frontend technologies.
					<p>
						I am currently a Full Stack Developer at UBS Business Solutions, where I have been working since December 2022. I utilize a leading enterprise tech stack, combining my expertise in React with my recently acquired skills in Spring Boot and Microservice Architecture. I thrive on the daily challenges of learning new concepts and collaborating with a team of highly skilled and passionate professionals.
					</p>
					<p>
						Before transitioning to full-time roles, I spent over two years as a freelancer, collaborating with talented individuals to develop innovative web-based applications.
					</p>
   <p>When I’m not coding, I enjoy spending quality time with my family, indulging in delicious food, and relaxing on beaches.</p>
				</motion.div>
			</div>
		</Transition>
	)
}

export default About
