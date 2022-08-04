import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecords, updateMusicRecord } from "../Redux/AppReducer/action";
const EditMusicRecord = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    year: "",
    artist: "",
  });
  // const [currentMusic, setCurrentMusic] = useState("");
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.appReducer.musicRecords);
  const updating = useSelector((store) => store.appReducer.isUpdating);
  useEffect(() => {
    if (id) {
      let current = musicRecords.find((album) => album.id === id);
      // current && setCurrentMusic(current);
      current && setForm(current);
    }
  }, [id, musicRecords]);
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecords());
    }
  }, [dispatch, musicRecords.length]);
  // console.log(currentMusic);
  const inputHandle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    let payload = {
      name: form.name,
      year: form.year,
      artist: form.artist,
    };
    dispatch(updateMusicRecord(id, payload)).then((r) => {
      // console.log(r.type);
      if (r.type === "UPDATE_MUSIC_RECORDS_SUCCESS") {
        dispatch(getMusicRecords());
      }
    });
  };
  return (
    <Box w="50%" m="10% auto">
      <form onSubmit={handleUpdate}>
        <FormControl>
          <FormLabel>Edit Name</FormLabel>
          <Input
            autoComplete="off"
            value={form.name}
            name="name"
            onChange={inputHandle}
            type="text"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Edit Artist</FormLabel>
          <Input
            autoComplete="off"
            value={form.artist}
            name="artist"
            onChange={inputHandle}
            type="text"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Edit Year</FormLabel>
          <Input
            autoComplete="off"
            value={form.year}
            name="year"
            onChange={inputHandle}
            type="text"
          />
        </FormControl>
        <Flex m="2" justify="space-around" align="center">
          <Button type="submit" isLoading={updating}>
            Update
          </Button>
          <Button>
            <Link to={`/music/${id}`}>Go Back</Link>
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default EditMusicRecord;
