import React from 'react'
import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NewsCard from "../../Components/Component/News/NewsCart";
import Grid from "@mui/material/Grid";
import LatestCart from '../../Components/Component/Home/LatestCart';
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
  ];

  const latestNewsData = [
    {
      
     
      description: "This is the description for news topic 1.",
      author: "John Doe",
      time: "2 hours ago",
    
    },
    {
      
     
      description: "This is the description for news topic 2.",
      author: "Jane Smith",
      time: "3 hours ago",
     
    },
    {
     
      
      description: "This is the description for news topic 3.",
      author: "Mike Johnson",
      time: "1 hour ago",
      
    },
    {
      
     
      description: "This is the description for news topic 4.",
      author: "Emily Brown",
      time: "4 hours ago",
      
    },
  ];


function Home() {
  return (
    <>
        <Header/>
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
          LYXUX MAGAZINE
        </Typography>

          <Typography 
          variant='h5'
          >
            Latest News
          </Typography>

          <Grid container spacing={0.5} >
          {latestNewsData.map((news, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <LatestCart
                description={news.description}
                author={news.author}
                time={news.time}
              />
            </Grid>
          ))}
        </Grid>


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
        <Footer/>
    </>
  )
}

export default Home
