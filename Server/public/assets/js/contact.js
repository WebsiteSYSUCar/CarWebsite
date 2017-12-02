$(function() {

    $("#submit").click(function() {
      const data = {
        name: $('#name').val(),
        email: $('#email').val(),
        itemSubject: $('#itemSubject').val(),
        itemSubjects: $('#itemSubject').val(),
      }
      $.ajax({
        url: "/sendEmail",
        type: "post",
        data: data,
        async: false,
        success: function(data, textStatus, xhr) {
          console.log("data");
        },
        error: function(xhr, textStatus, errorThrown) {
          console.log(xhr);
        }
      })
    })

})
