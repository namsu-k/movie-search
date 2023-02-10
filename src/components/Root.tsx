import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root() {
  return (
    <Box h="100vh" w="98vw" mx={"auto"} mt={"auto"}>
      <Header />
      <Outlet />
    </Box>
  );
}
