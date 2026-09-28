//A teacher wants to create a rubric for grading students based on a score from 0 to 11.

export function rubricPassFail(score) {
    if(Number(score) >= 5){
        return "Pass";
    } 
    return "Fail";
}
//node index.js 5 6