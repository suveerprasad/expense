import {addDoc, collection,serverTimestamp} from "firebase/firestore"
import {db} from "../config/firebase-config";
import {userGetUserinfo} from "./userGetUserinfo"
export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "transactions");
    const { userId } = userGetUserinfo();
    const addTransaction = async ({
        transactionAmount,
        transactionType
    }) => {
        if (!userId) {
            console.error("userID is undefined. Transaction cannot be added.");
            return;
        }
        try {
            await addDoc(transactionCollectionRef, {
                userId,
                transactionAmount,
                transactionType,
                createdAt: serverTimestamp()
            });
            console.log("Transaction added successfully");
        } catch (error) {
            console.error("Error adding transaction: ", error);
        }
    }

    return { addTransaction }
}
