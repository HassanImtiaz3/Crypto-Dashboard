import {
  Flex,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {FaRegUserCircle} from 'react-icons/fa'
import {ImMenu} from 'react-icons/im'

const TopNav = ({title, onOpen}) => {
  return (
    <Box px='4' bg='white'>
      <HStack
        maxWidth="70rem"
        h="16"
        padding='12px'
        justify="space-between"
        mx='auto'
      >
        <Icon as={ImMenu} onClick={onOpen} display={{
            base: 'block',
            lg: 'none'
        }} ></Icon>
        <Heading fontSize='24px' fontWeight='medium'>{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize='28px' as={FaRegUserCircle} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
