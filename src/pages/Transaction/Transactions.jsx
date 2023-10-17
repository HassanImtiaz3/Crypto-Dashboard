import { Card, Flex, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Tag } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { BiCloudDownload } from "react-icons/bi";
import TransTable from "./components/TransTable";

const tabs = [
  {
    name: "All",
    count: 127,
  },
  {
    name: "Deposit",
    count: 30,
  },
  {
    name: "Withdraw",
    count: 59,
  },
  {
    name: "Trade",
    count: 39,
  },
];

const Transactions = () => {
  return (
    <DashboardLayout title={'Transaction'}>
      <Flex justify="end" mt={6} mb={3}>
        <Button bg="p.purple" color="white" fontWeight="medium"
        _hover={{
          bg: 'black',
          color: 'white',
        }}
         leftIcon={<Icon as={BiCloudDownload} />}>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt={4}>
            {tabs.map((tab) => (
              <Tab key={tab.name} display={"flex"} gap={2}>
                {tab.name}{" "}
                <Tag colorScheme="purple" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransTable />
            </TabPanel>
            <TabPanel>
              <TransTable />
            </TabPanel>
            <TabPanel>
              <TransTable />
            </TabPanel>
            <TabPanel>
              <TransTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transactions;
