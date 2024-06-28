import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Avatar } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

function LatestCart({ description, author, time }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        borderRadius: "10px",
        margin: '2px',  
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
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
