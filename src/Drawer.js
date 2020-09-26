import React from "react";
//import ReactDOM from "react-dom";
//import "./styles.css";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CakeIcon from "@material-ui/icons/Cake";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import InfoIcon from "@material-ui/icons/Info"
import Menu from "./Menu";
var jsonData = require("./menu.json");

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    marginBottom: 10,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("cakes");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const cakesTypeClick = () => {
    setType("cakes");
    handleDrawerClose();
  };
  const drinksTypeClick = () => {
    setType("drinks");
    handleDrawerClose();
  };
  const foodTypeClick = () => {
    setType("food");
    handleDrawerClose();
  };
  const specialsTypeClick = () => {
    setType("specials");
    handleDrawerClose();
  };
  
  const infoClick = () => {
    handleDrawerClose();
    alert("Made by Josh :)")
  };

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              The Way Coffee House Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={cakesTypeClick}>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText primary="Cakes" />
            </ListItem>
            <ListItem button onClick={drinksTypeClick}>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText primary="Drinks" />
            </ListItem>
            <ListItem button onClick={foodTypeClick}>
              <ListItemIcon>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary="Food" />
            </ListItem>
            <ListItem button onClick={specialsTypeClick}>
              <ListItemIcon>
                <NewReleasesIcon />
              </ListItemIcon>
              <ListItemText primary="Specials" />
            </ListItem>
            <Divider/>
            <ListItem className="Drawer__info" button onClick={infoClick}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Info" />
            </ListItem>
          </List>		  
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        ></main>
      </div>
      <Menu menu={jsonData.items} type={type} />
    </div>
  );
}
