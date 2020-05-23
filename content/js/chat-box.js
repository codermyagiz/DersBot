$(document).ready(function () {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var realTime = (('' + day).length < 2 ? '0' : '') + day + '.' + (('' + month).length < 2 ? '0' : '') + month + '.' + d.getFullYear() + ' ' + d.getHours() + ":" + d.getMinutes();

    $('#send-message').click(function () {
        var messageTXT = $(".sendText").val();

        var responseTXT = $(".responseTXT").val();

        if ($(".sendText").val()) {
            $('<div class="chat-column company">\
            <div class="item">\
              <div class="chat-icon">SB</div>\
            </div>\
            <div class="item">\
              <div class="chat-message">' + messageTXT + '</div>\
              <div class="message-date">' + realTime + '</div>\
            </div>\
        </div>').hide().appendTo(".chatContent").fadeIn(300);


            // Cevap 
            $('<div class="chat-column customer">\
            <div class="item">\
              <div class="chat-icon">CB</div>\
            </div>\
            <div class="item">\
              <div class="chat-message">' + responseTXT + '</div>\
              <div class="message-date">' + realTime + '</div>\
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
        } else {
            $('<div class="errorTxt">Lütfen Mesaj Yazınız !</div>').hide().appendTo(".chatSend").fadeIn(500);
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
});