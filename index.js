function getColor() {
    $.ajax({
        url: "https://api.segso.net:8443/hsl/color?jsonp=true",
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        contentType: 'application/json',
        secure: true,
        headers: {
            "accept": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        success: function(data) {
            $("#colorhex1").text(data.color[0].hexColor);
            $("#colorrgb1").text(data.color[0].rgbColor);
            $("#colorhex2").text(data.color[1].hexColor);
            $("#colorrgb2").text(data.color[1].rgbColor);
            $("#example1").css({ "background-color": data.color[0].hexColor });
            $("#example2").css({ "background-color": data.color[1].hexColor });
            $("#example1").attr("href", "./colors/" + data.color[0].hexColor.slice(1, 7));
            $("#example2").attr("href", "./colors/" + data.color[1].hexColor.slice(1, 7));

        }
    });

};

function getTicketColor() {
    $.ajax({
        url: "https://api.segso.net:8443/hsl/color?jsonp=true&sannamarin=sannamarinonhoopoahh",
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        contentType: 'application/json',
        secure: true,
        headers: {
            "accept": "application/json",
            'Access-Control-Allow-Origin': '*',
        },
        success: function(data) {
            $(".svgspin").css({ "background-color": data.color });

        }
    });
};