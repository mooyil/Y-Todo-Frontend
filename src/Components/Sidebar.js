import { ListAlt } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/Sidebar.css";
import { SidebarContext } from "../Context/SidebarContext";
import DateAndTimePicker from "./DateAndTimePicker";
import { Link } from "react-router-dom";
import { TabPanel } from "@mui/joy";
import Liste from "./Liste";
import { TabsContext } from "../Context/TabsContext";

export default function Sidebar() {
  const [sidebar, setSidebar] = React.useContext(SidebarContext);
   const {tabValue, setTabValue, TabPanel, handleTabsValue} = React.useContext(TabsContext)

  // function handleTabsValue (event, val) { 
  //   setTabValue(val)
  //  }
  return (
    <Box>
      <Drawer onClose={() => setSidebar(false)} anchor="left" open={sidebar}>
        <Box sx={{ width: 290 }}>
          <Box
            sx={{ display: "flex", backgroundColor: "#1565c0", color: "white" }}
            p={2.5}
          >
            <ListAlt sx={{ mr: 0.2 }} />
            <Typography>Y-Todo</Typography>
          </Box>
          <Divider />
          <List >
            <ListItem >
              <Tabs onChange={handleTabsValue} value={tabValue} orientation="vertical" >
                <Tab label="Arbeit" />
                <Tab label="Schule" />
                <Tab label="Zuhause" />
              </Tabs>
            </ListItem>
          </List>
          {/* <TabPanel value={tabValue} index={0} >hello</TabPanel>
          <TabPanel value={tabValue} index={1} >du</TabPanel>
          <TabPanel value={tabValue} index={2} >hund</TabPanel> */}
        </Box>
      </Drawer>
    </Box>
  );
  // function TabPanel ({children,value,index}) { 
  //   return (
  //     <div>
  //       {value===index && (<div>{children}</div>) }
  //     </div>
  //   )
  //  }
}
