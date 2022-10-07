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



//delete tasks



module.exports = router;