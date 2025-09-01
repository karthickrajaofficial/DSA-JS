//Ds Array
const Students = ["karthick","annamalai","kanna","jagan","apurva"]

const findStudent =(allStudents,studentName)=>{
    for(let i=0 ;i < allStudents.length ;i++){
        if(allStudents[i]=== studentName){
            console.log(`found ${studentName}`)
            return
        }
    }
    console.log("Student Not Found");
}
findStudent(Students,"karthick")


const findStudent1 = (allStudents1,studentName1) =>{
   console.log(allStudents1.includes(studentName1)? `Found ${studentName1}`:`Not Found ${studentName1}`);
}
findStudent1(Students,"karthick")
findStudent1(Students,"John")

// ✅ Time Complexity: O(n) (because includes checks each element once)
// ✅ Space Complexity: O(1) (no extra space used)
// ✅ Clean & Concise

const findStudent2 = (allStudents2,studentName2)=>{
    const studentSet = new Set(allStudents2)
    console.log(studentSet.has(studentName2)? `Found ${studentName2}`:`Not Found ${studentName2}`);
}
findStudent2(Students,"karthick")
findStudent2(Students,"John")

// ✅ Time Complexity: O(1) (because Set.has() is constant-time lookup)
// ✅ Space Complexity: O(n) (extra space for Set, but worth it for repeated lookups)
// ✅ Best for Large Datasets

// Big O notaion helps to understand how long an algorithm will take to run or = Time complexibility
//  How much memory it will need as the amount of datahandles grow = space complexibility

// O(n) the execution time of algorithm grows linearly in proportion to size of the input Data(n)
//items increases time increases

