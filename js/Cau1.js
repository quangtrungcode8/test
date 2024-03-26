var studentInfo = {
    "001": {
        "fullName": "John Smith",
        "class": "A"
    },
    "002": {
        "fullName": "Jane Doe",
        "class": "B"
    },
    "003": {
        "fullName": "David Johnson",
        "class": "C"
    }
};

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var studentId = document.getElementById("studentId").value;

    if (studentInfo.hasOwnProperty(studentId)) {
        var fullName = studentInfo[studentId].fullName;
        var studentClass = studentInfo[studentId].class;

        document.getElementById("studentIdOutput").textContent = studentId;
        document.getElementById("fullNameOutput").textContent = fullName;
        document.getElementById("classOutput").textContent = studentClass;

        document.getElementById("studentInfoContainer").style.display = "flex";
    } else {
        alert("Invalid student ID");
    }
});
    document.getElementById("cannel").addEventListener("click",function(){
        document.getElementById("studentId").value = "";
    });