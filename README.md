<p align="center">
  <img src="https://camo.githubusercontent.com/4baa988ea66778f288650492a114f2a114c147c1673952d51de30bb817300779/68747470733a2f2f746865636f646562797465732e636f6d2f77702d636f6e74656e742f77656270632d70617373746872752e7068703f7372633d687474703a2f2f746865636f646562797465732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032332f30322f66726f6e74656e642d6d656e746f722d7265766965772e706e67266e6f63616368653d31"/>
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
