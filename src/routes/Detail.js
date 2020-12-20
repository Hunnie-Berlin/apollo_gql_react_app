import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      description_intro
      language
      rating
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #a1b6e9, #e6ffed);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  width: 50%;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-size: cover;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, { variables: { id } });

  return (
    <Container>
      {loading ? (
        "Loading"
      ) : (
        <>
          <Column>
            <Title>{data?.movie.title}</Title>
            <Subtitle>
              {data?.movie.language} · {data?.movie.rating}
            </Subtitle>
            <Description>{data?.movie.description_intro}</Description>
          </Column>
          <Poster
            style={{
              backgroundImage: `url(${data?.movie.medium_cover_image})`,
            }}
          ></Poster>
        </>
      )}
    </Container>
  );
};

export default Detail;
