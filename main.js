$(document).ready(function() {
    $(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
        flame.removeClass("burn").addClass("puff");
        $(".smoke").each(function () {
            $(this).addClass("puff-bubble");
        });
        $("#glow").remove();
        txt.hide().html("Feliz Cumpleaños Pam♡. Espero que este día te la pases muy bien y que la pases con gente que quieras♡.Eres una gran persona y gracias por permitirme estar otro año con tu gran amistad♡.Perdón por no haber estado contigo pero solo quiero que sepas que te quiero muchísimo♡♡♡.").delay(750).fadeIn(300);
        $("#candle").animate(
            {
            opacity: ".5"
            },
            100
        );
        }
    });
});});

