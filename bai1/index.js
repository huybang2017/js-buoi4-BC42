document.getElementById("submit").onclick = function() {
    // input: lấy các giá trị số nguyên vào từng biến num1,num2,num3
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let num3 = parseInt(document.getElementById("num3").value)
    let alert = document.getElementById("alert")

    alert.classList.add('d-block')

    // thuật toán: so sánh num1,num2,num3 với nhau rồi sắp xếp chúng in ra trên alert ứng với output đã cho
    // thuật toán này chỉ có thể sử dụng nếu so sánh ít số nguyên còn nhiều số thì code mỏi tay ta có thể dùng mảng só sánh sẽ tối ưu hơn nhiều
    if (num1 <= num2 && num2 <= num3) {
        alert.innerHTML = `${num1}  ${num2} ${num3}`
    }else if(num1 <= num3 && num3 <= num2){
        alert.innerHTML = `${num1}  ${num3} ${num2}`
    }else if(num2 <= num3 && num3 <= num1){
        alert.innerHTML = `${num2}  ${num3} ${num1}`
    }else if(num2 <= num1 && num1 <= num3){
        alert.innerHTML = `${num2}  ${num1} ${num3}`
    }else if(num3 <= num2 && num2 <= num1){
        alert.innerHTML = `${num3}  ${num2} ${num1}`
    }else if(num3 <= num1 && num1 <= num2){
        alert.innerHTML = `${num3}  ${num1} ${num2}`
    }
}