[]Setup
    []server

    [x]html
    []client.js -> source to html
    []jquery ->source to html
    []css
    []routes set up later
    []modules


[] Create a front end experience that allows a user to create a Task.

[] When the Task is created, it should be stored inside of a database (SQL)

[] Whenever a Task is created the front end should refresh to show all tasks that need to be completed.

[] Each Task should have an option to 'Complete' 
[] or 'Delete'.

[] When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.

[] Whether or not a Task is complete should also be stored in the database.

[] Deleting a Task should remove it both from the front end as well as the Database.

[] Be sure to create a new database through Postico. Use the name `weekend-to-do-app`. You will need to use this name in your database connection configuration on your server.

[] Please include a `database.sql` text file in your repo that includes all of your `CREATE TABLE` queries. This is so we can re-create your database while testing your app.

Logic needed:

Task add and display control
-On load get and render
-On submit post new data to server and then to DB
    on complete post get data and re-render

In each task have a completed operation
    -on click listener "mark completed fn"
    - Sends a put to modify boolean on db
    - modifies the element to change look (adds or changes class)
    - rerender
    SSSSSSSS
    Include an input for time completed with button that changes background green

In each task have a delete button
    -On delete send delete request and modify db
    -rerender



DB format

    



### Styling

Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
  - background color of the page
  - font family and size
  - text color & or background color of tasks *to show whether or not they have been completed*