function calculatePercentage() {
    let obtained = parseFloat(document.getElementById("obtained").value);
    let total = parseFloat(document.getElementById("total").value);

    if (isNaN(obtained) || isNaN(total) || total === 0) {
        document.getElementById("result").innerHTML = "❌ Enter valid marks";
        return;
    }

    let percent = (obtained / total) * 100;
    document.getElementById("result").innerHTML = percent.toFixed(2) + "%";
}

function calculateAttendance() {
    let attended = parseFloat(document.getElementById("attended").value);
    let total = parseFloat(document.getElementById("totalClasses").value);

    if (isNaN(attended) || isNaN(total) || total === 0) {
        document.getElementById("result").innerHTML = "❌ Invalid Input";
        return;
    }

    let percent = (attended / total) * 100;
    let status = percent >= 75 ? "✅ Safe" : "⚠️ Shortage";
    document.getElementById("result").innerHTML = percent.toFixed(2) + "% <br><span class='text-sm font-normal'>" + status + "</span>";
}

function calculateAge() {
    let dobValue = document.getElementById("dob").value;
    if(!dobValue) {
        document.getElementById("result").innerHTML = "❌ Select Date";
        return;
    }
    let dob = new Date(dobValue);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById("result").innerHTML = age + " Years Old";
}