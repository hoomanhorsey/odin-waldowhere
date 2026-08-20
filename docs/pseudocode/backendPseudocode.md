


## Routes


## APIs



**gameLogic**

- [] [API] - verifyLocation(coordinates)  
  - route - GET /characters/verify-location?x=n&y=n
  - frontend trigger: handleImageClick  
  - operation:  
    - calls gameDB to query character coordinates  
    - compares passed coordinates against character array
    - returns whether a character exists at that location
  - returns:  
    - { success: true}  
    - { success: false, message: 'No character found at these co-ordinates'}
    - { success: false, message: 'server/database error'}

- [] [API] - verifyCharacterGuess(selectedCharacter, userClickCoordinates)
  - route - GET /characters/verify-character-guess?selected-character=x&click-x=n&click-y=n 
  - frontend trigger: handleCharacterSubmit  
  - operation:  
    - calls gameDB to verify that selectedCharacter co-ordinates = range userClickCoordinates
    - returns
  - returns:  
    - { success: true, characterId: 123 }  
    - { success: false, message: 'User submitted wrong character name'} 
    - { success: false, message: 'Server/database error' } 
  

**Scoring - check selection**

- [] [API] - saveScore(username, timeElapsed)
  - route - POST /score
    - Content-Type: application/json
     {
        "username" : "username",
        "timeElapsed": n
     } 
      
  - frontend trigger: onSaveScore  
  - operation:  
    - validates username (empty strings, SQL injection etc)
    - inserts username and timeElapsed into leaderboardDB  
    - returns leaderboard, sorted by lowest scores, 10 results
    - returns  
      - { success: true, message: "Score saved", leaderboard: leaderboard }
      - { success: false, message: "Username invalid"}
      - { success: false, message: "serverdatabase error"}  
  - [Note] - leaderboard cannot be retrieved without a save game. New API needed if there is a need to retrieve the leaderboard separately.  

**Timer** [Optional, if backend timer verificaiton required]

Possible time verification backend  

- startStartTime()  
- when game starts front end sends a request to  backed for a timestamp, which it returns and saves as  start time in state.  Then when game ends, the frontend sends a request to backend for another timestamp, which it returns and saves in state.  
- Then the endtime is subtracted from the start time. If there is a greater than 5 second difference between this time period and the time elapsed then the game will throw and error and say there is a timing irregularlity.


**Character Array**
- [] Create characterData module with hardcoded character objects (id, name, x coordinates, y coordinates, found)