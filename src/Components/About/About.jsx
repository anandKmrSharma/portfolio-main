import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import WindowSize from '../../Utils/WindowSize';
import styles from './About.module.css';
// import Image from 'Abhi.JPG'

const About = () => {
	const { newTheme } = React.useContext(ThemeContext);
	const [width] = WindowSize();
	const img =
		width < 650
			? 'https://github.com/rajdeep9565/my_portfolio/blob/main/src/assets/logo%20copy.jpg?raw=true'
			: 'https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true';
	return (
		<div
			className={styles.container}
			style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
		>
			<div className={styles.first}>
				<img src={"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true"} alt='' />
			</div>
			<div className={styles.second}>
				<h1
					style={{ color: `${newTheme.title}` }}
					className={styles.heading}
				>
					About Me
				</h1>
				<div className={styles.borderBottom} />
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.aboutMe}
				>
					When I was in college, I felt that I was more interested in doing coding and solving problems rather than
        working in my mechanical workshop. So, I decided to learn technology. Initially, I tried to learn from
        Youtube videos as well as from other free resources, but I felt like I needed guidance from a professional
        if I want to pursue a career in the IT industry. This is why I decided to join Masai School to learn
        coding. <br/> <br/>
        I'm passionate about problem solving. I'm highly skilled in HTML, CSS, Mongodb and Express.<br/>

        I would like to work in an organisation that offers opportunities where i can showcase my technical
        skills and knowledge. I hope to work in an organisation, that allows me to learn new things on a 
        daily basis, which would in turn help my overall growth.
					<span style={{ color: `#00a0a0` }}>
						{' '}
						looking for an opportunity as a full stack web developer.
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default About;
