const Groceries = ["Milk","bread","egg","sugar","jam"]
//O(n)
const searchForItem = (item) =>{
    for(let i=0; i < Groceries.length; i++){
        if(Groceries[i]=== item){
            console.log(`Found:${item}`)
        }
    }
    for(let j=0; j < Groceries.length; j++){
        if(Groceries[j]=== item){
            console.log(`Found :${item} 2`)
        }
    }
}
searchForItem("egg")


//n+n = 2n => O(2n) for loops 
// Drop the constant so it becomes O(2n)
