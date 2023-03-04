import React from 'react'
import NavBar from '../navbar'
// import image from '../../images/background1.eps'
import AlertDialogSlide from '../dialogBox'
import { Typography } from '@mui/material';
import image from '../../images/backGround.jpg';




const Home = () => {

  return (

    <div style={{width:'100%'}}>
      <NavBar />
      <div>
      <image src={image}/>
        <Typography variant='h2'>Home</Typography>
        <hr/>
        <Typography color={'rgba(255, 255, 255, 0.7)'} variant='h5'>
        Welcome to my portfolio home page! My name is Vaidik Chouhan,
         and I'm a 19-year-old developer with a passion for design. I specialize in using Figma 
         and Autodesk Sketchbook to create stunning visuals that captivate audiences. Additionally, 
         I am proficient in several programming languages including ReactJS, NodeJS, NextJS, MongoDB, ExpressJS,
          C, and C++, which I use to develop robust and scalable applications.
          
          
        When it comes to design, I believe that every detail counts. From the color scheme to the typography,
         I pay attention to every aspect of the visual experience to ensure that it is both aesthetically pleasing 
         and functional. As a developer, I take pride in creating applications that not only meet the needs of my clients 
         but also exceed their expectations.
         
        Whether you're looking to revamp your website's design or create a custom application from 
        scratch, I'm here to help. Let's work together to bring your vision to life! Welcome to my about page! My name is Vaidik Chouhan, and I'm a 19-year-old developer and designer based in [city, country]. Ever since I was young, I've been fascinated by technology and the endless possibilities it presents for creativity and innovation. As I grew older, I realized that I wanted to channel that fascination into a career that would allow me to make a meaningful impact on the world. That's why I decided to pursue a path in software development and design.

        One of my earliest memories of coding was when I was 14 years old. I had just learned the basics of C++ and decided to try my hand at creating a simple game. It was a text-based adventure game, and it took me weeks to write the code and debug it. But when I finally ran the program and saw the game come to life on my computer screen, I was hooked. I knew that I had found my calling.
        
        Since then, I've dedicated myself to learning as much as I can about software development and design. I've worked on a wide range of projects, from creating mobile apps to building websites and web applications. I've also honed my design skills using tools like Figma and Autodesk Sketchbook, and I'm constantly experimenting with new design techniques to push my creativity to the next level.
        
        One of the things that sets me apart from other developers and designers is my ability to bridge the gap between the two disciplines. I firmly believe that design and development are two sides of the same coin, and that they should be treated as such. That's why I strive to create designs that not only look great, but also fun
        One of the things that sets me apart from other developers and designers is my ability to bridge the gap between the two disciplines. I firmly believe that design and development are two sides of the same coin, and that they should be treated as such. That's why I strive to create designs that not only look great, but also function seamlessly and intuitively. And when it comes to development, I always keep the user experience in mind, ensuring that every line of code I write serves a purpose and enhances the overall experience.
        
        In terms of my technical skills, I am proficient in several programming languages including ReactJS, NodeJS, NextJS, MongoDB, and ExpressJS, as well as C and C++. I'm also familiar with several other tools and frameworks like Bootstrap, Material UI, and GatsbyJS. I'm always eager to learn more and expand my skillset, and I'm constantly exploring new technologies and trends in the industry to stay ahead of the curve.
        
        But software development and design aren't just about technical skills. They're also about communication, collaboration, and problem-solving. That's why I prioritize clear and open communication with my clients, working closely with them to understand their needs and goals. I'm a firm believer in the power of teamwork, and I enjoy collaborating with others to create solutions that are both effective and elegant. And when it comes to problem-solving, I thrive on the challenge of finding creative and innovative solutions to even the most complex issues.
        
        Outside of work, I enjoy reading, playing video games, and spending time with my friends and family. I'm also an avid learner and enjoy taking courses and reading up on new topics to expand my knowledge and skills.
        
        In summary, I'm a passionate and dedicated developer and designer who is committed to creating solutions that are both beautiful and functional. Whether you're looking to create a new website, develop a custom application, or simply want to chat about technology, I'm always here to help. Feel free to get in touch with me to learn more aboutction seamlessly and intuitively. And when it comes to development, I always keep the user experience in mind, ensuring that every line of code I write serves a purpose and enhances the overall experience.
        
        In terms of my technical skills, I am proficient in several programming languages including ReactJS, NodeJS, NextJS, MongoDB, and ExpressJS, as well as C and C++. I'm also familiar with several other tools and frameworks like Bootstrap, Material UI, and GatsbyJS. I'm always eager to learn more and expand my skillset, and I'm constantly exploring new technologies and trends in the industry to stay ahead of the curve.
        
        But software development and design aren't just about technical skills. They're also about communication, collaboration, and problem-solving. That's why I prioritize clear and open communication with my clients, working closely with them to understand their needs and goals. I'm a firm believer in the power of teamwork, and I enjoy collaborating with others to create solutions that are both effective and elegant. And when it comes to problem-solving, I thrive on the challenge of finding creative and innovative solutions to even the most complex issues.
        
        Outside of work, I enjoy reading, playing video games, and spending time with my friends and family. I'm also an avid learner and enjoy taking courses and reading up on new topics to expand my knowledge and skills.
        
        In summary, I'm a passionate and dedicated developer and designer who is committed to creating solutions that are both beautiful and functional. Whether you're looking to create a new website, develop a custom application, or simply want to chat about technology, I'm always here to help. Feel free to get in touch with me to learn more about my services and how we can work together to bring your vision to life.</Typography>


      </div>
      <AlertDialogSlide />
    </div>
  )
}
export default Home