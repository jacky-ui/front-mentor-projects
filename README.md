<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMRdDv95dKumIXJeMeUvvWzJO6fkuNGpFdw&s"/>
</p>

# Northern Karate Training Portal 

Norther Karate previously had an app, but it was discontinued due to increasing development costs. As both a student and a developer, I took it upon myself to create a new app for my fellow Karate students. This app was made for the Scarborough and Leslieville dojo.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Libraries & Tools](#libraries)
- [Installation](#installation)

## Demo

## Features
<ul>
  <li>User Authentication: Secure user login with role-based access (admin and user)</li>
  <li>Admin and User Dashboard: Admin users can manage content, including uploading new videos, editing and uploading class schedule. Users can view videos, Karate terminology, class schedule and syllabus</li>
  <li>Class Updates: Admin can update class on last minute schedule changes</li>
  <li>Responsive Design: The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices</li>
  <li>More features to be added...</li>
</ul>

## Project Structure
/public<br/>
/src<br/>
  ├── /components       // Reusable components<br/>
  ├── /pages            // Page components<br/>
      │   ├── AdminPage<br/>
      │   ├── DashboardPage<br/>
      │   ├── LoginPage<br/>  
  ├── /routes           // Route definitions<br/>
  │   ├── PublicRoute.js<br/>
  │   ├── PrivateRoute.js<br/>
  │   └── AdminRoute.js <br/>
  ├── /context          // Context for global state (if using Context API)<br/>
  ├── /hooks            // Custom hooks<br/>
  ├── /utils            // Utility functions<br/>
  ├── /styles           // Styles (CSS, SCSS, etc.)<br/>
  ├── /assets           // Images, fonts, etc.<br/>
      │   ├── images<br/>
      │   ├── fonts<br/>
  ├── App.js            // Main application component<br/>
  ├── index.js          // Entry point<br/>

## Libraries

## Installation
