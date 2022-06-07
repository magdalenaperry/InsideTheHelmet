

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# InsideTheHelmet

<a href="https://github.com/magdalenaperry/InsideTheHelmet">
    <img src="https://via.placeholder.com/200" alt="Logo" width="100%" height="100%">
  </a>



![](https://img.shields.io/badge/License-MIT-white.svg)

## Table of Contents
1. [Description](#description)
1. [Technologies](#technologies)
1. [Prerequisites](#prerequisites)
3. [Installation](#installation)
3. [Usage](#usage)
2. [Visuals](#visuals)
8. [Contributors](#contributors)
9. [Roadmap](#roadmap)
10. [Contact](#contact)
11. [Acknowledgements](#acknowledgements)

---
## Description
Los Amigos is a mobile first, responsive web application built with user interface experience in mind. 
  
#### Deployed Links:  

[Los Amigos Link](https://morning-tor-09427.herokuapp.com/)


<p align="right">(<a href="#top">back to top</a>)</p>

---

## Technologies
- MYSQL
- Sequelize
- Bootstrap
- Handlebars.js
- JavaScript MVC
- Express

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Prerequisites
1. Node.js
    - [Node.js download](https://nodejs.org/en/)
2. verify installation
```  
node -v
npm -v
```   
<p align="right">(<a href="#top">back to top</a>)</p>

---

## Installation
1. Install dependencies at root
```
npm install
```

2. Create MYSQL schema
```
mysql -u root
  SOURCE db/schema.sql
  exit
```
3. seed data
```
npm run seed 
```

4. Create a .env file at the root of your file and add the following environment variables
```
  DB_NAME=NAMEOFYOURDB
  DB_USER=root
  DB_PASSWORD=yourdbpasswordatsetup
```

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Usage  

Run the application
```
npm start (or)
node server.js
```
---

## Visuals
<div align="center">  
  Home Page
<!-- ![Home Page Image](/public/images/homepage.png) -->

---
</div>

## Contributors

Magdalena Perry: 

- [Linkedin](https://www.linkedin.com/in/magdalena-perry/)

- [Github](https://github.com/magdalenaperry)

<p align="right">(<a href="#top">back to top</a>)</p>

---
## Roadmap
- [x] Create server.js and connection.js
- [x] 

<p align="right">(<a href="#top">back to top</a>)</p>

---
## Contact
For any additional questions, please reach out to me through email and follow me on GitHub.

Name - [Magdalena Perry LinkedIn](https:www.linkedin.com/in/magdalenaperry)

Github - [magdalenaperry](https://www.github.com/magdalenaperry)

email - [mageltron@gmail.com](mageltron@gmail.com)

<p align="right">(<a href="#top">back to top</a>)</p>

---
## Acknowledgements

-







[contributors-shield]: https://img.shields.io/github/contributors/magdalenaperry/InsideTheHelmet.svg?style=for-the-badge
[contributors-url]: https://github.com/magdalenaperry/InsideTheHelmet/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/magdalenaperry/InsideTheHelmet.svg?style=for-the-badge
[forks-url]: https://github.com/magdalenaperry/InsideTheHelmet/network/members
[stars-shield]: https://img.shields.io/github/stars/magdalenaperry/InsideTheHelmet.svg?style=for-the-badge
[stars-url]: https://github.com/magdalenaperry/InsideTheHelmet/stargazers
[issues-shield]: https://img.shields.io/github/issues/magdalenaperry/InsideTheHelmet.svg?style=for-the-badge
[issues-url]: https://github.com/magdalenaperry/InsideTheHelmet/issues
[license-shield]: https://img.shields.io/github/license/magdalenaperry/InsideTheHelmet.svg?style=for-the-badge
[license-url]: https://github.com/magdalenaperry/InsideTheHelmet/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/magdalenaperry
[product-screenshot]: images/screenshot.png

