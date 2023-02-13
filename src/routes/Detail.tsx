import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaLink } from "react-icons/fa";
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
      {isLoading ? (
        <VStack justifyContent={"center"} h="100vh">
          <Loading />
        </VStack>
      ) : (
        <Box
          w="100%"
          h="100%"
          bgImage={data?.data.movie.background_image_original}
          bgRepeat="no-repeat"
          bgPos={"center"}
          bgSize={"cover"}
          overflow="hidden"
        >
          <Stack
            bgColor={"rgba(0,0,0,0.8)"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              borderRadius={10}
              overflow={"hidden"}
              objectFit={"cover"}
              src={data?.data.movie.large_cover_image}
            ></Image>
          </Stack>
          <Stack
            bgColor={"rgba(0,0,0,0.8)"}
            justifyContent="center"
            alignItems="center"
            fontSize="xl"
            pb={4}
          >
            <Flex w="70%" justifyContent={"center"} textAlign="center">
              <Heading>{data?.data.movie.title}</Heading>
            </Flex>
            <Flex direction={"column"} alignItems="center">
              <Tooltip
                label={data?.data.movie.description_full}
                placement="top"
                fontSize={"md"}
              >
                <Button colorScheme={"linkedin"}>Description</Button>
              </Tooltip>
            </Flex>
            {data?.data.movie.cast
              ? data?.data.movie.cast.map((cast) => (
                  <HStack>
                    <Avatar name={cast.name} src={cast.url_small_image} />
                    <VStack spacing={-1}>
                      <Text>{cast.name}</Text>
                      <Button
                        as={"a"}
                        variant="link"
                        href={`https://imdb.com/name/nm${cast.imdb_code}/`}
                        target="_blank"
                        colorScheme={"yellow"}
                      >
                        <FaLink /> Link (imdb.com)
                      </Button>
                    </VStack>
                  </HStack>
                ))
              : null}
            <Text>
              Genres :{" "}
              {data?.data.movie.genres.map((g) => (
                <Badge
                  mx={1}
                  colorScheme="blue"
                  fontSize={14}
                  variant={"outline"}
                >
                  {g}
                </Badge>
              ))}
            </Text>
            <Text>
              Language :{" "}
              <Badge colorScheme={"green"} fontSize={14} variant={"outline"}>
                {data?.data.movie.language}
              </Badge>
            </Text>
            <Text>
              Rating :{" "}
              <Badge colorScheme={"purple"} fontSize={14} variant={"outline"}>
                {data?.data.movie.rating}
              </Badge>
            </Text>
            <Text>
              Runtime :{" "}
              <Badge colorScheme={"pink"} fontSize={14} variant={"outline"}>
                {data?.data.movie.runtime === 0
                  ? "-"
                  : `${data?.data.movie.runtime} min.`}
              </Badge>
            </Text>
            <Text>
              Year :{" "}
              <Badge colorScheme={"red"} fontSize={14} variant={"outline"}>
                {data?.data.movie.year}
              </Badge>
            </Text>
            <HStack>
              <Text>Detail Link :</Text>
              <Button
                as="a"
                href={`https://imdb.com/title/${data?.data.movie.imdb_code}`}
                target={"_blank"}
                variant="link"
                colorScheme={"yellow"}
              >
                <FaLink /> Link (imdb.com)
              </Button>
              <Button
                as="a"
                href={data?.data.movie.url}
                target={"_blank"}
                variant="link"
                colorScheme={"green"}
              >
                <FaLink /> Link (yts.mx)
              </Button>
            </HStack>
          </Stack>
        </Box>
      )}
    </>
  );
}
