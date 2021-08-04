import {useState } from 'react'
import {useHistory} from 'react-router-dom'
import {
        Typography, Button ,Radio, RadioGroup, 
        FormControlLabel, Container,TextField, makeStyles,
        FormControl,FormLabel
       } from '@material-ui/core'

import SendIcon from '@material-ui/icons/Send';
import {db} from '../firebase/config'
const useStyles = makeStyles({
    field:{
        marginTop :20,
        marginBottom: 20,
        display:'block'
    }
});

export default function Create(){
    const history = useHistory()
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('money')
    function submitHandler(e){
        setTitleError(false)
        setDetailsError(false)
        e.preventDefault()
        if(!title){
            setTitleError(true)
        }
        if(!details){
            setDetailsError(true)
        }
        if(title && details){
            db.ref('notes/').push(
                {
                    title,
                    details,
                    category,
                    timestamp: new Date()
                }
            ).then(()=>history.push('/'))
            .catch(err=>console.error(err))
        }
    }
    return (
        <div>
            <Container>
                <Typography
                    className={classes.field}
                    variant="h5"
                    component="h2"
                    color="textSecondary" 
                    gutterBottom
                >
                    Create A New Note
                </Typography>
                <form  noValidate autoComplete="off" onSubmit={submitHandler}>
                    <TextField
                        onChange={(e)=>setTitle(e.target.value)}
                        className={classes.field} 
                        label="Note Title" 
                        variant="outlined"
                        color="secondary" 
                        error={titleError}
                        fullWidth
                        required
                    />
                    <TextField      
                        onChange={(e)=>setDetails(e.target.value)}
                        className={classes.field} 
                        label="Details" 
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={5} 
                        error={detailsError}
                        fullWidth
                        required
                    />
                    <FormControl className={classes.field}>
                        <FormLabel color="secondary">Note Category</FormLabel>
                        <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <FormControlLabel value="money" control={<Radio/>} label="Money"/>
                            <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
                            <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
                            <FormControlLabel value="work" control={<Radio/>} label="Work"/>
                        </RadioGroup>
                    </FormControl>
                   
                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Submit
                    </Button>
                </form>

               
               
            </Container>
           
           
        </div>
    )
}
