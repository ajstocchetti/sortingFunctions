function bubbleSort(arr) {
   var flipped = true;
   while(flipped) {
      flipped = false;
      for (var x=0; x<arr.length-1; x++) {
         if( arr[x] > arr[x+1]) {
            var z = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = z;
            flipped = true;
         }
      }
   }
   return arr;
}


function merge(ar1, ar2) {
   var retAry = [];
   while (ar1.length>0 && ar2.length>0) {
   	if(ar1[0]<ar2[0]) {
   		retAry.push(ar1[0]);
   		ar1 = ar1.slice(1);
      }
	   else {
         retAry.push(ar2[0]);
         ar2 = ar2.slice(1);
      }
   }
   if(ar1.length>0) {
      retAry = retAry.concat(ar1);
   }
   if(ar2.length>0) {
      retAry = retAry.concat(ar2);
   }
   return retAry;
}

function split(arr) {
   var half = Math.floor(arr.length/2);
   return [arr.slice(0,half), arr.slice(half)];
}



function mergeSort(arr) {
   if(arr.length>1) {
      var double = split(arr);
      var arr1 = mergeSort(double[0]);
      var arr2 = mergeSort(double[1]);
      return merge(arr1,arr2);
   }
   else {   // only 1 element in array
      return arr;
   }
}









// for(var i=12; i <= 17; i++) {
//    var num_items = Math.pow(2,i);
//    var native_test_array = [];
//    var b_test_array = [];
//    var m_test_array = []
//    for(var j=0; j < num_items; j++) {
//       var rand = Math.floor(Math.random() * num_items);
//       native_test_array.push(rand);
//       b_test_array.push(rand);
//       m_test_array.push(rand);
//    }
//
//    console.time(num_items + " native");
//    native_test_array.sort(function(a,b){ return a-b; });
//    console.timeEnd(num_items + " native");
//
//    console.time(num_items + " bubble");
//    bubbleSort(b_test_array);
//    console.timeEnd(num_items + " bubble");
//
//    console.time(num_items + " merge");
//    mergeSort(m_test_array);
//    console.timeEnd(num_items + " merge");
// }
