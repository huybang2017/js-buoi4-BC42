document.getElementById("button").onclick = function(){
    // input lấy giá trị 3 cạnh tam giác
    let edge1 = +document.getElementById("edge1").value
    let edge2 = +document.getElementById("edge2").value
    let edge3 = +document.getElementById("edge3").value

    let alert = document.getElementById("alert")
    alert.classList.add('d-block')
    // các cạnh phải lớn hơn không
    if(edge1 >= 0 && edge2 >= 0 && edge3 >= 0){
        // điều kiện để là 1 hình tam giác
		if(edge1 + edge2 > edge3){
            // điều kiện tam giác đều
			if(edge1 === edge2 && edge2 === edge3){
				alert.innerHTML = `tam giác đều`
			}else if (edge1===edge2 || edge1===edge3 || edge2===edge3){
                // điều kiên tam giác cân
				alert.innerHTML = `tam giác cân`
			}else if(edge1*edge1 === edge2*edge2 + edge3*edge3 || edge2*edge2 === edge1*edge1 + edge3*edge3 || edge3*edge3 === edge2*edge2 + edge1*edge1){
                // điều kiện tam giác vuông sử dụng định lý pytago
				alert.innerHTML = `tam giác vuông`
			}else{
				alert.innerHTML = `tam giác thường`
			}
		}else{
			alert.innerHTML = `dữ liệu không hợp lệ`
		}
	}else{
		alert.innerHTML = `dữ liệu không hợp lệ`
	}
    // output in ra màn alert các loại tam giác khi xét
}