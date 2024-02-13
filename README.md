# typescript-sandbox
Project for testing and noting down typescript features


## Installation

    npm install -g typescript

    tsc --version

enable tsc to work

    Set-ExecutionPolicy -Scope CurrentUser Unrestricted


## Project setup

Initialize the repo (as usual)

    npm init

Install TypeScript as a dev dependency in your project

    npm install typescript --save-dev

Create a tsconfig.json File

    npx tsc --init


## Example

Person.ts:

    class Person {
        constructor(private name: string) {}
    
        greet() {
        console.log(`Hello, my name is ${this.name}.`);
        }
    }
    
    const person = new Person("John Doe");
    person.greet(); // This will output: "Hello, my name is John Doe."

Compile the Person.js file

    tsc Person.ts

Run it 

    node Person.js


## Organize

    use `src` for sources and `dist` for generated code

    my-project/
    ├─ src/
    │  ├─ Person.ts
    ├─ dist/

in `tsconfig.json`:

    "compilerOptions": {
        "rootDir": "./src"
        "outDir": "./dist"
    },

    "include": [
      "src/**/*.ts"
    ], 

## Automate

install ts-node for running TypeScript files directly, and nodemon for automatically restarting the node application when file changes in the directory are detected

    npm install ts-node nodemon --save-dev

Inside `package.json`

    "scripts": {
        "build": "tsc",
        "start": "node dist/index.js",
        "dev": "nodemon --exec ts-node src/index.ts"
    }

## Run

Build project

    npm run build

Run the project

    npm start

For development (react on changes):

    npm run dev

With

    "prestart": "npm run build",

..the command `npm start` will both build and run the application

Further, using `npm start --silent` it will just build and run the application without any additional output.

Structure Interfaces in `/src/interfaces` and implementations in `/src/models`

Also use `utils`, `controllers` or `services`

src/interfaces/IPerson.ts

    export interface IPerson {
        name: string;
        greet(): void;
    }


src/models/Person.ts

    import { IPerson } from "../interfaces/IPerson";

    export class Person implements IPerson {
        constructor(public name: string) {}

        greet(): void {
            console.log(`Hello, my name is ${this.name}.`);
        }
    }

// src/index.ts

    import { Person } from "./models/Person";

    const person = new Person("John Doe");
    person.greet(); // Outputs: "Hello, my name is John Doe."


## .gitignore:

    # Dependency directories
    node_modules/

    # Build outputs
    dist/
    build/
    out/

    # TypeScript cache
    *.tsbuildinfo

    # Environment files
    .env
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local

    # IDE and Editor folders
    .vscode/
    .idea/
    *.swp
    *.swo
    *.sublime-workspace

    # OS files
    .DS_Store
    Thumbs.db

    # Optional: npm debug logs
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
