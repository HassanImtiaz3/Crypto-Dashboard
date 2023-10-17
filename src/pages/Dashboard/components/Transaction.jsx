import React from "react";
import { Card, Text, Stack, Flex,Button, Icon, Grid } from "@chakra-ui/react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { FaEthereum } from "react-icons/fa";

const Transaction = () => {
  const transaction = [
    {
      id: "1",
      icon: AiOutlineDollarCircle,
      text: "Dollar Deposit",
      amount: "$12,234.56",
      timestamp: "2023-06-08 4:09 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcFill,
      text: "BTC Deposit",
      amount: "$34.56",
      timestamp: "2023-05-08 4:49 PM",
    },
    {
      id: "3",
      icon: FaEthereum,
      text: "ETH Deposit",
      amount: "$234.56",
      timestamp: "2023-03-08 4:19 PM",
    },
  ];

  return (
    <Card padding={6} h='full'>
      <Text mb={6} fontSize={14} marginTop={1} >Recent Transaction</Text>
      <Stack>
        {transaction.map((trans) => (
          <Flex key={trans.id} gap={4} >
            <Grid placeItems={"center"} boxSize={10} borderRadius="full" bg='purple.100'>
              <Icon as={trans.icon}></Icon>
            </Grid>
            <Flex justify="space-between" w='full'>
              <Stack>
                <Text fontSize='16px' fontWeight='bold'>{trans.text}</Text>
                <Text fontSize='14px' color='grey'>{trans.timestamp}</Text>
              </Stack>
              <Text fontSize='16px' fontWeight='bold'>{trans.amount}</Text>
            </Flex>
          </Flex>
        ))}
      </Stack>
      <Button w='full' mt={6} colorScheme='purple'>
        View All
      </Button>
    </Card>
  );
};

export default Transaction;
