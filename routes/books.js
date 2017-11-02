var express = require('express'),
			 router = express.Router(),
			  Books = require('../models').Book,
				Loans = require('../models').Loan;

router.get('/all_books', function(req, res){
	Books.findAll().then(function(books){
		let booksValues = [];
		books.forEach(function(book){
			 booksValues.push(book.dataValues);
		});
		return booksValues;
	}).then(function(books){
		res.render('all_books', {books});
	});
});

router.get('/checked_books', function(req, res){
	res.render('/checked_books');
});

router.get('/new_book', function(req, res){
	res.render('/new_book');
})

router.get('/all_loans', function(req, res){
    Loans.findAll().then(function(loans){
        let loansValues = [];
        loans.forEach(function(loan){
             loansValues.push(loan.dataValues);
        });
        console.log("log statement here");
        return loansValues;
    }).then(function(loans){
        console.log("log statement there");
        res.render('all_loans');
    });
});

module.exports = router;


//--update this functionality -incomplete
// router.get('/overdue_books', function(req, res){
// 	Loans.findAll().then(function(loans){
// 		let loansValues = [];
// 		loans.forEach(function(loan){
// 			if(loan.)
// 			loansValues.push(loan.dataValues);
// 		});
// 		return loansValues;
// 	}).then(function(loans){
// 		console.log(loans);
// 		res.render('overdue_books', {loans});
// 	});
// });
