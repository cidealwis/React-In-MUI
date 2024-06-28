import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Box, Button, Avatar } from "@mui/material";
import { AccessTime, Comment } from "@mui/icons-material";

function LatestCart({ topic, description, author, time }) {
  return (
    <Card
      sx={{
        maxWidth: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        borderRadius: "10px",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            {topic}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description }
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <AccessTime
              sx={{ marginLeft: 0, marginRight: 0.5 }}
              fontSize="small"
            />
            <Typography variant="body2" color="text.secondary">
              {time}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Avatar
              alt={author}
              src="/static/images/avatar/1.jpg"
              sx={{ width: 24, height: 24 }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default LatestCart;
