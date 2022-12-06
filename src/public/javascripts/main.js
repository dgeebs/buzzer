var socket = io();

$(document).ready(function () {
    $('.material-button-toggle').on("mousedown", function () {
        let name = document.getElementById('name').value;
        socket.emit('buzz', { user: name });
        $(this).toggleClass('open');
        //$('.option').toggleClass('scale-on');
    });

    $('.material-button-toggle').on("mouseup", function () {
        //let name = document.getElementById('name').value;
        //socket.emit('buzz', { user: name });
        $(this).toggleClass('open');
        //$('.option').toggleClass('scale-on');
    });

    socket.onAny((eventName, message) => {
        $('#first').text(message.user);
        console.log(eventName);
        console.log(message);
    });
});
