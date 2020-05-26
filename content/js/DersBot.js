let _RegExp = RegExp;
RegExp = function() {return _RegExp(...Array(...arguments).map(x => (typeof x==="string") ? x.replace("(.+?)", "(.+)") : x))}; // @ M. Kılıç

let username = "local-user";

function realTime(){
  let d = new Date();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  return (('' + day).length < 2 ? '0' : '') + day + '.' + (('' + month).length < 2 ? '0' : '') + month + '.' + d.getFullYear() + ' ' + d.getHours() + ":" + d.getMinutes();
}

let bot = new RiveScript({utf8: true});
bot.unicodePunctuation = new RegExp(/[.,!?;:]/g);

bot.loadFile("./brain.rive").then(function() {
    console.log("Brain loaded!");
    bot.sortReplies();
    $('#send-message').click(function () {
        if ($(".sendText").val()) {
          let messageTXT = $(".sendText").val();
          bot.reply(username, messageTXT).then(function(responseTXT) {
            console.log("The bot says: " + responseTXT);

            $('<div class="chat-column company">\
            <div class="item">\
              <div class="chat-icon">SZ</div>\
            </div>\
            <div class="item">\
              <div class="chat-message">' + messageTXT + '</div>\
              <div class="message-date">' + realTime() + '</div>\
            </div>\
        </div>').hide().appendTo(".chatContent").fadeIn(300);


            // Cevap
            $('<div class="chat-column customer">\
            <div class="item">\
              <div class="chat-icon">DB</div>\
            </div>\
            <div class="item">\
              <div class="chat-message">' + responseTXT + '</div>\
              <div class="message-date">' + realTime() + '</div>\
            </div>\
        </div>').hide().appendTo(".chatContent").fadeIn(300);



            $('.sendText').val("");
            messageTXT = "";
            //Scroll
            var chat = $('.chatContent');
            var chatItems = $('.chat-column').length;
            chat.animate({
                scrollTop: (chat.prop('scrollHeight') * chatItems)
            });
          }).catch(console.log);
        } else {
              $('<div class="errorTxt">Lütfen Mesaj Yazınız !</div>').hide().appendTo(".chatSend").fadeIn(100).fadeOut(2000);
          }
    });
    $('.sendText').keypress(function (e) {
        if (e.which == 13) {
            $('#send-message').click();
        }
    });
    $('.sendText').click(function () {
        $('.errorTxt').remove();
    });
    $(".message-date").html(realTime());
  })
  .catch(function(err, filename, lineno) {
    console.log(err, filename, lineno);
});
