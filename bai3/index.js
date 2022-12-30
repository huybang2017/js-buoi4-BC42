document.getElementById("button").onclick = function(){
    // input: lấy giá trị 3 số nguyên
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let num3 = parseInt(document.getElementById("num3").value)
    let alert = document.getElementById("alert")
    let count = 0

    alert.classList.add('d-block')

    // thuật toán tìm số chẵn: nếu 1 số chia hết cho 2 thì biến count tăng 1 đơn vị
    // còn số lẻ thì lấy 3(3 số nguyên - tổng các số chẵn)
    if(num1 % 2 === 0){
        count++
    }
    if(num2 % 2 === 0){
        count++
    }
    if(num3 % 2 === 0){
        count++
    }

    // in output ra alert
    alert.innerHTML = `có ${count} số chẵn, có ${3 - count} số lẻ`
}