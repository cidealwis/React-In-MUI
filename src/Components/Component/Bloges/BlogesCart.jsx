import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider, Box, Button, Avatar } from '@mui/material';
import { AccessTime, Comment } from '@mui/icons-material';


function BlogesCart({ topic, description, author, time, comments }) {
   return (
    <Card sx={{ maxWidth: 390,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
     }}>
      <CardActionArea>
        <CardContent>
        
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            sx={{
              background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            {topic}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Box sx={{ 
            display: 'flex', alignItems: 'center', marginTop: 2 
            }}>
            <Avatar alt={author} src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24, marginRight: 1 }} />
            <Typography variant="body2" color="text.primary">
              {author}
            </Typography>

            <AccessTime sx={{ marginLeft: 2, marginRight: 0.5 }} fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {time}
            </Typography>

            <Comment sx={{ marginLeft: 1, marginRight: 0.5 }} fontSize="small" />
            <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 0.5 }}>
              {comments} Comments
            </Typography>

          </Box>
          <Button variant="outlined" sx={{ 
            marginTop: 2 ,
            color: 'black',
            borderColor: 'black',
            borderRadius: 2,
            textTransform: 'none',
          }}>Read</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogesCart
