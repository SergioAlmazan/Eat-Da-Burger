$(function () {

  $(".devoured-btn").on("click", function (event) {
    const id = $(this).data("id");
    const newDev = $(this).data("devoured");
    const newDevState = {
      devoured: newDev
    };

    let currentURL = window.location.origin;
    $.ajax(currentURL + "/api/burgers/devoured/" + id, {
      type: "PUT",  
      data: newDevState
    }).then(function () {
      location.reload();
    });
  });

  $(".burger-form").on("submit", function (event) {
    event.preventDefault();

    if ($("#burger-name").val() === "") {
      console.log("Enter a burger name!");
    } else {
      const newBurger = {
        burger_name: $("#burger-name").val()
      };

      let currentURL = window.location.origin;
      $.post(currentURL + "/api/burgers", newBurger)
        .then(function (data) {
          location.reload();
        });
    }

  });


  $(".delete-btn").on("click", function () {
    const id = $(this).data("id");

    let currentURL = window.location.origin;
    $.ajax(currentURL + "/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      $(".devoured-burger" + id).remove();
    });

  });

});