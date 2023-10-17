import React from 'react'
import { Card, HStack, Stack, Tag,Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Card h='full' bg='p.purple' color='white'>
      <Stack>
        <HStack padding='15px 10px'>
          <Tag bg="white"  color="purple" borderRadius={"full"}>
            Contact
          </Tag>
        </HStack>
        <HStack>
            <Text fontSize='16px'  padding='0px 10px 15px 12px' fontWeight='500'>
            Learn more about our real estate, mortgage, and  corporate account services.            </Text>
        </HStack>
      </Stack>
    </Card>
  )
}

export default Contact
