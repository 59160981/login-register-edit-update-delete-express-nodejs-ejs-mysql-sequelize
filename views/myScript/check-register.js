function checkRegister() {
    var id = document.getElementsByName("id")[0].value
    var password = document.getElementsByName("password")[0].value
    var confirmPassword = document.getElementsByName("confirm-password")[0].value
    var firstName = document.getElementsByName("firstName")[0].value
    var lastName = document.getElementsByName("lastName")[0].value
    var type = document.getElementsByName("type")[0].value


    // checkNull
    if (id == "") {
        document.getElementById("alert-id").innerHTML = "* กรุณากรอกข้อมูล"
    } else if (id.length < 13) {
        document.getElementById("alert-id").innerHTML = "* id ต้องมี 13 ตัวอักษร"
    } else {
        document.getElementById("alert-id").innerHTML = ""
    }

    if (password == "") {
        document.getElementById("alert-password").innerHTML = "* กรุณากรอกข้อมูล"
    } else if (password.length < 8) {
        document.getElementById("alert-password").innerHTML = "* password ต้องอยู่ระหว่าง 8-16 ตัวอักษร"
    } else {
        document.getElementById("alert-password").innerHTML = ""
    }

    if (confirmPassword == "") {
        document.getElementById("alert-confirm-password").innerHTML = "* กรุณากรอกข้อมูล"
    } else if (confirmPassword != password) {
        document.getElementById("alert-confirm-password").innerHTML = "* password ไม่ตรงกัน"
    } else {
        document.getElementById("alert-confirm-password").innerHTML = ""
    }

    if (firstName.charAt(firstName.length - 1) == parseInt(firstName.charAt(firstName.length - 1))) {
        document.getElementsByName("firstName")[0].value = firstName.substring(0, firstName.length - 1)
        firstName = document.getElementsByName("firstName")[0].value
        if (firstName == "") {
            document.getElementById("alert-firstName").innerHTML = "* กรุณากรอกข้อมูล "
        }
    }
    if (firstName == "") {
        document.getElementById("alert-firstName").innerHTML = "* กรุณากรอกข้อมูล "
    } else {
        document.getElementById("alert-firstName").innerHTML = ""
    }

    if (lastName.charAt(lastName.length - 1) == parseInt(lastName.charAt(lastName.length - 1))) {
        document.getElementsByName("lastName")[0].value = lastName.substring(0, lastName.length - 1)
        lastName = document.getElementsByName("lastName")[0].value
        if (lastName == "") {
            document.getElementById("alert-lastName").innerHTML = "* กรุณากรอกข้อมูล "
        }
    }
    if (lastName == "") {
        document.getElementById("alert-lastName").innerHTML = "* กรุณากรอกข้อมูล"
    } else {
        document.getElementById("alert-lastName").innerHTML = ""
    }
    if (type == "") {
        document.getElementById("alert-type").innerHTML = "* กรุณาเลือกข้อมูล"
    } else {
        document.getElementById("alert-type").innerHTML = ""
    }
}

function submitRegister() {
    var id = document.getElementsByName("id")[0].value
    var password = document.getElementsByName("password")[0].value
    var confirmPassword = document.getElementsByName("confirm-password")[0].value
    var firstName = document.getElementsByName("firstName")[0].value
    var lastName = document.getElementsByName("lastName")[0].value
    var type = document.getElementsByName("type")[0].value
    var correct = 0

    if (id.length == 13) {
        correct++
    }
    if (password.length >= 8) {
        correct++
    }
    if (password == confirmPassword) {
        correct++
    }
    if (firstName != "") {
        correct++
    }
    if (lastName != "") {
        correct++
    }
    if (type != "") {
        correct++
    }
    if (correct == 6) {
        document.getElementById('register').submit()
    }
}