const express = require(`express`);
const Router = express.Router();
// const moment = require(`moment-timezone`)

// Import the model (burger.js) to use its database functions.
const alert = require(`../../models/alert.js`);

router.put(`/api/alerts/:id`, (req, res) => {
    const condition = `id = ` + req.params.id;
    alert.updateOne(req.body, condition, result => {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

// Export routes for server.js to use.
module.exports = router