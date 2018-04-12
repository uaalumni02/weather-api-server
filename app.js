var express = require('express');
var axios = require('axios');
var app = express();
 
app.get('/api/search', (req, res) => {
   var query = req.query.q;
//    var limit = req.query.limit;
    var searchUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid=a76a5d02e8ccf94ea0744bc153ba9845";
    // console.log(searchUrl);
   return axios.get(searchUrl)
    .then((response) => {
        return res.status(200)
            .json(response.data)
    })
    .catch((error) => {
        return res.status(500)
            .json({
                success: false,
                error: error.message
            })
    });
});

app.listen(3000, () => console.log('server is running'));