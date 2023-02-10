import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../api";
import Loading from "../components/Loading";
import { IDetailData } from "../types";

export default function Detail() {
  const { movieId } = useParams();
  const { isLoading, data } = useQuery<IDetailData>(
    ["movie", movieId],
    getMovieDetail
  );
  return (
    <>
      {isLoading ? <Loading /> : null}

      <Flex
        mx={"auto"}
        w={{ "2xl": "80%" }}
        bgImage={data?.data.movie.background_image_original}
        bgRepeat="no-repeat"
        bgPos={"center"}
        bgSize={"cover"}
        direction={{ base: "column", md: "row" }}
        // variant="outline"
        overflow="hidden"
        maxH={"90vh"}
      >
        <Stack w={{ md: "50%" }} maxH="100%" justifyContent={"center"}>
          <Image
            borderRadius={10}
            maxW="100%"
            maxH="100%"
            overflow={"hidden"}
            objectFit={"cover"}
            src={data?.data.movie.large_cover_image}
          ></Image>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          w={{ base: "90%", md: "50%" }}
        >
          <Heading>{data?.data.movie.title}</Heading>
          <Box>
            <Text noOfLines={5}>{data?.data.movie.description_intro}</Text>
            <Tooltip
              label={data?.data.movie.description_full}
              placement="right-start"
              fontSize={"lg"}
            >
              <Button colorScheme={"yellow"}>Description</Button>
            </Tooltip>
          </Box>
          <Text fontSize={"xl"}>
            Genres :{" "}
            {data?.data.movie.genres.map((g) => (
              <Badge colorScheme="orange">{g}</Badge>
            ))}
          </Text>
          <Text fontSize={"xl"}>
            Language :{" "}
            <Badge colorScheme={"cyan"}>{data?.data.movie.language}</Badge>
          </Text>
          <Text fontSize={"xl"}>
            Rating :{" "}
            <Badge colorScheme={"green"}>{data?.data.movie.rating}</Badge>
          </Text>
          <Text fontSize={"xl"}>
            Runtime :{" "}
            <Badge colorScheme={"pink"}>{data?.data.movie.runtime} min.</Badge>
          </Text>
          <Text fontSize={"xl"}>
            Year : <Badge colorScheme={"red"}>{data?.data.movie.year}</Badge>
          </Text>
        </Stack>
      </Flex>
    </>
  );
}
