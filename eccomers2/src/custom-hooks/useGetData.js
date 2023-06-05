import { useEffect, useState }  from 'react'
import {db} from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'


const useGetdata = (collectionName) => {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const collectionRef =collection(db,collectionName);

    //fucion para agregar y borrar cosas en tiempo real

    useEffect(()=>{ 
        const getData =async()=>{
             const data =  await getDocs(collectionRef);
            setData(data.docs.map(doc => ({...doc.data(),id:doc.id})));
            setLoading(false)
            
            
        }

        getData();
    },[]);

  return {data,loading};
}

export default useGetdata;