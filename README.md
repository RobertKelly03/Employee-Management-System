Homework-12
Employee Management System

The purpose of this application is to allow users to dynamically update, and manage their business. It utilizes the power of the mysql node module to use javascript to update our mySQL database and view our insertions using console.table.

Installation
Through Github create a clone of the repository. Once cloned to your local computer, in the terminal, run npm install. Load the seed.sql and the schema.sql into MySQLWorkbench. Once the packages have been installed and MySQLWorkbench is running, run node server.js in the terminal. Prompts should appear automatically after.

Functionality
Users are prompted for their desired action which can be: 1.View All Employees 2.Add Employee 3.Update Employee Role

All employee class attributes are handled in the server and, depending on which role is chosen, a salary, manager, and department are assigned


Requirments
This application utilizes several node modules. Run the following npm install accordingly

npm install mysql inquirer console-table
![node](https://user-images.githubusercontent.com/55413812/170153173-dc4ef3aa-ee50-4bff-99fa-029b318f21f3.png)
![node2](https://user-images.githubusercontent.com/55413812/170153310-99d7c299-fc40-4594-a260-74e46042a766.png)

![node4](https://user-images.githubusercontent.com/55413812/170153182-daaa10a2-84b6-44e3-84e3-02423e8ad076.png)

License
MIT License

Copyright (c) 2020 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
