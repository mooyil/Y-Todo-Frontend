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
import Liste from "./Liste";
import { TabsContext } from "../Context/TabsContext";

export default function Sidebar() {
  const [sidebar, setSidebar] = React.useContext(SidebarContext);
  const { tabValue, setTabValue, TabPanel, handleTabsValue, listTabs, setListTabs } =
    React.useContext(TabsContext);


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
          <List>
            <ListItem>
              <Tabs
                onChange={handleTabsValue}
                value={tabValue}
                orientation="vertical"
              >
                {listTabs.map((tab, i) => {
                  return <Tab key={i} label={tab} />;
                })}
              </Tabs>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
