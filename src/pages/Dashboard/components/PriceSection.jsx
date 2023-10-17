import {
  Card,
  HStack,
  Icon,
  Text,
  Stack,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const PriceSection = () => {
  const timeStamps = ["7:15 PM", "7:45 PM", "8:15 PM", "9:45 PM", "10:05 PM"];

  return (
    <Card h="full" bg="white" borderRadius="xl" p={{ base: 2, md: 6 }}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="start">
        <Stack spacing={{ base: 2, xl: 4 }}>
          <HStack>
            <Text fontSize={14}>Current Price</Text>
          </HStack>
          <HStack
            spacing={{ base: 2, xl: 8 }}
            align={{ base: "flex-start", xl: "center" }}
          >
            <HStack>
              <Text fontSize="24px">$25,234.34</Text>
              <Text color="#059669" fontSize="14px">
                <Icon as={BsArrowUpRight}></Icon> 0.25%
              </Text>
            </HStack>
          </HStack>
        </Stack>

        <HStack spacing={{ base: 2, md: 4 }}>
          <Button
            bg="purple.600"
            color="white"
            fontWeight="medium"
            _hover={{
              bg: "purple.700",
              color: "white",
            }}
          >
            <Icon as={AiOutlinePlusCircle} m="6px" /> Buy
          </Button>
          <Button
            bg="purple.600"
            color="white"
            fontWeight="medium"
            _hover={{
              bg: "purple.700",
              color: "white",
            }}
          >
            <Icon as={AiOutlineMinusCircle} m="6px" />
            Sell
          </Button>
        </HStack>
      </Flex>

      <Tabs size="sm" variant="enclosed" colorScheme="purple">
        <Flex justify="flex-end">
          <TabList>
            <Tab>1H</Tab>
            <Tab isDisabled>1D</Tab>
            <Tab isDisabled>1W</Tab>
            <Tab isDisabled>1M</Tab>
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="./images/graph.png" mt={{ base: 2, md: 6 }} />
            <HStack spacing={2} justify="space-between">
              {timeStamps.map((t) => (
                <Text
                  key={t} // Use 't' as the key
                  fontSize={12}
                  color={"black"}
                >
                  {t}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default PriceSection;
