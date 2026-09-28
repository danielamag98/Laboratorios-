//A teacher also wants to mark students who get a perfect score of 11.

import { rubricExcellent } from "./task6.js";

export function rubricPerfect(score) {
    if (Number(score) === 11) {
        return "Perfect";
    }
    return rubricExcellent(score);
}
//node index.js 7 11