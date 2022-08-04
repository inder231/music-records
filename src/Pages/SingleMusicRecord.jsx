import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getMusicRecords } from "../Redux/AppReducer/action";
const SingleMusicRecord = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentMusic, setCurrentMusic] = useState("");
  const musicRecords = useSelector((store) => store.appReducer.musicRecords);
  // console.log(musicRecords);
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecords());
    }
  }, [dispatch, musicRecords.length]);
  useEffect(() => {
    if (id) {
      let currentAlbum = musicRecords.find((album) => album.id === id);
      currentAlbum && setCurrentMusic(currentAlbum);
    }
  }, [id, musicRecords]);
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
        }}
      >
        <div>
          <img
            style={{ borderRadius: "1rem" }}
            src={currentMusic?.img}
            alt=""
          />
        </div>
        <div>{currentMusic?.name}</div>
        <div>{currentMusic?.year}</div>
        <div>
          <Link to={`/music/${id}/edit`}>
            <Button variant="ghost" m="1">
              <EditIcon />
            </Button>
          </Link>
          <div>
            <Link to="/">
              <Button colorScheme="blue">
                <ArrowLeftIcon />
                _Go Back HOME
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMusicRecord;
