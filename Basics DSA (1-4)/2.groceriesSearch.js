const Groceries = ["Milk","bread","egg","sugar","jam"]
//O(n)
const searchForItem = (item1,item2) =>{
    for(let i=0; i < Groceries.length; i++){
        if(Groceries[i]=== item1){
            console.log(`Found:${item1}`)
        }
    }
    for(let j=0; j < Groceries.length; j++){
        if(Groceries[j]=== item2){
            console.log(`Found :${item2} `)
        }
    }
}
searchForItem("egg","Milk")


//n+n = 2n => O(2n) for loops 
// Drop the constant so it becomes O(2n)
