import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import DashboardLayout from "../../components/DashboardLayout";
import Portfolio from "./components/Portfolio";
import PriceSection from "./components/PriceSection";
import Transaction from "./components/Transaction";
import Loan from "./components/Loan";
import Contact from "./components/Contact";

const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gap={3}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)", // On smaller screens, display a single column
          md: "repeat(2, 1fr)",   // On medium screens and above, display two columns
        }}
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <Loan />
        </GridItem>
        <GridItem colSpan={1}>
          <Contact />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
