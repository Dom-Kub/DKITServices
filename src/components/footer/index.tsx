import { Box, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import '../../style/footer.css';
import { margin } from '@mui/system';
function Footer() {
  return (
    <footer className="footer">
      <Box
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: '100%'
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            paddingTop: 3
          }}
        >
          <Grid item xs={2} />
          <Grid item xs={3}>
            <Typography variant="h5" color="white" marginLeft={5}>
              Contact
            </Typography>
            <FacebookIcon className="footer-side-icon" />
            <InstagramIcon className="footer-side-icon" />
            <GitHubIcon className="footer-side-icon" />
            <CallIcon className="footer-side-icon" />
            <EmailIcon className="footer-side-icon" />
          </Grid>
          <Grid item xs={3} />
          <Grid xs={3}>
            <Typography variant="h5" color="white">
              Services
            </Typography>
            <Typography color="#00d1cd">UI/UX Design</Typography>
            <Typography color="#00d1cd">Web Development</Typography>
            <Typography color="#00d1cd">App Development</Typography>
          </Grid>
          <div style={{ borderBottom: '2px solid white' }}></div>
          <Grid
            xs={12}
            sx={{
              textAlign: 'center',
              marginBottom: 3,
              marginTop: 6
            }}
          >
            <Typography color="#00d1cd">
              Copyright © 2023 DK IT Services | Powered by Dominik Kubala
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
export { Footer };
