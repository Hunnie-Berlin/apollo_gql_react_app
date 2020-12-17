import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  // const { loading, error, data } = useQuery(GET_MOVIES);
  const result = useQuery(GET_MOVIES);
  console.log(result);
  return <div>Home</div>;
};

export default Home;
