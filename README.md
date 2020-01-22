# Quora Prototype Application 

## Abstract 

Quora is an question-and-answer website where questions are asked, answered, and edited by Internet users, either factually or in the form of opinions. The developed project helps the entire fraternity to gain and share knowledge. This platform gives opportunity to ask the questions and get the lacking knowledge. It provides the user an opportunity to search the questions and required knowledge from the answers.

The user mostly see the answer which has most up votes. Also, user can able to see his/her own answers and question. It requires client to register first and then proceed with his requirements. Also, verification of the user name is not required. This application is the similar prototype application of Quora. 

The development of this project is completely based of the user needs. Through this user can able to see his own and old answers by year and sorted ascending or descending order. It also provides the functionality of extensive search through name, question or topic.

## Introduction

One of the biggest reasons for developing this application is the user get the solution within short time and with proper explanation. Quora prototype application provides facility that user can ask the question and look the question from the Quora database. The search functionality of the application is developed in such a way that, user can search people, question and even topic within single search.

Further, the use can answer any question if he/she is ware of the answer. The user also can comment on the answer given by other users. He can explain his views on respective answers. The Quora Prototype application provides this facility to help the user/client with minimal work.

The development of the project consists of multiple phases wherein, we started with the initial login and signup part with inclusion of Redux for store management, passport for authentication and KAFKA as a message passing queue.


## Members 

   | Name                           |              Email ID                 | 
   |--------------------------------|---------------------------------------|
   | **Laxmikant Bhaskar Pandhare** |   laxmikantbhaskar.pandhare@sjsu.edu  |
   | **Tosha Kamath**               |      toshasudhir.kamath@sjsu.edu      |
   | **Meghna Tiwari**              |      meghna.tiwari@sjsu.edu           | 
   | **Rohankumar Shah**            |      rohakumar.shah@sjsu.edu          |
   | **Vaibhav Gupta**              |       vaibhav.gupta@sjsu.edu          |
   

## High Level Design Diagram
![alt text](https://github.com/laxmikantbpandhare/Quora-Prototype-Application/blob/master/images/High%20Level%20Design.png)

## Schema
![alt text](https://github.com/laxmikantbpandhare/Quora-Prototype-Application/blob/master/images/Schema.png)

## Build Instructions

Two folders are there: 

#### Frontend: 

Goto-> frontend -> Quora and run run npm install ( it will install all dependency for this application) 

then npm start in cmd. 

#### Backend: 

Backend: Goto ->backend -> and run run npm install ( it will install all dependency for this application) then npm start. your server will start at port 3001

Import all the dependeccies required to run spring boot applciation and run the application.


## Application
A glimpse of the application

#### Signup by user.

![alt text](https://github.com/laxmikantbpandhare/Quora-Prototype-Application/blob/master/images/Signup.png)

#### Login by user.

![alt text](https://github.com/laxmikantbpandhare/Quora-Prototype-Application/blob/master/images/Login%20in%20image.png)


## Performance Graphs.

#### Performance Graph generated depending upon different number of users

![alt text](https://github.com/laxmikantbpandhare/Quora-Prototype-Application/blob/master/images/Performance%20Grapn%20on%20number%20of%20users.png)

#### Performance Graph generated on different scenarios (Scenarios mentioned below)

   |                    Scenarios                       | 
   |--------------------------------------------------- |
   |                    **Base**                        |
   |           **Base + Connection Pooling**            |
   |        **Base + Connection Pooling + SQL Caching** |
   | **Base + Connection Pooling + SQL Caching + KAFKA**|


![alt text](https://github.com/laxmikantbpandhare/Quora-Prototype-Application/blob/master/images/Performance%20Grpahs%20in%20different%20scenrios.png)
