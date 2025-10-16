$(document).ready(function () {
  // --- New Logic for the Initial Prompt ---

  // Handle the 'No' button running away
  $("#no-btn").on("mouseover", function () {
    // Get the dimensions of the window and the button
    const winWidth = $(window).width();
    const winHeight = $(window).height();
    const btnWidth = $(this).outerWidth();
    const btnHeight = $(this).outerHeight();

    // Calculate a new random position
    // We subtract the button dimensions to ensure it doesn't go off-screen
    const newTop = Math.random() * (winHeight - btnHeight);
    const newLeft = Math.random() * (winWidth - btnWidth);

    // Apply the new position
    $(this).css({
      position: "absolute", // Make sure it's positioned absolutely
      top: newTop + "px",
      left: newLeft + "px",
    });
  });

  // Handle the 'Yes' button click
  $("#yes-btn").click(function () {
    // Fade out the initial prompt screen
    $("#initial-prompt").fadeOut("slow", function () {
      // After it fades out, fade in the love letter container
      $("#love-letter-container").fadeIn("slow");
    });
  });

  // --- Original Logic for the Envelope ---
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});