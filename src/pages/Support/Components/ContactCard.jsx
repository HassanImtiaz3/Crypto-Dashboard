import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive a response within 24 hours of the time of submission.
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row", // Adjusted for medium-sized screens
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name.." />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input placeholder="Enter Your Surname.." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email.." />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter Your Message.." />
        </FormControl>
        <Checkbox defaultChecked colorScheme="purple" >
          <Text fontSize="xs">
            I agree with{" "}
            <Box as="span" color="p.purple">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack direction={{ base: "column", md: "row" }} spacing={3}>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
