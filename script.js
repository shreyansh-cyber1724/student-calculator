function calculateCGPA() {
    let s1 = parseFloat(document.getElementById("sub1").value);
    let s2 = parseFloat(document.getElementById("sub2").value);
    let s3 = parseFloat(document.getElementById("sub3").value);

    let cgpa = (s1 + s2 + s3) / 3;
    document.getElementById("result").innerHTML = "CGPA: " + cgpa.toFixed(2);
}

function calculatePercentage() {
    let obtained = parseFloat(document.getElementById("obtained").value);
    let total = parseFloat(document.getElementById("total").value);

    let percent = (obtained / total) * 100;
    document.getElementById("result").innerHTML = "Percentage: " + percent.toFixed(2) + "%";
}

function calculateInterest() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    let si = (p * r * t) / 100;
    document.getElementById("result").innerHTML = "Simple Interest: " + si.toFixed(2);
}

function calculateAttendance() {
    let attended = parseFloat(document.getElementById("attended").value);
    let total = parseFloat(document.getElementById("totalClasses").value);

    let percent = (attended / total) * 100;
    document.getElementById("result").innerHTML = "Attendance: " + percent.toFixed(2) + "%";
}

function calculateAge() {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    document.getElementById("result").innerHTML = "Age: " + age + " years";
}