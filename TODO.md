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
- [] Research vanilla JS vs. React for front end user interaction
- [] User clicks on person in photo, targeting box appears and drop down menu of names appears.
- [] User clicks away and targeting box and drop down menu disappear
  
- [] Function - detectCursorOverImage(coordinates) - track cursor position over image
- [] Function - showTargetingBox(coordinates) - display box and dropdown menu when cursor enters a person's zone
- [] Function - selectPersonFromDropdown(selectedName) 
- [] Function - deselectPerson()
  

  ## BACKEND

- [] Function - startTimer()
- [] Function - endTimer()
- [] Function - refreshTimer()
- [] Function - 
- [] Function


**Timer**

**Scoring - check selection**

- [] Function - validateSelection(userInput, correctAnswer) 
- [] Function - handleCorrectAnswer()
- [] Function - handleIncorrectAnswer()
- [] Function - updateScore()
- [] Function - checkWinCondition(currentScore, totalPersons)

**Scoring - record keeping**
- [] Function - updateFinalScore(userFinalScore, savedScores)
- [] Function - updateScoreDisplay

- [] Design/map out functions for backend
  


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