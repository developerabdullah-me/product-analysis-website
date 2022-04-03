import { useEffect, useState } from "react"
const useComment=()=>{
    const [comments,setComment]=useState([])
    useEffect(()=>{
        fetch('comment.json')
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    return [comments,setComment]
}
export default useComment;