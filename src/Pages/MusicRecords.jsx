import React, { useEffect } from "react";
import {Link,useLocation,useSearchParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecords } from "../Redux/AppReducer/action";
import { Spinner, SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.appReducer.musicRecords);
  const isLoading = useSelector((store) => store.appReducer.isLoading);
  const isError = useSelector((store) => store.appReducer.isError);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // console.log(musicRecords);
  useEffect(() => {
    if (location||musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params:{
          'genre': searchParams.getAll('genre'),
          _sort:sortBy&&'year',
          _order:sortBy
        }
      }
      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);
  return (
    <>
      {isLoading && <Spinner />}
      {isError && !isLoading ? (
        "something went wrong"
      ) : (
        <SimpleGrid columns={[1,2,3,4]}>
          {musicRecords?.map((album) => (
            <Box key={album.id}>
              <Link to={`/music/${album.id}`} >
              <Image src={album.img} alt="recordImage" />
              <Text>{album.name}</Text>
              <Text>{album.year}</Text>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default MusicRecords;
