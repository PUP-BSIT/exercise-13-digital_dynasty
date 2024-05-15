document.addEventListener("DOMContentLoaded", function () {
    let commentNameInput = document.getElementById("comment-name");
    let commentTextInput = document.getElementById("comment-text");
    let submitCommentButton = document.getElementById("submit-comment");
  
    commentNameInput.addEventListener("input", checkCommentValidity);
    commentTextInput.addEventListener("input", checkCommentValidity);
  
    function checkCommentValidity() {
      let nameValue = commentNameInput.value.trim();
      let textValue = commentTextInput.value.trim();
      submitCommentButton.disabled = !(nameValue && textValue);
    }
  
    submitCommentButton.addEventListener("click", function () {
      let name = commentNameInput.value.trim();
      let comment = commentTextInput.value.trim();
      console.log("Name: " + name + "\nComment: " + comment);
    });
  });
  