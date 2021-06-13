import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_SONG_TITLES = gql`
  {
    songs {
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(GET_SONG_TITLES);
  console.log("data : ", data);
  return <div>SongList</div>;
};

export default SongList;
