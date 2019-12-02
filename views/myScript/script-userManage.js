// delete
function deleteUser(id) {
    if (confirm("คุณต้องการลบข้อมูลของรหัสผู้ใช้ " + id + " ใช่หรือไม่?")) {
        window.location.href = 'user-manage/delete/' + id
    }
}

//add
function checkAddUser() {
    var id = document.getElementsByName("id")[0].value
    var password = document.getElementsByName("password")[0].value
    var confirmPassword = document.getElementsByName("confirm-password")[0].value
    var firstName = document.getElementsByName("firstName")[0].value
    var lastName = document.getElementsByName("lastName")[0].value
    var type = document.getElementsByName("type")[0].value

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

    if (firstName.charAt(0) == parseInt(firstName.charAt(0))) {
        document.getElementsByName("firstName")[0].value = ''
        firstName = ''
        document.getElementById("alert-firstName").innerHTML = "* กรุณากรอกข้อมูล"
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

    if (lastName.charAt(0) == parseInt(lastName.charAt(0))) {
        document.getElementsByName("lastName")[0].value = ''
        lastName = ''
        document.getElementById("alert-lastName").innerHTML = "* กรุณากรอกข้อมูล"
    }
    if (lastName.charAt(lastName.length - 1) == parseInt(lastName.charAt(lastName.length - 1))) {
        document.getElementsByName("lastName")[0].value = lastName.substring(0, lastName.length - 1)
        lastName = document.getElementsByName("lastName")[0].value
        if (lastName == "") {
            document.getElementById("alert-lastName").innerHTML = "* กรุณากรอกข้อมูล "
        }
    }
    if (lastName == "") {
        document.getElementById("alert-lastName").innerHTML = "* กรุณากรอกข้อมูล "
    } else {
        document.getElementById("alert-lastName").innerHTML = ""
    }

    if (type == "") {
        document.getElementById("alert-type").innerHTML = "* กรุณาเลือกข้อมูล"
    } else {
        document.getElementById("alert-type").innerHTML = ""
    }
}

function submitAddUser() {
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
    if (password.length > 8) {
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
    if (correct == 5) {
        document.getElementById('addUser').submit()
    }
}

//edit
function checkEditUser() {
    var password = document.getElementsByName("password")[0].value
    var firstName = document.getElementsByName("firstName")[0].value
    var lastName = document.getElementsByName("lastName")[0].value
    var type = document.getElementsByName("type")[0].value

    if (password == "") {
        document.getElementById("alert-password").innerHTML = "* กรุณากรอกข้อมูล"
    } else if (password.length < 8) {
        document.getElementById("alert-password").innerHTML = "* password ต้องอยู่ระหว่าง 8-16 ตัวอักษร"
    } else {
        document.getElementById("alert-password").innerHTML = ""
    }

    if (firstName.charAt(0) == parseInt(firstName.charAt(0))) {
        document.getElementsByName("firstName")[0].value = ''
        firstName = ''
        document.getElementById("alert-firstName").innerHTML = "* กรุณากรอกข้อมูล"
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

    if (lastName.charAt(0) == parseInt(lastName.charAt(0))) {
        document.getElementsByName("lastName")[0].value = ''
        lastName = ''
        document.getElementById("alert-lastName").innerHTML = "* กรุณากรอกข้อมูล"
    }
    if (lastName.charAt(lastName.length - 1) == parseInt(lastName.charAt(lastName.length - 1))) {
        document.getElementsByName("lastName")[0].value = lastName.substring(0, lastName.length - 1)
        lastName = document.getElementsByName("lastName")[0].value
        if (lastName == "") {
            document.getElementById("alert-lastName").innerHTML = "* กรุณากรอกข้อมูล "
        }
    }
    if (lastName == "") {
        document.getElementById("alert-lastName").innerHTML = "* กรุณากรอกข้อมูล "
    } else {
        document.getElementById("alert-lastName").innerHTML = ""
    }

    if (type == "") {
        document.getElementById("alert-type").innerHTML = "* กรุณาเลือกข้อมูล"
    } else {
        document.getElementById("alert-type").innerHTML = ""
    }
}

function submitEditUser() {
    var id = document.getElementsByName("id")[0].value
    var password = document.getElementsByName("password")[0].value
    var firstName = document.getElementsByName("firstName")[0].value
    var lastName = document.getElementsByName("lastName")[0].value
    var type = document.getElementsByName("type")[0].value
    var correct = 0

    if (id.length == 13) {
        correct++
    }
    if (password.length > 8) {
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
    if (correct == 5) {
        if (confirm("คุณต้องการแก้ไขข้อมูลของรหัสผู้ใช้ " + id + " ใช่หรือไม่?")) {
            document.getElementById('editUser').submit()
        }
    }
}