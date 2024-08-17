const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log('in post route');
    console.log ('req.body is ',req.body)

    const sqlText = `INSERT INTO "feedback"
                    ("feeling", "understanding","support","comments")
                    VALUES
                    ($1, $2, $3, $4)`

    const sqlValues = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]
    pool.query(sqlText,sqlValues)
    .then((dbResponse)=> {
        res.sendStatus(200)
    })
    .catch((dbError) => {
        console.log('error in POST to dB',dbError)
        res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
    const feedbackToDelete = req.params.id;

    const sqlText = `DELETE FROM "feedback"
                    WHERE "id" = $1;`
    
    const sqlValues = [feedbackToDelete]

    pool.query(sqlText,sqlValues)
    .then((dbResult) => {
        res.sendStatus(201)
    })
    .catch((dbError)=> {
        console.log('error deleting from dB',dbError)
        res.sendStatus(500)
    })
})



// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
