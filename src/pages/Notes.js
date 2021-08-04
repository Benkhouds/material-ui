import {useEffect, useState} from 'react'
import Grid from '@material-ui/core/Grid'
import NoteCard from '../components/NoteCard'
import Container from '@material-ui/core/Container'
import {db} from '../firebase/config.js'
export default function Notes() {
    const [notes, setNotes] = useState([])
    useEffect(()=>{
         
         db.ref()
            .child('notes')
            .get()
            .then((snapshot)=>{
                if(snapshot.exists()){
                    const data =snapshot.val()
                    setNotes(Object.keys(data).map((e)=>({id:e,...data[e]})))
                }else{
                    console.log("no data")
                }
            })
            .catch(err=>console.log(err))
      
    },[setNotes]) 


    function handleDelete(item){
        db.ref('notes/'+item)
           .remove()
            .then(()=>setNotes(notes.filter(({id})=>id!==item)))
            .catch(err=>console.error(err))
    }
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {notes && notes.map((note)=>(
                    
                    <Grid item md={4} sm={6} key={note.id}>
                        <NoteCard onDelete={handleDelete} note={note}/>
                    </Grid>  
                ))}
            </Grid>
        </Container>
        
        
    )
}
