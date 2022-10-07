const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//get tasks

router.get('/', (req,res)=>{
    //log
    console.log('in todo GET');
    //pool query
    let queryText=`
        SELECT * FROM "tasks"
        ORDER BY "completed";
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



//PUT tasks completed



//delete tasks



module.exports = router;