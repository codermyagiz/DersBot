function setup() {
  noCanvas();

  let bot = new RiveScript({utf8: true});
  bot.unicodePunctuation = new RegExp(/[.,!?;:]/g);
  //unused code
  // bot.loadFile('brain.rive', brainReady, brainError);
  // //bot.sortReplies();
  bot.loadFile("brain.rive", function() {
  console.log("Brain loaded!");
  bot.sortReplies();
}, function(err, filename, lineno) {
  console.log("An error occurred!");
});

  let username = "local-user";
  
  //unused code
  // function brainReady() {
  //   console.log('Chatbot ready!');
  //unused code
  // }
  //unused code
  // function brainError() {
  //   console.log('Chatbot error!');
  // }

  let button = select('#submit');
  let user_input = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);

  function chat() {
    bot.sortReplies();
    let input = user_input.value();
    let reply = bot.reply(username, input).then(function(reply) {
    console.log("The bot says: " + reply);
    output.html(reply);
    });
  }
}
