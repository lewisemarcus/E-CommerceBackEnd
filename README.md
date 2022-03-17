#  E-Commerce Back End

  ![License: MIT ](https://img.shields.io/badge/License-MIT-informational)

  ## Description

  ```md
GIVEN a functional Express.js API
WHEN a user adds their database name, MySQL username, and MySQL password to an environment variable file
THEN a user is able to connect to a database using Sequelize
WHEN a user enters schema and seed commands
THEN a development database is created and is seeded with test data
WHEN a user enters the command to invoke the application
THEN the user's server is started and the Sequelize models are synced to the MySQL database
WHEN a user opens API GET routes in Insomnia for categories, products, or tags
THEN a data for each of these routes is displayed in a formatted JSON
WHEN a user tests API POST, PUT, and DELETE routes in Insomnia
THEN a user is able to successfully create, update, and delete data in their database
```


  ## Table of Contents

  - [Installation](#installation)

  - [Walkthrough](#walkthrough)

  - [Usage](#usage)

  - [Author(s)](#authors)

  - [Contributing](#contributing)

  - [License](#license)

  - [Questions](#questions)

  ## Installation

  Use the package manager [npm] to install dotenv,express,mysql2,sequelize,nodemon.
```bash

npm install dotenv
npm install express
npm install mysql2
npm install sequelize
npm install nodemon

# To run:
npm start

```

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)


  ## Walkthrough

  Here is a link to a video going over the steps to use the application: [E-Commerce Back End Demo](https://youtu.be/aogjGsq8_2Y)

  ## Usage
  
N/A

  ## Author(s)

  - [lewisemarcus](https://github.com/lewisemarcus)


  
## Tests
  
N/A

  ## Contributing
 
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

  
## License

  Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.

  For more information on the License, please visit:  https://opensource.org/licenses/mit

  ## Questions
  
- [Marcus Lewis](https://github.com/lewisemarcus) - Lead Author's GitHub Link
  
- If you would like to email me for further questions, please send one to: <lewisemarcus@gmail.com>
