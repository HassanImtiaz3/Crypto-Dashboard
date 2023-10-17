import React from "react";
import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowsAngleContract } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideLink = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowsAngleContract,
      text: "Transaction",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      height={{
        base: "96vh",
        lg: "100vh",
      }}
    >
      <Box>
        <Heading
          color="p.purple"
          fontSize="20px"
          padding="6px"
          pt="16px"
          as="h1"
          textAlign="center"
        >
          @HoomanProduction
        </Heading>
        <Box mx="3" mt="6">
          {sideLink.map((side) => (
            <Link to={side.link} key={side.text}>
              <HStack
                mx="3"
                py="3"
                px="4"
                borderRadius="10px"
                _hover={{
                  bg: "#f3f3f7",
                  color: "p.purple",
                }}
                color="black"
              >
                <Icon as={side.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {side.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mx="3" mt="6">
        <Link to='/support'>
        <HStack
          mx="3"
          py="3"
          px="4"
          borderRadius="10px"
          _hover={{
            bg: "#f3f3f7",
            color: "p.purple",
          }}
          color="black"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
        </Link>
        
      </Box>
    </Stack>
  );
};

export default SideBar;
