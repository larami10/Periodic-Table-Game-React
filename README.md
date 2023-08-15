# Periodic Table Game

A simple guessing game based on the Periodic Table of elements. It has the following features:

1. words.js contains all Periodic Table elements in an array of objects.
2. At start, a random element from words.js will be displayed for the user to guess it's element symbol.
3. One to two input fields will display depending on the number of characters in the element symbol for the current element to be guessed.
4. User will be provided the:
   1. element name
   2. number of guesses they have
   3. a list of wrong guesses submitted
5. User can input one to two characters based on provided input fields.
6. Once user submits their guess, the app will check if their guess is correct:
   1. If guess is correct, a modal will be displayed congratulating the user along with a button to move on to the next element to be guessed.
   2. if guess is not correct:
      1. the user can continue guessing until they run out of remaining guesses.
      2. if user is out of remaining guesses, a modal will be displayed letting the user know the correct answer and providing a button to move on to the next element.
7. The modal provided after a successful or failing guess can be closed by:
   1. clicking on the "Next Element" button
   2. clicking outside of the modal which will also display the next element and reset the values to "Remaining Guesses" and "Wrong Guesses"

## How to use the Project

This project is being hosted by Firebase [Periodic Table Game using React](https://periodic-table-game-react.web.app/)
