$(document).ready(function() {
    document.getElementById("school").innerHTML = "Sheridan College";
    document.getElementById("school").className = "collegeClass";
    document.getElementById("myCampus").innerHTML = "Davis Campus";
    document.getElementById("myCampus").style.color = "orange";
})

function hideElement() {
    let s = document.getElementsById('school');
    let c = document.getElementsById('myCampus');
    for (let x = 0; x < s.length; x++) {
        let p = s[x];
        let content = p.innerHTML.trim();

        if (content == "ow") {
            div.style.display = "none";
        }
    }
    for (let x = 0; x < c.length; x++) {
        let p = c[x];
        let content = p.innerHTML.trim();

        if (content == "ow") {
            div.style.display = "none";
        }
    }
}
function buttonPress() {
    $.ajax({
        type: "GET",
        url: "midterm.json",
        dataType: "json",
        success: saveData
    });
    var jsonArrV = {};
    class MidtermJSON{
        constructor(studentName, studentId, allBooks) {
            this.studentName = studentName;
            this.studentId = studentId;
            this.allBooks = allBooks;
        }
        saveData(data) {
            $.each(data, (val) => {
                    jsonArrV.push(val);
                }
            console.log("Success");
        }
    }
    for (const el of jsonArrV ) {
        localStorage.setItem("mybooks", el);
    }
}
