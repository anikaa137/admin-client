import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
// IconBox1
import HomeIcon from "@material-ui/icons/Home";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import PrintIcon from "@material-ui/icons/Print";
import QueueIcon from "@material-ui/icons/Queue";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonIcon from "@material-ui/icons/Person";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";

// IconBox2
import SettingsIcon from "@material-ui/icons/Settings";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AdminRoute from "../AdminRoute/AdminRoute";
import AdminDashboardTopBar from "../AdminDashboardTopBar/AdminDashboardTopBar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function AdminPanel(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const IconBox1 = [
    <HomeIcon />,
    <LocalMallIcon />,
    <LocalGroceryStoreIcon />,
    <PrintIcon />,
    <QueueIcon />,
    <MonetizationOnIcon />,
    <PersonIcon />,
    <SpeakerNotesIcon />,
    <FilterVintageIcon />,
    <DonutSmallIcon />,
  ];

  const IconBox2 = [<SettingsIcon />, <LocalOfferIcon />];
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          "Home",
          "Add user",
          "User Request",
          "Add Admin",
          "Sellers",
          "Add product",
          "Transactions",
          "Account",
          "Reviews",
          "Brands",
          "Statistics",
        ].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={`${text.split(" ").join("-").toLowerCase()}`}
          >
            <ListItemIcon>{IconBox1[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        {["Settings", "Starter page"].map((text, index) => (
          <ListItem
            key={text}
            component={Link}
            to={`${text.split(" ").join("-").toLowerCase()}`}
          >
            <ListItemIcon>{IconBox2[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <AdminDashboardTopBar />
          {/* Admin Dashboard Top Bar */}
          <Typography variant="h6" noWrap>
            
          </Typography>

        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <AdminRoute />
        </main>
      </BrowserRouter>
    </div>
  );
}

AdminPanel.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
};

export default AdminPanel;
