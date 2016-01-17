exports.render = function(req, res){
	res.render('index',{
		'title' : 'hello world',
		'message' : 'How a thing'


	});
};