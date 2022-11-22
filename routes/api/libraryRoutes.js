const { Library } = require('../../models');

const app = require('express').Router();

app.get('/all-books', (req, res) => {
    // Using model in route to find all documents that are instances of that model
    Library.find({}, (err, result) => {
      if (err) {
        res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json(result);
    });
});

app.post('/create-library', (req,res) => {
    Library.create(
        {
            name: req.body.name,
            books: req.body.books
        },
        (err, data) => {
            if (err) {
              console.log(err);
              res.status(500).json({mes: err})
            } else {
                console.log(data);
                res.status(200).json(data)
            }
        })
})
app.post('/add-book', (req,res) => {
    Library.findOneAndUpdate({name: "Books"}, {$addToSet: {books: req.body}},{ runValidators: true, new: true }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
    })
})



module.exports = app