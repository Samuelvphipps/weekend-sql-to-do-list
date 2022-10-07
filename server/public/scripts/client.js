$(document).ready(onReady);

function onReady(){
    console.log('in JQUERY JS!!!');
    getTasks();
}

// get Tasks

function getTasks(){
    console.log('in getTasks fn');
    // ajax request

    $.ajax({
        type: 'GET',
        url: '/todo'
    })
        .then((response)=>{
            console.log('in response and response is', response);
            render(response)
        })
        .catch(err=>{
            console.log('in getTask error', err);
        })
}


// post tasks

// put tasks

//delete tasks

//render

function render(array){
    console.log('in renderFn');
    //empty table
    $('#taskList').empty();
    //loop and append

    for(let task of array){
        //logic to check if done or not. Variable to display on dom is either empty or adds checked to box
        let ifDone='';
        let checked=''
        if(task.completed===true){
            ifDone='class="done"';
            checked='checked';
        };

        $('#taskList').append(`
            <tr ${ifDone}>
                <td>${task.task}</td>
                <td>
                    <input type="checkbox" data-id="${task.id}" class="doneBtn" ${checked}>Done</input>
                        <br/>
                    <button data-id="${task.id}" class="deleteBtn">Delete</button>
                </td>
            </tr>
        `);
    }
}