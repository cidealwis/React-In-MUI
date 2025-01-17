import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import NewsCard from "../../Components/Component/News/NewsCart";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const newsData = [
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 1",
    description: "This is the description for news topic 1.",
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 2",
    description: "This is the description for news topic 2.",
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 3",
    description: "This is the description for news topic 3.",
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 3",
    description: "This is the description for news topic 3.",
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 3",
    description: "This is the description for news topic 3.",
  },
  {
    image: "https://via.placeholder.com/140",
    topic: "News Topic 3",
    description: "This is the description for news topic 3.",
  },
];

function News() {
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
          News
        </Typography>
        <Grid container spacing={2}>
          {newsData.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <NewsCard
                image={news.image}
                topic={news.topic}
                description={news.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default News;
