/**
 * Hàm này cho phép thêm một số nguyên vào mảng
 * @param {*} arr Mảng muốn thêm 
 * @param {*} n Số nguyên muốn thêm
 * @returns Mảng sau khi đã thêm
 */
function addNumber(arr, n){//input
    // output: arr
    //process
    if(Number.isInteger(n)){
        arr.push(n);
        
    } else {
        alert('Số vừa nhập không phải số nguyên!')
    }
    return arr;
}

/**
 * Hàm này cho phép tính tổng số dương của một mảng
 * @param {*} arr Mảng muốn tính
 * @returns Tổng
 */
function sumArray(arr){ //input
    //output:
    var sum = 0;

    //process
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }

    return sum;                  
}

/**
 * Hàm này cho phép đếm có tất cả bao nhiêu số dương trong mảng
 * @param {*} arr Mảng muốn đếm
 * @returns Số dương
 */
function countNumberPos(arr){ //input
    // output: 
    countPos = 0;
    
    //process
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            countPos++;
        }
    }
    return countPos;
}

/**
 * Hàm này cho phép tìm ra số nhỏ nhất có trong mảng
 * @param {*} arr Mảng muốn tìm
 * @returns Số nhỏ nhất
 */
function minNumber(arr){ //input
    //output: min: number
    //Gán min cho giá trị đầu tiên của mảng
    var min = arr[0];

    //process
    for(var i = 0; i < arr.length; i++){
        if(arr[i] <= min){
            min = arr[i]
        }
    }
    return min;
}

/**
 * Hàm này cho phép tìm ra số dương nhỏ nhất có trong mảng
 * @param {*} arr Mảng muốn tìm
 * @returns Số dương nhỏ nhất
 */
function minNumberPos(arr){ //input
    //output: min: number
    //Gán min cho giá trị đầu tiên của mảng
    var min = arr[0];

    //process
    for(var i = 0; i < arr.length; i++){
        if(arr[i] <= min && arr[i] > 0){
            min = arr[i]
        }
    }
    return min;
}

/**
 * Hàm này cho phép tìm ra số chẳn cuối cùng có trong mảng
 * @param {} arr Mảng muốn tìm
 * @returns Số chẳn cuối cùng
 */
function evenNumFinal(arr){ //input
    // output: 
    var evenFinal = 0;

    //process
    //duyệt mảng từ cuối lên gặp số chẳn thì dừng vòng lặp
    for(var i = arr.length - 1; i > 0; i--){
        if(arr[i] % 2 == 0){
            evenFinal = arr[i];
            break;
        } else{
            evenFinal = -1;
        }
    }
    return evenFinal;
}

/**
 * Hàm này cho phép chuyển đổi vị trí giữa hai số dựa vào vị trí trong mảng của số đó
 * @param {*} arr Mảng muốn thay đổi
 * @param {*} i1 Vị trí index của số thứ nhất
 * @param {*} i2 Vị trí index của số thứ hai
 * @returns Mảng sau khi đã đổi vị trí
 */
function swapNumber(arr, i1, i2){ //input
    //output: arr
    //process
    if(i1 >= 0 && i1 < arr.length && i2 >= 0 && i2 < arr.length){
        var temp = arr[i1];
        arr[i1] = arr[i2]
        arr[i2] = temp;
    }
    return arr;
}

/**
 * Hàm này cho phép sắp xếp các phần tử theo giá trị tăng dần
 * @param {*} arr Mảng muốn sắp xếp
 * @returns Mảng sau khi sắp xếp
 */
function sortAcending(arr){ //input
    //ouput: arr

    // process
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - i - 1; j++){
            //swap nó nếu giá trị của index[0] lớn hơn index[1]
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

/**
 * Hàm này dùng để kiểm tra 1 số có phải là số nguyên tố hay không
 * @param {*} n Số muốn kiểm tra
 * @returns Kết quả sau khi kiểm tra
 */
function checkPrime(n){ //input
    //output: resultCheck: string
    var resultCheck = false;

    //process
    var count = 0;
    for(var i = 1; i <= n; i++){
        if(n % i == 0){
            count++
        }
    }
    if(count == 2){
        resultCheck = true;
    } else{
        resultCheck =false
    }
    return resultCheck;
}