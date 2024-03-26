document.addEventListener("DOMContentLoaded", function() {
    var backgroundRadio = document.getElementById("background");
    var colorSelect = document.getElementById("color");
    var submitButton = document.getElementById("submit");
    var cannelButton = document.getElementById('cannel');
    var fontRadio = document.getElementById('font');
    var formContainer = document.querySelector(".form-container");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        if (backgroundRadio.checked) {
            var selectedColor = colorSelect.value;
            formContainer.style.backgroundColor = selectedColor;
        }
         else if(fontRadio.checked){
            var selectedColor = colorSelect.value;
            formContainer.style.color = selectedColor;
        }
    });
    cannelButton.addEventListener("click", function(event){
        event.preventDefault();
        if(backgroundRadio.checked){
            formContainer.style.backgroundColor = ""; //Xóa màu nền
        } else if(fontRadio.checked){
            formContainer.style.color = ""; //Xóa màu chữ
        }
    });

});