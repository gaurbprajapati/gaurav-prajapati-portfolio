import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";

import work3 from './assets/work3.png'
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";


import portfolio from './assets/portfolio.png'
import yogaYata from './assets/yogaYata.png'
import compuspost from './assets/compuspost.png'
import resume from './assets/resume.png'

import { FaGithub, FaDev, FaTwitter } from 'react-icons/fa';

import djangoblog from './assets/djangoblog.png'


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]


export const socialIcons = [
  <FaGithub />,
  <FaDribbble />,
  <FaLinkedin />,
  <FaDev />,
  <FaInstagram />,
  <FaTwitter />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Gaurav"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+919643069360"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "gauravprajapati094@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Backend Developer",
    company: "Shiksha Sopan IIT Kanpur",
    discription: "Designed and implemented RESTful APIs using Django framework.Optimized database performance through indexing and ensured data integrity with custom validation. Conducted thorough API testing for secure and reliable web applications.",
    Skills: "Python,Django,Django REST framework,REST API , Postman"
  },
  {
    di: 2,
    year: "2022",
    position: "Doubt Solver",
    company: "Codechef",
    discription: " I am worked as a doubt solverfor practice problems of competitive programming and Solved more than 100 doubts",
    Skills: "Python, Java, Data Structures and Algorithms."
  }
]
export const finishes = [
  {
    id: 1,
    number: '6+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served"
  }
]
export const Clubdata = [
  {
    id: 1,
    img: resume,
    name: "Resume Builder",
    category: "MERN Stack",
    discription: "This project simplifies resume creation with user-friendly interface, CRUD operations, customizable templates, PDF download, and upcoming QR format",
    github: "https://github.com/gaurbprajapati/QR-Based-Resume-builder",
    live: "https://victor-resume-builder.herokuapp.com/login"
  },
  {
    id: 2,
    img: compuspost,
    name: "Compus Post",
    category: "MERN Stack",
    discription: "web application that brings students together on campus through club pages, learning resources, and roadmaps. With CampusConnect, students can explore different clubs and organizations on campus and collaborate with others to achieve their academic and career goals",
    github: "https://github.com/gaurbprajapati/Campus-post",
    live: "https://github.com/gaurbprajapati/Campus-post"
  },
  {
    id: 8,
    img: portfolio,
    name: "Portfolio",
    category: "Reactjs",
    discription: "Complete responsive portfolio built using Reactjs , Scss , Framermotion",
    github: "https://github.com/gaurbprajapati/gaurav-prajapati-portfolio",
    live: "https://gauravprajapati.netlify.app"
  },
  {
    id: 4,
    img: djangoblog,
    name: "Bloging Website",
    category: "Python-Django",
    discription: "A full-featured web app designed with Django's ORM and SQLite, offering CRUD functionality, user authentication, and responsive front-end interfaces built with HTML, CSS, and Bootstrap.",
    github: "hhttps://github.com/gaurbprajapati/django-blog",
    live: "https://github.com/gaurbprajapati/django-blog"

  },
  {
    id: 3,
    img: yogaYata,
    name: "YogaYata",
    category: 'Reactjs',
    discription: "A responsive fitness website built with ReactJS and Rapid API offers powerful search, exercise data, animated demos, and related Youtube videos. Upcoming features include user authentication, fitness tracking, and a blog.",
    github: "https://github.com/gaurbprajapati/Gym-exercises-ReactApp",
    live: "https://yogayatahealth.netlify.app/"
  },
  {
    id: 5,
    img: work5,
    name: "Task Manager",
    category: "MERN Stack",
    discription: "Task Manager is a simple web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to manage their tasks. It provides features such as adding tasks, updating tasks, and deleting tasks.",
    github: "https://github.com/gaurbprajapati/Task-Manager",
    live: "https://github.com/gaurbprajapati/Task-Manager"
  },
  {
    id: 6,
    img: work6,
    name: "NewsHunt",
    category: "Reactjs",
    discription: "Users to access breaking news headlines and summaries in 40 words or less for quick and easy consumption of news .There is list all News organization , news categories, search option ,Tech used:- REACTJS",
    github: "https://github.com/gaurbprajapati/new-app",
    live: "https://github.com/gaurbprajapati/new-app"
  }

  // {
  //   id: 7,
  //   img: work3,
  //   name: "Face Emotion recognisation",
  //   category: "Python-Django",
  //   discription: "This project uses machine learning algorithms to detect and classify human facial expressions into emotions such as sadness, happiness, fear, anger, surprise and disgust. etc.",
  //   github: "https://github.com/gaurbprajapati/face-emotion-recognition",
  //   live: "https://github.com/gaurbprajapati/face-emotion-recognition"
  // },

]


export const ClubNav = [
  "All", "MERN Stack", "Reactjs", "Python-Django"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "New Delhi , India"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "gauravprajapati094@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-9643069360"
  }
]


