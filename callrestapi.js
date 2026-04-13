var url = "http://localhost:3300/api/users";

function postUser() {
    console.log(url);

    var myName = $('#name').val();
    var myEmail = $('#email').val();
    var myAge = $('#age').val();
    var myComments = $('#comments').val();

    var myuser = {
        name: myName,
        email: myEmail,
        age: myAge,
        comments: myComments
    };

    console.log(myuser);

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.user));
        },
        error: function (error) {
            console.error("Error:", error);
        },
        data: JSON.stringify(myuser)
    });
}


function getUsers() {
    $.ajax({
        url: "http://localhost:3300/api/users",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data));
        },
        error: function (error) {
            console.error("Error:", error);
        }
    });
}
