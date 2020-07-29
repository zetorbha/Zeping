import React,{forwardRef } from 'react';
import { Card, CardContent, Typography, createMuiTheme } from '@material-ui/core';
import './Message.css';
import { lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: 'white',
        },
      },
    }
  });


const Message =forwardRef( ({msgs, user}, ref) => {
    const isUser = user=== msgs.userName;
    return (
        <div ref={ref} className={`mesg ${isUser&&`mesg--user`}`}>
                <Card className={isUser ? "mesg__userCard" :"mesg__guestCard" }>
                <CardContent>
                    <Typography 
                   theme={theme}
                    variant="h5"
                    component="h2">
                        {!isUser && `${msgs.userName || `Guest`}:`} {msgs.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>

           
          
        
    )
})

export default Message
