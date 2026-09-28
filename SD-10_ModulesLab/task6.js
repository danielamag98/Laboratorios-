//A teacher also wants to mark students who get a high score of 9 or more.

import { rubricPassFail } from "./task5.js";

export function rubricExcellent(score) {
    if(Number(score) > 8){
        return "Excellent";
    }
    return rubricPassFail(score);
}

//node index.js 6 9