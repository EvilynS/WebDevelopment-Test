var Twit = require ('twit');
var config = require ('config');
const T = new Twit({
    
  })

  //teste para certificar que esta se conectando com o twitter
  //T.post('statuses/update', { status: 'Teste!' }, function(err, data, response) {
  //  console.log(data)
//  })
  let Twit = require('twit');

  let config = require('./config');
  let T = new Twit(config);
  console.log(config);
  
  let params = {
    q: '#maislidas',
    count: 10
  };
  T.get('search/tweets', params, gotData);
function gotData(err, data, response){
  let tweets = data.statuses;
  for (var i =0; i < tweets.length; i++){
    console.log(tweets[i].created_at);
    console.log(tweets[i].text);
  }
   // console.log(data);
}

T.getAuth('user', params, gotData);
