let bot = new RiveScript({utf8: true});
  bot.unicodePunctuation = new RegExp(/[.,!?;:]/g);
  bot.loadFile("brain.rive", function() {
    console.log("Brain loaded!");
    bot.sortReplies();
  }, function(err, filename, lineno) {
    console.log("An error occurred!");
  });

let username = "local-user";


let button = document.getElementById("submit");
let user_input = document.getElementById("user_input");
let output = document.getElementById("output");

button.onclick = chat;

function chat() {
  bot.sortReplies();
  let input = user_input.value;
  let reply = bot.reply(username, input).then(function(reply) {
    console.log("The bot says: " + reply);
    output.innerHTML = reply;
  });
};
