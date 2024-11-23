import { Card, CardBody, CardFooter } from "react-bootstrap";
import Topnav from "./Navbar";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logo from "./img/logo4.png"
import styles from "./styles/navbar.module.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation, useNavigate } from "react-router-dom";

function About()
{
    const location=useLocation();
    const username=location.state;
    const navigate=useNavigate();
    const expand="md";
    return (
            <>
            {/* <Topnav/> */}
           
            <div style={{width:"101%",height:"100vh",backgroundColor:"white"}}>
            <Card>

                <CardBody>
                    <Button  style={{width:"200px",backgroundColor:"white",border:"2px gold solid"}}><a  style={{color:"black",fontWeight:"500",fontSize:"25px",textDecoration:"none"}} onClick={()=>{navigate("/Bachelor/CareerPortal",{state:username})}}>Previous Page</a></Button>
            <h1 style={{textAlign:"center"}}>About Us</h1><hr/><br/>
            <h4 style={{textAlign:"center"}}>Welcome to <b style={{textDecoration:"underline"}}>NextGen</b> – Pioneers in Open Source Innovation</h4>
              <br/>
              <ul><li><p>At <b style={{textDecoration:"underline"}}>NextGen</b>, we are passionate about transforming the world through open source technology. Founded on the principles of collaboration, transparency, and community-driven development, we are dedicated to creating and supporting cutting-edge open source solutions that drive progress in the Information Technology sector.</p></li></ul>
               <hr/>
               <h3>Our Mission</h3>
               <br/>
               <ul><li> <p>Our mission is to empower developers, organizations, and individuals by providing high-quality open source tools and platforms that are not only innovative but also accessible. We believe that by making technology open and available to all, we can foster a global community of creators who drive technological advancement and solve real-world problems.</p></li></ul>
               <hr/><h3>Our Value</h3>
               <ul>
                <li><b>Transparency: </b>We are committed to open communication and transparent development processes. Our code is available for review, and we welcome contributions and feedback from the community.</li>
                <li><b>Collaboration:</b> We believe in the power of working together. By collaborating with developers, organizations, and users, we create better solutions and drive innovation.</li>
                <li><b>Innovation:</b>We are dedicated to pushing the boundaries of technology. Our projects are designed to be at the forefront of industry trends, providing cutting-edge solutions that address contemporary challenges.</li>
                <li><b>Inclusivity:</b>We embrace diversity and inclusivity in all aspects of our work. Our open source projects are designed to be accessible to everyone, regardless of background or experience level.</li>
               </ul>
               <hr/><h3>What We Do</h3>
               <ul>
                <li><b>Open Source Software Development:</b> We design and develop robust, scalable, and user-friendly open source software solutions. Our projects span a wide range of applications, from web development frameworks and productivity tools to data analysis and cybersecurity.</li>
                <li><b>Community Collaboration: </b>We actively engage with the open source community to gather feedback, share knowledge, and enhance our projects. Our team values contributions from developers around the world and encourages collaborative problem-solving and innovation.</li>
                <li><b>Support and Documentation:</b> We provide comprehensive support and detailed documentation for our open source projects to ensure that users and developers can make the most of our tools. Our goal is to make it easy for anyone to get involved, whether you are a seasoned developer or just starting out.</li>
                <li><b>Educational Resources:</b> We are committed to supporting the next generation of technologists by offering educational resources, including tutorials, webinars, and workshops. We believe in the power of learning and strive to provide valuable knowledge to our community.</li>
               </ul>
               <hr/><h3>Join Us</h3>
               <ul><li>Whether you are a developer looking to contribute to exciting projects, an organization seeking reliable open source solutions, or an individual eager to learn and engage with our community, we invite you to join us. Together, we can drive technological advancement and create a more open and connected world.</li></ul>
               <hr/><h3>Contact Us</h3>
               <ul><li>For more information about our projects or to get involved.</li>
                <li>Please reach out to us at [<a href="mailto:oncampusplace@gmail.com">Mail</a>].</li>
                <li>Follow us on Social media to stay updated on our latest developments and community initiatives.</li>
                </ul>

               <h2><b style={{textDecoration:"underline"}}>NextGen</b> – Where Open Source Meets Innovation</h2>
               
                </CardBody>
            </Card>
            </div>
            </>

    )
}

export default About;