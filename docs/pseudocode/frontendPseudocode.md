## GameContainer - component

**State-** 
  - gameStatus (initialized to'idle')
    - different states will be 'idle', 'playing', 'awaitingUserName' and 'completed'
  - gameCharacters (initialized from src/data/characters.js)
  - timeElapsed (initialized to 0) 
  - userClickCoordinates (initalized to false)
  - verifiedCharacterCoordinates (initialized to false)
  - selectedCharacter (initialized to false)

**Props**

**Effects**

    <!-- Timer effect: increment timeElapsed every second while game is  playing -->
      - if gameStatus === 'playing'
        -  declares a const intervalId
        - key const = setInterval() that runs setTimeElapsed, at a 1000ms interval
        - return a clearInterval(intervalId)
      - Dependency [gameStatus]

    <!-- Wincondition check -->
      - if gameStatus === 'playing'
          - const foundCount = gameCharacters.filter(char => char.found)length 
          - const totalCount = gameCharacters.length
          - if foundCount === totalCount {set gameStatus = 'ended'}, 
      - dependency [characters, gameStatus]

    <!-- Wincondition consequences -->
      - if gameStatus ==='ended'
        - pause timer, 
        - display results in a modal?
        - trigger animations????

**Functions**
   
    - handleImageClick()
      - passed into GameBoard as a callback

      - if gameStatus === 'playing'
        - sends co-ordinates to backend API to check whether the co-ords correspond with a character
          - const result = await api.verifyLocation(coordinates)
          - result will be in the form
            - { success: true, coordinates: {x, y} }
            - { success: false, error: "message" }
          - if result.success === true, setVerifiedCharacterCoordinates (user Coordinates)
          - else, setVerifiedCharacterCoordinates (false)
        - verifiedCharacterCordinates is a state passed into OutlineCharacter component that renders an outline of the char depending on state.

    - handleCharacterSubmit(selectedCharacter, userClickCoordinates)
      - sends selectedCharacter and userClickCoordinates to backend.
      - result will be in the form
        - { success: true, characterId: 123 }
        - { success: false, error: "incorrect selection" }
      - if correct, 
        - displays correct
        - set 'found' value of selectedCharacter to true in from gameCharacters
      - if incorrect
        - displays 'incorrect'
     
    - onSaveScore(username, timeElapsed)
      - sends userName and timeElapsed to leaderboard array
        - result = await api.saveScore
        - on result = success, setGameStatus ('completed')
       
    - restartGame()
      - setGameStatus('idle')
      - setTimeElapsed(0)
      - setVerifiedCharacterCoordinates(false)
      - setUserClickCoordinates(false)
      - setSelectedCharacter(false)
      - reinitialize gameCharacters with found: false for all

  

**Return**

if gameStatus = 'idle';
    - return < Start /> button with onClick that setsGameStatus('playing')
  
if gameStatus = 'playing' || 'ended' || 'completed':
  - return 
    - **GameBoard - component**
            - prop: handleFoundCharacter={handleFoundCharacter} 
    - **Timer - component**
            - prop: timeElapsed={timeElapsed}
  
    if gameStatus = 'ended'
      - **GameResultsModal**
      - prop: timeElapsed={timeElapsed}
      - prop: onSaveScore()
    if gameStatus = 'completed'- 
      - **Leaderboard**
      - prop: restartGame()
  

## GameBoard - component

**State**

**Props**
    - handleImageClick()
    - gameCharacters - state
    - gameStatus - state

**Effects**

**Functions**

**Return**
    - JSX
      - gameImage - onClick handleImageClick(Coordinates)


## OutlineFoundCharacter - component

**State**
  
**Props**
    - verifiedCharacterCoordinates -state

**Effects**
**Functions**
**Return**
if verifiedCharacterCoordinates != false:
    - JSX
      - Outline overlay of character

## CharacterMenu - component

**State**
    - 
  
**Props**
    - verifiedCharacterCoordinates - state
    - gameCharacters - state
  
    - handleCharacterSubmit()

**Effects**
**Functions**
**Return**
if verifiedCharacterCoordinates != false:
    - JSX
      - dispay drop down menu of characters - onSubmit handleCharacterSubmit(selectedCharacter)

## DisplayFoundCharacters
**State**
    - 
  
**Props**
    - gameCharacters - state
  
**Effects**
**Functions**
**Return**
- JSX
  - Filter gameCharacters for found: true entries
  - Render name label positioned at x, y coordinates for each


## Timer - component
**State**
**Props**
**Effects**
**Functions**
**Return**
    - JSX 
      - Timer element

## GameResults Modal - component

**State**

**Props**
  - timeElapsed - state
  - gameRestart()
**Effects**
**Functions**
**Return**
  -  JSX
     -  display final elapsed time
     -  input field for username
     -  onclick = onSaveScore(username, timeElapsed)"
     -  onclick 'Playagain' button - calls restartGame()
     - setGameStatus = 'complete'

