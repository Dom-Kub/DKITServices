import React from 'react';

import { Grid, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ScienceIcon from '@mui/icons-material/Science';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import '../../style/menu.css';
import icon from '../../photo/png/logo-no-background.png';
import { Outlet } from 'react-router-dom';

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="menu"
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          xs={4}
          className="menu-icons-side"
        >
          <Tooltip title="DK IT Services">
            <img src={icon} alt={'Company photo'} width="50px" />
          </Tooltip>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={4}
        >
          <Grid item>
            <Tooltip title="Home">
              <IconButton>
                <HomeIcon className="menu-icons-center" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Work">
              <IconButton>
                <WorkIcon className="menu-icons-center" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Hobby">
              <IconButton>
                <FmdGoodIcon className="menu-icons-center" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Experience">
              <IconButton>
                <ScienceIcon className="menu-icons-center" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          xs={4}
        >
          <Grid item>
            <Tooltip title="Contact">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <AccountCircleIcon
                  className="menu-icons-side"
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              className="menu-side"
              PaperProps={{
                sx: {
                  backgroundColor: '#444444'
                }
              }}
            >
              <MenuItem onClick={handleClose}>
                <FacebookIcon className="menu-side-icon" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <InstagramIcon className="menu-side-icon" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <GitHubIcon className="menu-side-icon" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CallIcon className="menu-side-icon" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <EmailIcon className="menu-side-icon" />
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
}

export { Navigation };
