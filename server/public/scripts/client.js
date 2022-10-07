$(document).ready(onReady);

function onReady(){
    // console.log('in JQUERY JS!!!');
    getTasks();
    //click listeners
    $('#addTask').on('submit', onSubmit);
    $('#taskList').on('click', '.doneBtn', markComplete);
    //delete me time
    $('#taskList').on('click', '.deleteBtn', onDelete);
}

// get Tasks

function getTasks(){
    // console.log('in getTasks fn');
    // ajax request

    $.ajax({
        type: 'GET',
        url: '/todo'
    })
        .then((response)=>{
            // console.log('in response and response is', response);
            render(response)
        })
        .catch(err=>{
            console.log('in getTask error', err);
        })
}

// post tasks

function onSubmit(event){
    event.preventDefault();
    // console.log('in onSubmit');
    //create object
    let task={
        task: $('#taskInput').val()
    };
    
    console.log('task=', task);
    //ajax
    $.ajax({
        type: 'POST',
        url: '/todo',
        data: task
    })
        .then((response)=>{
            console.log('new task added');
            $('#taskInput').val('')
            getTasks();
        })
        .catch(err=>{
            console.log('in POST error:', err);
        });

}

// put tasks

function markComplete(){
    //id of task to be changed
    let taskId= $(this).data('id');
    console.log('in markComplete on id number:', taskId);

    //ajax put method
    $.ajax({
        method: 'PUT',
        url: `/todo/${taskId}`,
    })
        .then((response)=>{
            console.log('The task was marked completed');
            getTasks();
        })
        .catch(err=>{
            console.log('in markComplete PUT error', err);
        });
}

//delete tasks

function onDelete(){
    let taskId=$(this).data('id');
    console.log('in onDelete and the id is:', taskId);
    
    //ajax
    $.ajax({
        method: 'DELETE',
        url: `/todo/${taskId}`
    })
        .then((response)=>{
            console.log('in DELETE response', response);
            getTasks();
        })
        .catch(err=>{
            console.log('in DELETE error', err);
        });
}

//render

function render(array){
    // console.log('in renderFn');
    //empty table
    $('#taskList').empty();
    //loop and append

    for(let task of array){
        //logic to check if done or not. Variable to display on dom is either empty or adds checked to box
        let classId="red";
        let ifDone='Not Completed';
        if(task.completed===true){
            ifDone='Completed! 🔥';
            classId="green"
        };

        $('#taskList').append(`
            <tr class="${classId}">
                <td>${task.task}</td>
                <td>${ifDone}</td>
                <td>
                    <button data-id="${task.id}" class="doneBtn">Mark Completed</button>
                        <br/>
                    <button data-id="${task.id}" class="deleteBtn">Delete</button>
                </td>
            </tr>
        `);
    }
}