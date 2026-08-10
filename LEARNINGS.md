From chatgpt - documentation structure.

Document	Purpose	When You Reference It

README.md	Project overview, setup instructions, how to run	Every time someone (including future you) clones the repo

ARCHITECTURE.md	High-level system design, data flow, key components	When adding new features or debugging structural issues

API.md or ENDPOINTS.md	Routes, parameters, responses (if building an API)	When building frontend or testing endpoints

FUNCTIONS.md	Descriptions of key functions, utilities, helpers	When refactoring or reusing code

DATABASE.md	Schema, relationships, migrations (if applicable)	When modifying data structures

LEARNINGS.md	Gotchas, decisions made, why you chose certain approaches	When revisiting old decisions or onboarding others

SETUP.md or DEVELOPMENT.md	Environment setup, dependencies, local dev workflow	When setting up on a new machine

INDEX.md	Brief description of what each doc contains and when to use it	First thing you read when returning to the project

Don't create all of these at once. Start with README, ARCHITECTURE, and LEARNINGS. Add others as they become necessary.