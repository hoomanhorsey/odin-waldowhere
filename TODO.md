## SETUP

**POSTGRES**
- [] Set up PostgreSQL
- [] Create new database as dev_user
- [] Test connection with psql
- [] Document connection string in .env.example

**PRISMA**
- [] Install Prisma
    - [] Create Prisma Schema
        - [] Define Models 
        - [] Run `prisma migrate dev --name init`
    - [] Set up .env with DATABASE_URL
    - [] Test Prisma Connection
    - [] Create seed script 

**PROJECT SETUP**
- [] Run npm init -y
- [] Install dependencies



## FRONTEND

**Image selection**
- [] Identify shortlist of images
- [] Select Image
  
**Design/map out front end**
- [] Research flexbox vs. grid vs combo - trade-offs for mobile layouts
- [] Design mobile first HTML page template (Title, Body)
- [] Include responsive breakpoints (mobile, tablet, desktop)
- [] Include features such as timer, score, persons remaining other things.
 
**UI functionality**

- [] Come back to this once I've designed the template, to add functionality relating to design.
- 
- [] Research vanilla JS vs. React for front end user interaction


- [] Function - refreshImageBoard() - on game restart

- [] Function - detectCursorOverImage(coordinates) - track cursor position over image
- [] Function - showTargetingBoxOnClick(coordinates) - display box and dropdown menu when cursor clicks on a person's zone
- [] Function - selectPersonFromDropdown(selectedName) 
- [] Function - deselectPerson() - click anywhere on the page other than the co-ordinates to deselect
  
- [] Function - getUserNameForScoreboard()

## BACKEND

**setup**
-[] initializeGame(remainingCharDB, image)

**Timer**
- [] Function - startTimer()
- [] Function - endTimer()
- [] Function - refreshTimer()
- [] Function - resetTimer()


**Scoring - check selection**
- [] Function - validateSelection(userInput, correctAnswer) 
- [] Function - handleCorrectAnswer()
- [] Function - handleIncorrectAnswer()
- [] Function - updateScore()
- [] Function - checkWinCondition(currentScore, totalPersons)
  
- [] Function - updateRemainingCharacters(remainingCharacterDb, foundCharacterId)
- [] Function - getRemainingCharacters()
  
- [] Function - restartGame()
- [] Function - resetCharacterDb()
- [] Function - resetScore()
  


**Scoring - record keeping**
- [] Function - updateFinalScore(userFinalScore, savedScores, username, time)
- [] Function - validateUsername
- [] Function - updateScoreDisplay

**Scoring - display**

- [] Function - getHighScores()

  


- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 
- [] Function - 