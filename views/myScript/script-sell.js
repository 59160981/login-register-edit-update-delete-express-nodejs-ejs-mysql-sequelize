function checkItem() {
    const id = document.getElementsByName('book_id')[0].value
    if (id.length == 13) {
        document.getElementById('checkItemInStock').submit()
    }
}