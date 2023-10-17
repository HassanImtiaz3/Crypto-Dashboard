import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";
import { ImUpload, ImDownload } from "react-icons/im";
const Portfolio = () => {
  return (
    <HStack
    justify='space-between'
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        spacing={{
          base: "5",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack>
            <Text fontSize="14px" color="grey">
              Total Portfolio Value
            </Text>
            <Icon as={AiFillInfoCircle} color="p.purple" />
          </HStack>
          <Text>$ 112,312.24</Text>
        </Stack>

        <Stack>
          <HStack>
            <Text fontSize="14px" color="grey">
              Wallet Balances
            </Text>
            <Icon as={IoIosWallet} color="p.purple" />
          </HStack>
          <HStack>
            <HStack>
              <Text>$ 452,312.24</Text> <Tag colorScheme="purple">BTC</Tag>
            </HStack>
            <HStack>
              <Text>$ 892,312.24</Text> <Tag colorScheme="purple">ETH</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack >
        <Button bg="p.purple" color="white" fontWeight="medium"
        _hover={{
          bg: 'p.purple',
          color: 'white',
        }}
        
        >
          <Icon as={ImDownload} m="6px" /> Deposit{" "}
        </Button>
        <Button bg="p.purple" color="white" fontWeight="medium"
         _hover={{
          bg: 'p.purple',
          color: 'white',
        }}
        >
          <Icon as={ImUpload} m="6px" />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
