import {
  ListAlt,
} from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/Sidebar.css";
import { SidebarContext } from "../Context/SidebarContext";



export default function Sidebar() {
  const [sidebar, setSidebar] = React.useContext(SidebarContext)

  return (
    <Box >
      <Drawer  onClose={() => setSidebar(false)} anchor="left" open={sidebar}>
        <Box sx={{width: 290}}>
          <Box sx={{display: "flex"}} p={2.8}>
            <ListAlt sx={{mr: 0.2}}/>
            <Typography>Y-Todo</Typography>
          </Box>
          <Divider/>
            <List>
              <ListItem >
                <ListItemText primary={"Andere Liste"} />
              </ListItem>
            </List>
        </Box>
      </Drawer>
    </Box>
  );
}
