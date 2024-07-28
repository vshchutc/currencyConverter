# Application technologies:

Vite + React + Zustand + Typescript + styled-components

The app works as Google currency converter.

# How to install the app:

once the code is downloaded,
open the terminal from the repo folder and run:
``npm i``
``npm run dev``

# Application architecture:

## Components
 - converter:
 files related, to converter feature
 - shared:
 agnostic reusable components;

 if new features will be added, new folders with descriptive names will be created;

 ## models
 currently only for currency data

 ## stores
 currently only for currency data. All logic is here and in utils - it is easier to test it separately from components; it is also doos idea to manage data flow in zustand - it is lightweight and helps to avoid prop drilling and reduces rerenders;

 currently there are 2 currencies and quite similar functions to convert them;
 if there will be possibilities

 ## utils
 data transform and data validation, separated here for easier tests in the future