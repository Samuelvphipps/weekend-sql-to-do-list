[x]Setup
    [x]server

    [x]html
    [x]client.js -> source to html
    [x]jquery ->source to html
    [x]css
    [x]routes set up for endpoint /todo
    [x] create database 
        database structure:
    NAME: task_list
    HEADING OF TABLE: tasks
    Values: TASK    VARCHAR
            COMPLETED   BOOLEAN

    [x]modules - connect database
        

[X] Please include a `database.sql` text file in your repo that includes all of your `CREATE TABLE` queries. This is so we can re-create your database while testing your app.

[X] Create a front end experience that allows a user to create a Task.

[X]GET and RENDER

[X] Whenever a Task is created the front end should refresh to show all tasks that need to be completed.

[X] When the Task is created, it should be stored inside of a database (SQL)

[X] Each Task should have an option to 'Complete' 
[X] or 'Delete'.

[X] When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.

[X] Whether or not a Task is complete should also be stored in the database.

[X] Deleting a Task should remove it both from the front end as well as the Database.

[X] Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. You will need to use this name in your database connection configuration on your server.



Logic needed:
[x]-On ready get and render Task add and display control
[x]On submit post new data to server and then to DB
    on complete post get data and re-render

[x]In each task have a completed operation  PUT
    -on click listener "mark completed fn"
    - Sends a put to modify boolean on db
    - modifies the element to change look (adds or changes class)
    - rerender


[X]In each task have a delete button  DELETE
    -On delete send delete request and modify db
    -rerender




### Styling

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:

 [X] - background color of the page
 [X] - font family and size
 [X] - text color & or background color of tasks *to show whether or not they have been completed*