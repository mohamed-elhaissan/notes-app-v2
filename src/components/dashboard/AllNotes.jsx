
import { useEffect } from "react";
import { request } from "../../utils/axiosUtilis";

export default function AllNotes(){
    const fetchAllNotes = async ()=>{
        await request({url : '/notes'}).then((reponse)=>{
            console.log(reponse);
            
        }).catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
        fetchAllNotes()
    },[])
    return (
        <div>
            
        </div>
    )
}