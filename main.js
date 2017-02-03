function digitalclock() {
    var timenow = new Date();
    var seconds = timenow.getSeconds().toString();
    document.getElementById("digital-clock").innerHTML = timenow.toLocaleTimeString();
}
window.onload = function() {
    setInterval(digitalclock, 1000);
    var timenow = new Date();
    var seconds = timenow.getSeconds().toString();

    // add necessary css and attributes to animate the radar-clock hand..
    $("#rad").css("animation-delay", "-" + seconds + "s");
    $(".center").append("<style> @keyframes radar-clock {  from { transform: rotate(0deg);} to {transform: rotate(360deg);} </style>");
};
