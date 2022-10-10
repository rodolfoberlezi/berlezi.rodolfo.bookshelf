import React from "react";
import { Button, Center, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import { FcKindle } from "react-icons/fc";

import TranslatedLabel from "./TranslatedLabel";

import { ph1Kindle, ph1CommonCover } from "../utils/links.json";

const AmazonButtons = () => {
  const styleProps = {
    bg: "linear-gradient(180deg, #F6C587 0%, #E99221 100%)",
    p: 8,
    width: "100%",
    fontSize: 24,
    color: "black",
    border: 3,
    borderStyle: "solid",
    borderColor: "orange.200",
    _hover: {
      bg: "orange.500",
      color: "white",
    },
  };

  return (
    <Stack width={"100%"} direction={{ base: "column", md: "row" }} spacing={4}>
      <Link href={ph1Kindle} _hover={{ textDecoration: "none" }} isExternal>
        <Button leftIcon={<FcKindle size={32} />} {...styleProps}>
          <Text as={"span"}>Kindle eBook</Text>
        </Button>
      </Link>

      <Flex direction={"column"}>
        <Link
          href={ph1CommonCover}
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          <Button disabled leftIcon={<FaBook size={32} />} {...styleProps}>
            <TranslatedLabel
              props={{ as: "span" }}
              text="CommonCover"
            ></TranslatedLabel>
          </Button>
        </Link>
        <Center>
          <TranslatedLabel props={{ as: "span" }} text="Soon"></TranslatedLabel>
        </Center>
      </Flex>
    </Stack>
  );
};

export default AmazonButtons;
