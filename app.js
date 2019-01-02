
var url = require('url');

function renderHTML

module.exports = {

	handleRequest: function(request, response) {
		response.writeHead(200, {'Content-Type': 'text/html'});
	
		var path = url.parse(request.url).pathname;

		switch (path) {

			case '/':


		}
	}

}


