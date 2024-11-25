//Ds Array
const Students = ["karthick","annamalai","kanna","jagan","apurva"]

const findStudent =(allStudents,studentName)=>{
    for(let i=0 ;i < allStudents.length ;i++){
        if(allStudents[i]=== studentName){
            console.log(`found ${studentName}`)
        }
    }
}
findStudent(Students,"karthick")


// Big O notaion helps to understand how long an algorithm will take to run or = Time complexibility
//  How much memory it will need as the amount of datahandles grow = space complexibility

// O(n) the execution time of algorithm grows linearly in proportion to size of the input Data(n)
//items increases time increases