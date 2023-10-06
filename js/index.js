//array
var res_moreNumber = [];

//Add integer number
document.getElementById('btnAddNumber').onclick = function(){
    document.getElementById('frAddNumber').onsubmit = function(e){
        e.preventDefault();
    }
    // input: addNumber: number
    var input = + document.getElementById('addNumber').value;

    //output: res_moreNumber: array
    
    //process
    res_moreNumber = addNumber(res_moreNumber, input);

    //print screen
    document.getElementById('res_moreNumber').innerHTML = res_moreNumber;
}

//Lession1: Sum number pos
document.getElementById('btnSum').onclick = function(){
    document.getElementById('frSumNumber').onsubmit = function(e){
        e.preventDefault();
    }
    //input: các giá tị từ mảng

    //output: sum: number
    var sum = 0;

    //process: call function
    sum = sumArray(res_moreNumber);

    //print screen
    document.getElementById('res_1').innerHTML = 'Tổng số dương: ' + sum;
}

//Lession2: Count number pos
document.getElementById('btnCount').onclick = function(){
    document.getElementById('frCountPos').onsubmit = function(e){
        e.preventDefault();
    }
    //input: các giá tị từ mảng

    //output: countPos = number
    countPos = 0;
    
    //process
    countPos = countNumberPos(res_moreNumber);
    //print screen
    document.getElementById('res_2').innerHTML = 'Số dương: ' +countPos;
}

//Lession3: Min number in array
document.getElementById('btnFindMin').onclick = function(){
    document.getElementById('frFindMin').onsubmit = function(e){
        e.preventDefault();
    }

    //input: các giá tị từ mảng
    //output: min: number
    //Gán min cho giá trị đầu tiên của mảng
    var min = 0;

    //process
    //call function
    min = minNumber(res_moreNumber);

    //print screen
    document.getElementById('res_3').innerHTML = 'Số nhỏ nhất: ' +min;

}

//Lession4: Min number positive in array
document.getElementById('btnFindIntergerMin').onclick = function(){
    document.getElementById('frFindIntMin').onsubmit = function(e){
        e.preventDefault();
    }

    //input: các giá tị từ mảng
    //output: min: number
    //Gán min cho giá trị đầu tiên của mảng
    var min = 0;

    //process
    //duyệt mảng
    min = minNumberPos(res_moreNumber);
    //print screen
    document.getElementById('res_4').innerHTML = 'Số dương nhỏ nhất: ' +min;
}

//Lession5: Find even number final
document.getElementById('btnFindEven').onclick = function(){
    document.getElementById('frFindEven').onsubmit = function(e){
        e.preventDefault();
    }
    //input: các giá tị từ mảng
    //output: evenFinal: number
    
    var evenFinal = 0;

    //process
    evenFinal = evenNumFinal(res_moreNumber)

    //print screen
    document.getElementById('res_5').innerHTML = 'Số chẳn cuối cùng: ' +evenFinal;
}

//Lession6: swap index number in array
document.getElementById('btnSwapNumber').onclick = function(){
    document.getElementById('frSwapNumber').onsubmit = function(e){
        e.preventDefault();
    }
    //input: index1, index2: number
    var index1 = + document.getElementById('number1').value;
    var index2 = + document.getElementById('number2').value;

    //output: array
    var arrSwap = [];

    //process
    arrSwap = swapNumber(res_moreNumber, index1, index2);

    //print 
    document.getElementById('res_6').innerHTML = arrSwap;
}

//Lession7: Sort up ascending
document.getElementById('btnAcending').onclick = function(){
    document.getElementById('frAcending').onsubmit = function(e){
        e.preventDefault();
    }
    //input: các giá tị từ mảng

    //output: mảng sau khi sắp xếp: array
    var arrAcending = []

    //process
    // Cach 1 
    //arrAcending = sortAcending(res_moreNumber);
    //Cach 2: Use lodash
    arrAcending = _.sortBy(res_moreNumber);

    document.getElementById('res_7').innerHTML = 'Mảng sau khi sắp xếp:  ' + arrAcending;
}

//Lession8: Find First Prime Number 
document.getElementById('btnFindPrime').onclick = function(){
    document.getElementById('frFindPrime').onsubmit = function(e){
        e.preventDefault();
    }
    //input: các giá tị từ mảng
    //output: firstPrime: number
    var firstPrime = 0;
    for(var i = 0; i < res_moreNumber.length; i++){
        if(checkPrime(res_moreNumber[i])){
            firstPrime = res_moreNumber[i];
            break;
        } else{
            firstPrime = -1;
        }
    }
    document.getElementById('res_8').innerHTML = 'Số nguyên tố đầu tiên là: ' + firstPrime;
}

//Lession9: Count integer
//Add more number integer
var res_moreNumInt = [];

document.getElementById('btnAddNumberInt').onclick = function(){
    document.getElementById('frAddNumberInt').onsubmit = function(e){
        e.preventDefault();
    }
    // input
    var input = + document.getElementById('addNumberInt').value;

    //output: arr
    //process
    res_moreNumInt.push(input);

    //print
    document.getElementById('res_addNumInt').innerHTML = res_moreNumInt;
}
//Count number integer
document.getElementById('btnCountInteger').onclick = function(){
    document.getElementById('frCountInt').onsubmit = function(e){
        e.preventDefault();
    }
    //input: các giá tị từ mảng
    //output
    var count = 0
    //process
    for(var i = 0; i < res_moreNumInt.length; i++){
        if(Number.isInteger(res_moreNumInt[i])){
            count++;
        }
    }
    document.getElementById('res_9').innerHTML = 'Số nguyên: ' +count;
}

//Lession10: Compare positive and negative
document.getElementById('btnCompareNumber').onclick = function(){
    document.getElementById('frCompareNumber').onsubmit = function(e){
        e.preventDefault();
    }
    //input: các giá tị từ mảng
    //output: resCompare
    var resCompare = '';
    //process
    var countPos = 0;
    var countNeg = 0;

    for(var i = 0; i < res_moreNumber.length; i++){
        if(res_moreNumber[i] > 0){
            countPos++;
        } else{
            countNeg++;
        }
    }
    if(countPos > countNeg){
        resCompare = 'Số dương > Số âm';
    } else if(countPos < countNeg){
        resCompare = 'Số âm > Số dương';
    } else{
        resCompare = 'Số âm = Số dương';
    }

    document.getElementById('res_10').innerHTML = resCompare;
}
