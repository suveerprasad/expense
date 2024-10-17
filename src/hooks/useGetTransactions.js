import { useEffect ,useState} from "react";
import {query, collection, orderBy, onSnapshot, doc,where} from "firebase/firestore";
import {db} from "../config/firebase-config"
import { userGetUserinfo } from "./userGetUserinfo";

export const useGetTransactions = () => {

    const [transactions,setTransactions] = useState([]);
    const transactionCollectionRef = collection(db, "transactions");
    const {userId} = userGetUserinfo();

    const getTransactions = async() => {
        let unsubscribe
        try{
            const queryTransactions = query(
                transactionCollectionRef,
                where("userId","==",userId),
                orderBy("createdAt")
            )
            unsubscribe = onSnapshot(queryTransactions,(snapshot) => {

                let docs = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id

                    docs.push({...data, id});
                })

                setTransactions(docs)

            })
        }
        catch(err){
            console.error(err);
        }
        return() => unsubscribe()
    }

    useEffect(() => {
        getTransactions()
    },[])

    return {transactions}
}