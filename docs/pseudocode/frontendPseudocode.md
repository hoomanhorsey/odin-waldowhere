

## GameContainer - component

**State-** 
  - gameStatus (initialized to f'idle')
    - differnt states will be 'idle', 'playing', 'awaitingUserName' and 'completed'
  - charactersToFind (initialized from src/data/characters.js)
  - timeElapsed (initialized to 0) 
  - characterCoordinates (initalized to false)
  - selectedCharacter (initialized to false)

**Props**

**Effects**

    <!-- Timer effect: increment timeElapsed every second while game is  playing -->
      - if gameStatus === 'playing'
        -  declares a const intervalId
        - key const = setInterval() that runs setTimeElapsed, at a 1000ms interval
        - return a clearInterval(intervalId)
      - Dependency [gameStatus]

    <!-- Wincondition effect -->
      - if gameStatus ==='ended'
        - [todo]

**Functions**
    - handleImageClick()
      - passed into GameBoard as a callback
      - sends co-ordinates to backend API to check whether the co-ords correspond with a character
        - if correct, setCharacterCoordinates (user Coordinates)
        - if incorrect, setChracterCordinates (false)
        - CharacterCordinates is a state passed into OutlineCharacter component that renders an outline of the char depending on state.

    - handleCharacterSubmit(selectedCharacter, characterCoordinates)
      - sends selectedCharacter and characterCoordinates to backend.
      - if correct, 
        - displays correct
        - remove selectedCharacter from charactersToFind
      - if incorrect
        - displays 'incorrect'
  

**Return**

if gameStatus = 'idle';
    - Start button with onClick that setsGameStatus('playing')
  
if gameStatus = 'playing':
- **GameBoard - component**
        - prop: handleFoundCharacter={handleFoundCharacter} 
- **Timer - component**
        - prop: timeElapsed={timeElapsed}




## GameBoard - component

**State**

**Props**
    - handleImageClick()
    - charactersToFind - state
    - gameStatus - state

**Effects**

**Functions**

**Return**

if gameStatus = 'playing'
    - JSX
      - gameImage - onClick handleImageClick(Coordinates)
if gameStatus = 'awaitingUsername'
    - todo
if gameStatus = 'completed'
    - todo
if gameStatus = 'idle'
    - todo


## OutlineFoundCharacter - component

**State**
  
**Props**
    - characterCoordinates -state

**Effects**
**Functions**
**Return**
if characterCordinates != false:
    - JSX
      - Outline overlay of character

## CharacterMenu - component

**State**
    - 
  
**Props**
    - characterCoordinates - state
    - charactersToFind - state
  
    - handleCharacterSubmit()

**Effects**
**Functions**
**Return**
if characterCordinates != false:
    - JSX
      - dispay drop down menu of characters - onSubmit handleCharacterSubmit(selectedCharacter)

## DisplayFoundCharacters

**State**
    - 
  
**Props**
    - charactersToFind - state
  
**Effects**
**Functions**
**Return**
- JSX
  - Filter charactersToFind for found: true entries
  - Render name label positioned at x, y coordinates for each


## Timer - component

**State**
**Props**
**Effects**
**Functions**
**Return**
    - JSX 
      - Timer element




- game display format

    game page is made up of the following components

    <scoreBoard />
    <gameBoard />



- Function - refreshImageBoard()

    returns boardImage in jsx

