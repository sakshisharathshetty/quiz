import {database} from "./firebaseconfig.js"
import{ref,set,push} from "firebase/database"
export async function createUserInDB(name,age, email, phone){
    const profile={
        "name":name,//these are the values that we will store in the database
        "age":age,
        "email":email,
        "phone":phone
    }
    try{
        const profileRef=ref(database,"userProfiles")//userprofile is the key in the database where we will store the data
        const result=await set(profileRef, profile)
        alert(JSON.stringify(result))
    }catch(error){
        alert(JSON.stringify(error))
} 
}