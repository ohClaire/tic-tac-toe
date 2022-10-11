# Tic Tac Toe

## Table of Contents
  - [Introduction](#introduction)
  - [Deployed Page](#deployed-page)
  - [Technologies](#technologies)
  - [Set Up](#set-up)
  - [Features](#features)
  - [Page Demo](#page-demo)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Organizational Resources](#organizational-resources)
  - [Sources](#sources)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)
  - [Credits](#credits)

## Introduction
This tic-tac-toe game can be played by two human players. Each player has an assigned token, which they will take turns placing inside a box until there is a winning match or a draw. A player can win by connecting 3 tokens horizontally, vertically, or diagonally. The winner will be given points and the game will reset.

This project was assigned as a part of Turing School of Software and Design's Front-End program, students had one week to complete it.

## Deployed Page

Visit my site [here](https://ohclaire.github.io/tic-tac-toe/)!

## Technologies
  - Javascript
  - HTML
  - CSS
    - Flexbox
    - BEM methodology

## Set Up
1. Fork this repo  
2. Clone the repo to your local machine
3. View the project in the browser by running `open index.html` in your terminal

## Features
The web page is set up to have a center board and a player on each side. The player has a token and score assigned to them. Each player starts the game with 0 wins. Above the center board, a banner tells the players whose turn it is to place their token. The player can place their token by clicking inside of the box or using the Tab and Enter keys.

The game ends when there is a winner or a draw. If there is a winning match, indicated by the highlighted yellow boxes, the top banner declares the winner and their score will increase. If there is a draw, the top banner declares a draw and the scores remain the same.

The game will restart by clearing the center board and having the second player from the previous game become the first player.

Extension: The players can reset the game by refreshing the page and not worry about losing their score. Local storage is used to save their wins and this data will persist across web refreshes.

## Page Demo
![Example of button functionality](https://media.giphy.com/media/3aE2Xhl5GSVfipUenv/giphy.gif)


## Possible Future Extensions
- Give players several tokens to choose from. This makes the game more interactive as it allows players to select their preferred token to play with.
- Add animation to tokens inside the tic-tac-toe grid that will make them bigger when there is a winning match.

## Organizational Resources
- [Trello Board](https://trello.com/b/g7Yf3azF/final-solo-project)

## Sources
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard)
  - [W3Schools](https://www.w3schools.com/html/html5_semantic_elements.asp)
  - [CSS-TRICKS](https://css-tricks.com/)
  - [Stackoverflow](https://stackoverflow.com/questions/29755233/trouble-with-settimeout-with-addeventlistener)
  - [BEM](http://getbem.com/)

## Contributors
  [Hannah Celemen](https://www.linkedin.com/in/hannah-celemen/)

## Project Specs
  - The project spec & rubric can be found [here.](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html)
  
## Credits
[Icons8](https://icons8.com/) for letting me use their icons for free!
