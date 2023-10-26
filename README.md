# mock-reel-talk-challenge

Back end node.js server for mock setup for Reel Talk challenge. 
Separated functions into files based on purpose and use.
Index file contains all API calls.

Functions contain the inner workings for API workings.

Firebase keys and TMDB API key located in a .env file.
Firestore sorted in collections users and posts.

auth.ts - Users can Sign In, Sign Up, Sign Out, Reset Password, and confirm the Reset Password

index.ts - Contains API calls: /, /api/signup, /api/signin, /api/signout, /api/updatePassword, /api/getmovies

reel.ts - Gets Movie list from TMDB

social.ts - Contains function for post and liking a post

types.ts - Basis example of connecting and linking data in database

