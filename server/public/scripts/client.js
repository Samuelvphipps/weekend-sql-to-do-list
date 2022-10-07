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
        .then((respnse)=>{
            console.log('in response and response is', respnse);
            //render()
        })
        .catch(err=>{
            console.log('in getTask error', err);
        })
}


// post tasks

// put tasks

//delete tasks

//render