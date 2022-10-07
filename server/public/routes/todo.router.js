const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//get tasks

router.get('/', (req, res)=>{
    //log
    console.log('in todo GET');
    //pool query
    let queryText=`
        SELECT * FROM "tasks"
        ORDER BY "id" DESC;
    `
    pool.query(queryText)
        .then(result=>{
            res.send(result.rows);
        })
        .catch(err=>{
            console.log('error getting tasks', err);
            res.sendStatus(500);
        });
})

//post tasks

router.post('/', (req, res)=>{
    let newTask=req.body.task;
    console.log('new Task is:', newTask);
    //pool query
    let queryText=`
        INSERT INTO "tasks"
        ("task")
        VALUES ($1);
    `;
    
    pool.query(queryText, [newTask])
        .then(result=>{
            res.sendStatus(201)
        })
        .catch(err=>{
            console.log('error adding new post', err);
            res.sendStatus(500);
        });
    // res.sendStatus(201); -> used this to test reciept
})

//PUT tasks completed

router.put('/:id', (req, res)=>{
    let taskId=req.params.id;
    console.log('in /todo PUT with ID of:', taskId);
    
    // sql text and params
    sqlText=`
        UPDATE "tasks"
        SET "completed" = NOT "completed"
        WHERE "id" = $1;
    `;              //put in a toggle in case they didnt actually finish

    sqlParams=[taskId];

    //pool.query
    pool.query(sqlText, sqlParams)
        .then((dbRes)=>{
            res.sendStatus(201)
        })
        .catch(err=>{
            console.log('in /todo PUT error', err);
            res.sendStatus(500);
        });
})

//delete tasks

router.delete('/:id', (req, res)=>{
    let taskId=req.params.id;
    console.log('in task DELETE with id of:', taskId);

    //sql query
    sqlText=`
        DELETE FROM "tasks"
        WHERE "id" = $1;
    `;

    pool.query(sqlText, [taskId])
        .then((dbRes)=>{
            res.sendStatus(201);
        })
        .catch(err=>{
            console.log('in /todo DELETE error', err);
            res.sendStatus(500)
        });
})

module.exports = router;