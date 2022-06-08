---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: e18-co227-Augmented-Reality-Guidance-System
title: Augmented Reality Guidance System
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Augmented Reality Guidance System

---

This is a sample image, to show how to add images to your page. To learn more options, please refer [this](https://projects.ce.pdn.ac.lk/docs/faq/how-to-add-an-image/)

![Sample Image](./images/sample.png)


## Team
-  E/18/181, Lakshitha Konara, [email](mailto:e18181@eng.pdn.ac.lk)
-  E/18/297, Piumal Rathnayake, [email](mailto:e18297@eng.pdn.ac.lk)
-  E/18/402, Chathura Wimalasiri, [email](mailto:e18402@eng.pdn.ac.lk)

## Table of Contents
1. [Introduction](#introduction)
2. [Requirement Gathering](#requirement-gathering)
3. [Design and implementation](#design-and-implementation)
4. [Links](#links)

---

## Introduction

The department of Computer engineering of the University of Peradeniya has multiple important locations such as laboratories, lecture rooms, conference rooms etc. Each one of those locations is dedicated to various types of work. So every location has details like people in charge, a set of available features, equipment and usages, seating arrangements, rules etc. Most of these details are recorded in the department archives and some are not documented at all. So when a visitor comes to the department due to some requirement, 
He/she may have trouble finding the required room or may have trouble finding the details of a room/location. Currently, there’s no digitalized directory for this, so the people should have to find those details by asking somebody else. The information taken using that method may be unreliable sometimes. As the students of the department of computer engineering, we could develop a reliable digital solution to prevent these kinds of situations. For that, there are 2 approaches we can apply.
1. Developing a 3D interactive map for the department
2. Developing an AR guidance system for the department

Developing a 3d interactive map can solve the problems related to navigation such as helping to find a specific place easily and fastly. It can provide the ability to see a 3d interactive model of the department that allows the users to see the overall structure and the main details of the rooms. This method can be used by people who are not inside the department at the time of requirement.

The second method is to develop a Web-based augmented reality guidance system, which allows the users to scan markers placed in the department and see the details of the room associated with the scanned marker. This method can be used by people who are in front of some unknown room in a department building at some instance to find the details of that room/location.

Under this project, we’ll be implementing the second method, which is the Augmented reality guidance system and the other method will be implemented parallelly as another project by another group.

> Augmented Reality is the technology that makes it possible to overlay content in the real world. It can be provided for several types of devices: handheld (like mobile phones), headsets, desktop displays, and so on. For handheld devices (more generally, for video-see-through devices) the 'reality' is captured from one or more cameras and then shown on the device display, adding some kind of content on top of it.

## Requirement gathering

### Users

As an initial step, we gathered the requirements of the project with a stakeholder analysis. From that, 4 main stakeholders who interact and take benefits from the system which is to be designed were identified.

1. Students
2. Academic Staff
3. Non-academic staff
4. Visitors

#### Students

Students can be divided into 2 categories. 
1. Students from the Computer Eng department
2. Students from other departments

The requirements of the students are as follows:

* Having the ability to find the location of a required room/place in the department.
* Having the ability to find the list of rooms/facilities available on a floor
* Having the ability to find the person in charge and assigned non-academic staff to a selected room/laboratory.
* Having the ability to find the capacity and features of a selected room/laboratory.
* Having the ability to find the assigned offices of lecturers/instructors with their details.
		
#### Academic staff

The requirements of the academic staff are as follows:

* Having the ability to find the location of a required room/place in the department.
* Having the ability to find the list of rooms/facilities available in a selected floor
* Having the ability to find the person in charge and assigned non-academic staff to a selected room/laboratory.
* Having the ability to find the capacity and features of a selected room/laboratory.
* Having the ability to find the assigned offices of lecturers/instructors with their details.
* Having the ability to find the schedules of a selected laboratory/lecture room/conference room.

#### Non-academic staff

The requirements of the non-academic staff are as follows:

* Having the ability to find the location of a required room/place in the department.
* Having the ability to find the list of rooms/facilities available in a floor
* Having the ability to find the person in charge and assigned non-academic staff to a selected room/laboratory.
* Having the ability to find the assigned offices of lecturers/instructors with their details.

#### Visitors

The requirements of the visitors are as follows:

* Having the ability to find the location of a required room/place in the department.
* Having the ability to find the list of rooms/facilities (overview) available in a floor
* Having the ability to find the assigned offices of lecturers/instructors with their details.
* Having the ability to find the available times of the academic staff.

### Requirement analysis

By analysing the above requirements, the functional requirements of the system were defined. 

* Ability to view an overview of a selected floor
  * List of available rooms/labs
  * Floor plan

* Ability to find the details of a selected room
  * Details of assigned staff
  * List of available facilities
  * Capacity
  * Available time

* Ability to find the details of a selected laboratory
  * Details of assigned staff
  * List of available facilities
  * Capacity
  * Rules of the laboratory
  * Available time

## Design and implementation 

After identifying the list of users and their requirements, the design of the solution was planned. For the solution, web-based augmented reality technology was chosen as the main technology.

![4156882](https://user-images.githubusercontent.com/27498587/172439066-1d0b9bfb-325c-45c8-ad51-e8a7d595661e.png)

### High-level system architecture

<img width="1106" alt="Architecture Diagram Example - Multiplayer (Community) (2)" src="https://user-images.githubusercontent.com/27498587/172439142-444b7346-40ea-4082-b561-8d2cd5627412.png">

### Technology Stack

1. HTML/CSS/JavaScript (Used for creating and styling the web application)
2. ThreeJS (Used for rendering 3D objects)
3. ArJS (Used as the augmented reality library.)
    * Very Fast: It runs efficiently even on phones
    * Web-based: It is a pure web solution, so no installation is required. Fully javascript based, using three.js + A-Frame + jsartoolkit5
    * Open Source: It is completely open-source and free of charge!
    * Standards: It works on any phone with [webgl](http://caniuse.com/#feat=webgl) and [webrtc](http://caniuse.com/#feat=stream)

## Links

- [Project Repository](https://github.com/cepdnaclk/{{ page.repository-name }}){:target="_blank"}
- [Project Page](https://cepdnaclk.github.io/{{ page.repository-name}}){:target="_blank"}
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
