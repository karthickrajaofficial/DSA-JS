let arr=[1,2,6,7,8,10,9,13,17]
function primeNos() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 2 || arr[i] > 1 && arr[i] % 2 !== 0 ) { 
        console.log(arr[i] )
      }
    }
  }
  
  primeNos();