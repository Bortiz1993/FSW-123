import {v4 as uuidv4} from "uuid";

export const listOfToDos = [
    {
        _id: uuidv4(),
        text: "goto gym",
        isCompleted: false
    },
    {
        _id: uuidv4(),
        text: "do laundry",
        isCompleted: false
    }
];

