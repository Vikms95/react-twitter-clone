# PROJECT NAME

# 👉 [LIVE PREVIEW](vikms95.github.io/react-wheres-waldo/) 👈

![alt text](src/assets/Waldo-showcase.gif "screenshot of memory card gameplay")

## Description


## Functionalities

- Create, customize and delete your own account
  - Create
    - Insert name, email and password and store that data to Firebase
  - Have your lists of followed accounts and receive any actions from them in your feed + receive notifications
  - Store a list of preferences per account based on the tags of each tweet the user
    has interacted with

- Top
  - Create Tweet button
    - Ability to write a Tweet, add a picture or other media, and display it to everyone who is following you

  - Search button
    - Search for accounts
    - Search for tweets based on keywords

- Left Sidebar
  - Twitter Logo / Home
    - Get all the activity from your followed accounts

  - Explore button
    - Get the trending content from the Twitter API and display it on the feed
      :(maybe sort it by how aligned it is from your preferences?)

  - Notifications
    - See all the activity related to you: mentions, liked posts ...

  - Profile button
    - Watch your profile as other users would see it

- Right Sidebar
  - Search button
    - Search users and tweets based on keywords

  - Chat
    - Have a lists of the users you are following and open a chat window where you can share any type of media private to the users of the chat


## Getting started

```
git clone https://github.com/Vikms95/react-twitter-clone.git
cd react-twitter-clone
npm install
npm start
```

## Technologies used

1. React
2. react-router
3. Typescript
4. styled-components
5. ESLint
6. Jest/TL
7. Firebase

## Project Objectives

## What I've learnt with this project / Challenges I faced 

## Notes / Room for improvement 

I do have some planning when I start my projects. I think like it helps me with not knowing how to start which is usually a problem for us.
So I usually do something like this:
-Create the app boilerplate 
-Create the notes.md file that you mention and jot down the following:
     -App functionalities(this is usually the ones that TOP requirements mention)
     -General idea of the hierarchy of components and which methods/state will every component have
     -How will these Components communicate between each other
     -Later I do create a TODO section where I will proceduraly create a todo check-list to know what to do next
-Then I try to get a general idea of how the UI will look, I use this webpage to create the view.png file that you mentioned: https://excalidraw.com/
With that you can download your drawing and include it in your project, so you have the project UI structure at all times right there.
-Then I start creating my Components in code and start filling out the functions and state that will populate that component. This is very basic and general, I just define the functions but I do not include any code within them, instead I do what's mentioned on the next step.
-When I'm done with defining the functions, I grab every single one and start pseudocoding the logic that will follow within the function body
function doCoolStuff(coolPar){
  //Declare cool variable
  //Declare cool array
  //Push cool variable within cool array
  //If cool array length is bigger than 32390232
     //Return from this function
  //Else
     //Yell at the user for not being cool
}

And from here on, it usually all comes down automatically 😄 