import { Add, Delete, ListAlt } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  Tab,
  Tabs,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { TabsContext } from "../Context/TabsContext";
import { tabApiService } from "../services/tabApiService";
import SidebarModal from "./SidebarModal";

export default function Sidebar() {
  const TabApiService = new tabApiService();
  const {
    sidebar,
    setSidebar,
    handleOpen,
    handleClose,
    tabInputValue,
    setTabInputValue,
  } = React.useContext(SidebarContext);
  const { tabValue, handleTabsValue, listTabs, setListTabs } =
    React.useContext(TabsContext);

  let tabItem = {
    name: tabInputValue,
  };

  React.useEffect(() => {
    TabApiService.getTabs().then((res) => setListTabs(res.data));
  }, []);

  function doesTabExist(tabInputValue) {
    var doesExist = false;
    
    console.log(listTabs.forEach( (tab) => {
      if (tab.name === tabInputValue) {
        console.log("existiert")
        doesExist = true;
      }
    }))

    console.log("val of doesexist " + doesExist)
    return doesExist;
   
  }

  function add() {

    console.log(listTabs)
 
    if (tabInputValue === "") {
      alert("empty");
      return;
    }

    console.log(listTabs.includes(tabInputValue))


    if (doesTabExist(tabInputValue)) {
      alert("already existing");
      return;
    }

      addNewTab();
      setTabInputValue("");
    
  }

  function addNewTab() {
    TabApiService.createTabPost(tabItem).then((data) =>
      setListTabs([...listTabs].concat(data))
    );
  }

  function deleteTabServer(name) {
    if (listTabs.length === 1) {
      console.log("you need one list");
    } else {
      TabApiService.deleteTabServer(name);
    }
  }

  function deleteTab(name) {
    if (listTabs.length === 1) {
      alert("you need one list");
    } else {
      const newTabs = [...listTabs].filter((tab) => tab.name !== name);
      setListTabs(newTabs);
    }
  }

  return (
    <Box>
      <Drawer onClose={() => setSidebar(false)} anchor="left" open={sidebar}>
        <Box sx={{ width: 290 }}>
          <Box
            sx={{ display: "flex", backgroundColor: "#1565c0", color: "white" }}
            p={2.5}
          >
            <ListAlt sx={{ mr: 1 }} />
            <Typography>Y-Todo</Typography>
          </Box>
          <Button
            startIcon={<Add />}
            onClick={handleOpen}
            sx={{ m: 0.5, ml: 0 }}
            size="small"
            color="primary"
            variant="contained"
            aria-label="add"
          >
            <Typography variant="button">Create a new list</Typography>
          </Button>
          <SidebarModal add={add} />
          <Divider />
          <Box>
            <Tabs
              sx={{ width: 150, wordBreak: "break-all" }}
              onChange={handleTabsValue}
              value={tabValue}
              orientation="vertical"
            >
              {listTabs.map((tab, i) => {
                return <Tab key={i}  label={tab.name} />;
              })}
            </Tabs>
            <Box
              sx={{
                position: "absolute",
                right: 10,
                top: 110,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {listTabs.map((tab) => {
                return (
                  <IconButton
                    key={tab.name}
                    onClick={() => {
                      deleteTab(tab.name);
                      deleteTabServer(tab.name);
                    }}
                    sx={{ m: 0.5, width: 10, color: "primary.main" }}
                  >
                    <Delete />
                  </IconButton>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
