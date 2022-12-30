document.getElementById("button").onclick = function () {
    // input: lấy các gia trị của bố(B) mẹ(M) anh trai(A) em gái(E)
    let family = document.getElementById("family").value
    let alert = document.getElementById("alert")
    alert.classList.add('d-block')
    // thuật toán: các value option sẽ lưu giá trị vào family
    // nếu biến family ứng với từng giá trị "B" "M" "A" "E" thì in ra alert các output tương ứng
    if (family == "B") {
        alert.innerHTML = `xin chào Bố!`
    }else if(family == "M"){
        alert.innerHTML = `xin chào Mẹ!`
    }else if(family == "A"){
        alert.innerHTML = `xin chào Anh Trai!`
    }else if(family == "E"){
        alert.innerHTML = `xin chào Em Gái!`
    }

}