import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {lime , red, green,cyan } from '@material-ui/core/colors'
const useStyles = makeStyles({    
      avatar:{
        background:(note)=>{
          switch(note.category){
             case "work":
               return red[300];
               
             case "money":
                return lime[400]
                
             case "todos":
                return green[400];
                
             default :
                return cyan[300]
                
          }
        } 

     }
})
export default function NoteCard({note,onDelete}) {
    const classes= useStyles(note)
    return (
        <div>
             <Card>
                <CardHeader
                  avatar={
                    <Avatar className={classes.avatar}>
                       {note.category[0].toUpperCase()}
                    </Avatar>
                  }
                   action={
                        <IconButton onClick={()=>onDelete(note.id)}>
                          <DeleteIcon/>
                        </IconButton>
                    }
                   title={note.title}
                   subheader={note.category}
                 />
                <CardContent>
                    <Typography
                      variant="body1"
                      component="p"
                      color="textSecondary"
                    >
                        {note.details}
                    </Typography>
                </CardContent>
             </Card>
        </div>
    )
}
