//4. Create an index.js file inside of the activity folder.
//5. Import the http module using the required directive.
// const http = require('http');
// //6. Create a variable port and assign it with the value of 300.
// const PORT = 3000;
// //7. Create a server using the createServer method that will listen in to the port provided above.
// http.createServer((res, req)=>{
// //9. Creat a condition that when the login route is accessed, it will print a message to the user the they are in the log in page.
// if(req.url == '/greeting'){
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.readableEnded('Welcom to the login page');
// }
// }).listen(PORT);
// //8. console log in the terminal a message when the server is succesfully running
// console.log(`Server is connected at localhost: ${PORT}`);

//Activity 2: NodeJS CRUD Operations
//1. Create an activity folder and an index.js inside of it.
//2. Create a simple server and the following routes with their corresponding HTTP Methods and Response:

//http//localhost:4000/, send a response "Welcome to Booking System!"
//http//localhost:4000/profile, send a response "Welcome to my profile!"
//http//localhost:4000/courses, send a response "Here are our available courses!"
//http//localhost:4000/courses, send a response "Add a course to our resources"

const http = require('http');
const port = 4000;

http.createServer((request, response)=>{
    if(request.url == '/greeting'  && request.method == 'GET'){
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end("Welcome to Booking System!");
    }
    if (request.url == '/profile')
    {
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end("Welcome to my profile!");
    }
    else if (request.url == '/courses')
    {
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end("Here are our available courses!");
    }
    else{
        response.writeHead(200, {'Content-Type':'text/plain'});
        response.end("Add a course to our resources");
    }
   
}).listen(port);

console.log(`Server is connected at localhost: ${port}`);

//continuation

//2. Create a simple server and the following routes with their corrresponding HTTP methods and responses:
//e. if the url is http://localhost:4000/updatecourse, send response "Update a course to our resources"
//f. if the url is http://localhost:4000/archivecourse, send a response "Archive courses to our resourse"

//3. Test all the endpoints in POSTMAN


// http.createServer( (request, response) => {
//     if (request.url == '/update-course' && request.method == 'GET') {
//         response.writeHead(200, {'Content-Type': 'text/plain'});
//         response.end("Update a course to our resources");
//     }else if (request.url == '/archive-course')
//     {
//         response.writeHead(200, {'Content-Type':'text/plain'});
//         response.end("Archive courses to our resourse");
//     }else{
//         response.writeHead(404, {'Content-Type':'text/plain'});
//         response.end("Data Not Found");
//     }

    
// }).listen(PORT);

// console.log(`Server is connected at localhost: ${PORT}`);

//expressJS
//1. Create a Get route that will access the /home route that will print out a simple message
//2. process a GET request at the /home rout using postman
//3. Create a GET route that will access the /users route the will retrieve all the users in the mock database.
//4. Process a GET request at the /users route using a post man
//5. createa DELETE route that will access the /delete-user route to remove a user from the mock database
//6. process a DELETE request at the /delete-usere route using postman
//7. export the postman collection and save it inside the root folder of out application

// http.createServer( (request, response) => {
//     if (request.url == '/home' && request.method == 'GET') {
//         response.writeHead(200, {'Content-Type': 'text/plain'});
//         response.end("Welcome User");
//     }else if (request.url == '/users')
//     {
//         response.writeHead(200, {'Content-Type':'text/plain'});
//         response.end("all the users in the mock database has been retrieve");
//     }else if (request.url == '/delete-user')
//     {
//         response.writeHead(200, {'Content-Type':'text/plain'});
//         response.end("a user from the mock database has been deleted");
//     }

    
// }).listen(PORT);

// console.log(`Server is connected at localhost: ${PORT}`);
