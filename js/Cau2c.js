function submit(){
  var checkbox = document.querySelectorAll('input[type="checkbox"]');
  var selectOptions = [];
  checkbox.forEach(function(checkbox){
    if(checkbox.checked){
      selectOptions.push(checkbox.value);
    }
  });
  var selectOptionsDiv = document.getElementById("selectedOptions");
  var selectedOptionsText = "Bạn chọn cafe: <span class='selected-text'>" + selectOptions.join(", ") + "</span>";
  selectOptionsDiv.innerHTML = selectedOptionsText;
  selectOptionsDiv.style.display = "block";
}