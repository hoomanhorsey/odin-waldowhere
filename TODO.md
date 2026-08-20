Notes on task order

Back to coding, I think I am going to do this.

- commit my backend pseudocode file
- set up prisma and my prisma schemas
- merge setup branch to main
- create a new branch, backend- app
- create a app.js main backend file.
- create routes, controllers and repository files.
- insert placeholder functions>

Or should I work on front end at one of the stages?

Or can you reocmmend a different order?

Your order is reasonable. A few considerations:

Your sequence:

    Commit pseudocode (checkpoint).
    Set up Prisma schemas (defines database structure).
    Merge to main (stable state).
    Create backend structure (routes, controllers, repository with placeholders).

This establishes backend skeleton before implementation, which is sound.

Alternatives to consider:

    Interleave frontend work: Once Prisma schemas are defined, the frontend knows the API contract (endpoint paths, request/response shapes). You could build frontend components in parallel with backend implementation rather than waiting for the full backend. This allows both to develop simultaneously and catch contract mismatches early.

    Implement one full endpoint first: Pick one endpoint (e.g., verifyLocation), implement it completely (schema → repository → controller → route → frontend integration), then repeat for others. This validates your architecture with real code before scaling up.

    Frontend-first stub: Build frontend components with mock API calls first, then wire backend endpoints as they are completed. Ensures frontend requirements are clear before backend implementation.

Recommendation: Your sequence is solid. After merging to main, consider whether frontend and backend can proceed in parallel (they can, with clear API contracts from your pseudocode). Avoid waiting for one side to finish entirely before the other starts.

Which approach fits your workflow preference?



## SETUP

**POSTGRES**
- [x] Set up PostgreSQL
- [x] Create new database as dev_user
- [x] Test connection with psql
- [] Document connection string in .env.example

**PROJECT SETUP**
- [x] Run npm init -y
- [x] Install dependencies

**PRISMA**
- [x] Install Prisma
    - [] Create Prisma Schema
        - [] Define Models 
        - [] Run `prisma migrate dev --name init`
    - [] Set up .env with DATABASE_URL
    - [] Test Prisma Connection
    - [] Create seed script 



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
- [x] Research vanilla JS vs. React for front end user interaction - decided to go with React

- **[x] GameContainer/ component**
  - [x] **GameBoard/ component**
  - [x] **OutlineFoundCharacter/ component**
  - [x] **CharacterMenu/ component**
  - [x] **DisplayFoundCharacteres/ component**
  - [x] **Timer/ component**  
  - [x] **GameResultsModal/ component**
  - [x] **Leaderboard/ component**

## BACKEND

**gameLogic**

- [] [API] - verifyLocation(coordinates)  
- [] [API] - verifyCharacterGuess(selectedCharacter, userClickCoordinates)    

**Scoring - check selection**

- [] [API] - saveScore(username, elapsedTimepsed)  

**Timer**

**Character Array**


