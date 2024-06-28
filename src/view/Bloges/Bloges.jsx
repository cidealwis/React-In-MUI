import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import BlogesCart from "../../Components/Component/Bloges/BlogesCart"; // Corrected import
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const newsData = [
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 1",
    description: "This is the description for news topic 1.",
    author: "John Doe",
    time: "2 hours ago",
    comments: 5,
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 2",
    description: "This is the description for news topic 2.",
    author: "Jane Smith",
    time: "3 hours ago",
    comments: 3,
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 3",
    description: "This is the description for news topic 3.",
    author: "Mike Johnson",
    time: "1 hour ago",
    comments: 7,
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 4",
    description: "This is the description for news topic 4.",
    author: "Emily Brown",
    time: "4 hours ago",
    comments: 2,
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 5",
    description: "This is the description for news topic 5.",
    author: "David Lee",
    time: "5 hours ago",
    comments: 9,
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 6",
    description: "This is the description for news topic 6.",
    author: "Sarah White",
    time: "30 minutes ago",
    comments: 1,
  },
];

function Bloges() {
  return (
    <>
      <Header />
      <Container
        sx={{
          paddingBottom: "100px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            background: "linear-gradient(to right, #ff7e5f, #feb47b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            padding: "50px",
            fontWeight: "bold",
          }}
        >
          Bloges
        </Typography>
        <Grid container spacing={2}>
          {newsData.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BlogesCart
                image={news.image}
                topic={news.topic}
                description={news.description}
                author={news.author}
                time={news.time}
                comments={news.comments}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Bloges;
