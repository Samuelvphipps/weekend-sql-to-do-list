const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//get tasks

router.get('/', (req,res)=>{
    //log
    console.log('in todo GET');
    //pool query

})

//post tasks



//PUT tasks completed



//delete tasks



module.exports = router;