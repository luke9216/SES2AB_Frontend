import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { hamburgerStyles } from "./style";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Button } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkIcon from "@material-ui/icons/Work";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HomeIcon from "@material-ui/icons/Home";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
export interface HamburgerProps {
  props?: any;
  drawerDetails: Array<IhamburgerTypes>;
}

export interface IhamburgerTypes {
  name: string;
  path: string;
}

const Hamburger: React.SFC<HamburgerProps> = ({ children, drawerDetails }) => {
  const classes = hamburgerStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Button href="/">
            <HomeIcon className={classes.home}></HomeIcon>
          </Button>
          <Button href="/login">
            <Typography className={classes.home} variant="h6" noWrap>
              Sign In
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerDetails.map((tab: IhamburgerTypes, key) => (
            <ListItem button key={tab.name}>
              <Button href={tab.path}>
                <ListItemIcon>
                  {key === 0 ? (
                    <AssignmentIcon />
                  ) : <DashboardIcon /> && key === 1 ? (
                    <DashboardIcon />
                  ) : <AssignmentIcon /> && key % 4 === 2 ? (
                    <WorkIcon />
                  ) : <VideoLibraryIcon /> && key % 6 === 3 ? (
                    <VideoLibraryIcon />
                  ) : (
                    <PlaylistAddIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={tab.name} />
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        {/*Pushes content below toolbar*/}
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Hamburger;
