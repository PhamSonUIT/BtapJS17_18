var mang = new Array(0);
function them() {
  var value = document.getElementById("value").value * 1;
  mang.push(value);
  var array = document.getElementById("array");
  array.innerText = mang;
  console.log(mang);
}
function swap(a, b) {
  var temp = 0;
  a = temp;
  temp = b;
  b = a;
}
// Cau1
function tinhTong() {
  var tong = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      tong += mang[i];
    }
  }
  var cau1 = document.getElementById("cau1");
  cau1.innerText = tong;
  return tong;
}

//Cau2
function demSoDuong() {
  var count = 0;
  for (var i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      count++;
    }
  }
  var cau2 = document.getElementById("cau2");
  cau2.innerText = "Có " + count + " số dương";
  return count;
}

//Cau3
function timMin() {
  var min = mang[0];
  for (var i = 1; i <= mang.length; i++) {
    if (mang[i] < min) {
      min = mang[i];
    }
  }
  var cau3 = document.getElementById("cau3");
  cau3.innerText = "Số nhỏ nhất là " + min;
  return min;
}

//Cau4
function timMinDuong() {
  var min = mang[0];
  for (var i = 1; i <= mang.length; i++) {
    if (mang[i] > 0 && mang[i] < min) {
      min = mang[i];
    }
  }
  var cau4 = document.getElementById("cau4");
  cau4.innerText = "Số dương nhỏ nhất là " + min;
  return min;
}

//Cau5
function soChanCuoi (){

}

//Cau6
function doiCho() {
    
}