var Reddit  = require('nodewhal');
var analyze = require('write-good');

var secrets = require('./secrets.json');

var init = function(bot) {
    console.log(bot);
};

// Bootstrap
Reddit('write-good-bot by /u/wtf_are_my_initials').login(secrets.username, secrets.password).then(init);
