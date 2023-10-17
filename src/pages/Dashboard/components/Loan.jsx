import { Card, HStack, Stack, Tag,Text } from "@chakra-ui/react";
import React from "react";

const Loan = () => {
  return (
    <Card h='full'>
      <Stack>
        <HStack padding='15px 10px'>
          <Tag bg="p.purple"  color="white" borderRadius={"full"}>
            Loans
          </Tag>
        </HStack>
        <HStack>
            <Text fontSize='16px'  padding='0px 10px 15px 12px' fontWeight='500'>
            Learn more about Loans – Keep your Bitcoin, access it’s value without selling it.
            </Text>
        </HStack>
      </Stack>
    </Card>
  );
};

export default Loan;
