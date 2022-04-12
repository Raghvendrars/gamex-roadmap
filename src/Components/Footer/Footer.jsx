import { Paper, Grid, Typography, Stack, Box } from "@mui/material";
import React from "react";
import FaceBookIcon from "./Icons/Facebook.png";
import YoutubeIcon from "./Icons/Youtube.png";
import WhatsappIcon from "./Icons/Whatsapp.png";
import FlutterIcon from "./Icons/Flutter.png";
import BinanceIcon from "./Icons/Binance.png";

const FooterStyle = {
  borderRadius: "0px",
  pt:5,
  background: "linear-gradient(#020300 10%, #313D01 90%)",
};

const FooterHeadText = {
  fontFamily: "Jost",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "29px",
  textTransform: "capitalize",
  color: "#FFFFFF",
  textAlign: "left",
};

const FooterTextStyle = {
  fontFamily: "Jost",
  fontStyle: "normal",
  fonWeight: 400,
  fontSize: "16px",
  lineHeight: "40px",
  color: "#8C8C8C",
  textAlign: "left",
};

const FooterTextStyleTwo = {
  fontFamily: "Jost",
  fontStyle: "normal",
  fonWeight: 400,
  fontSize: { xl: "16px", lg: "16px", md: "16px", sm: "14px", xs: "14px" },
  lineHeight: "40px",
  color: "#8C8C8C",
  textAlign: "left",
};

const FooterTextStyleSocial = {
  fontFamily: "Jost",
  fontStyle: "normal",
  fonWeight: 400,
  fontSize: "16px",
  lineHeight: "auto",
  color: "#8C8C8C",
  textAlign: "left",
};

const Footer = () => {
  return (
    <Paper sx={FooterStyle} elevation={0}>
      <Grid container sx={FooterStyle}>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10} sx={{ mx: "auto" }}>
          <Grid container>
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              sx={{
                display: {
                  xs: "none",
                  xl: "block",
                  sm: "none",
                  lg: "block",
                  md: "block",
                },
              }}
            >
              <Grid container>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Stack>
                    <Typography sx={FooterHeadText}>About</Typography>
                    <Typography sx={FooterTextStyle}>About us</Typography>
                    <Typography sx={FooterTextStyle}>Blog</Typography>
                    <Typography sx={FooterTextStyle}>Careers</Typography>
                    <Typography sx={FooterTextStyle}>Jobs</Typography>
                    <Typography sx={FooterTextStyle}>In Press</Typography>
                  </Stack>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Stack>
                    <Typography sx={FooterHeadText}>Support</Typography>
                    <Typography sx={FooterTextStyle}>Contact us</Typography>
                    <Typography sx={FooterTextStyle}>Online Chat</Typography>
                    <Typography sx={FooterTextStyle}>Whatsapp</Typography>
                    <Typography sx={FooterTextStyle}>Whatsapp</Typography>
                    <Typography sx={FooterTextStyle}>Ticketing</Typography>
                  </Stack>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Stack>
                    <Typography sx={FooterHeadText}>FAQ</Typography>
                    <Typography sx={FooterTextStyle}>Account</Typography>
                    <Typography sx={FooterTextStyle}>Blog</Typography>
                    <Typography sx={FooterTextStyle}>
                      Manage Deliveries
                    </Typography>
                    <Typography sx={FooterTextStyle}>Orders</Typography>
                    <Typography sx={FooterTextStyle}>Payments</Typography>
                  </Stack>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Stack>
                    <Typography sx={FooterHeadText}>About</Typography>
                    <Typography sx={FooterTextStyle}>About us</Typography>
                    <Typography sx={FooterTextStyle}>Blog</Typography>
                    <Typography sx={FooterTextStyle}>Careers</Typography>
                    <Typography sx={FooterTextStyle}>Jobs</Typography>
                    <Typography sx={FooterTextStyle}>In Press</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xl={4}
              lg={4}
              md={4}
              sm={12}
              xs={12}
              
            >
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography sx={FooterHeadText}>Social Media</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography sx={FooterTextStyleSocial}>
                    Be the first one to know about discounts, offers, news,
                    giveaways and events
                  </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ mt: { xs: 5, sm: 5 } }}>
                  <Grid container>
                    <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                      <Box sx={{ width: "48px", height: "48px" }}>
                        <img
                          src={FaceBookIcon}
                          alt="FaceBookIcon"
                          width="100%"
                        />
                      </Box>
                    </Grid>
                    <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                      <Box sx={{ width: "48px", height: "48px" }}>
                        <img src={YoutubeIcon} alt="YoutubeIcon" width="100%" />
                      </Box>
                    </Grid>
                    <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                      <Box sx={{ width: "48px", height: "48px" }}>
                        <img src={BinanceIcon} alt="BinanceIcon" width="100%" />
                      </Box>
                    </Grid>
                    <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                      <Box sx={{ width: "48px", height: "48px" }}>
                        <img
                          src={WhatsappIcon}
                          alt="WhatsappIcon"
                          width="100%"
                        />
                      </Box>
                    </Grid>
                    <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                      <Box sx={{ width: "48px", height: "48px" }}>
                        <img src={FlutterIcon} alt="FlutterIcon" width="100%" />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 3, mb: 3 }}>
            <Grid item xl={7} lg={7} md={7} sm={6} xs={12}>
              <Typography sx={FooterTextStyle}>
                © 2000-2021, All Rights Reserved
              </Typography>
            </Grid>
            <Grid item xl={5} lg={5} md={5} sm={6} xs={12}>
              <Grid container>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Typography sx={FooterTextStyleTwo}>About us</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={2.5} xs={2.5}>
                  <Typography sx={FooterTextStyleTwo}>Contact</Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3.5} xs={3.5}>
                  <Typography sx={FooterTextStyleTwo}>
                    Privacy policy
                  </Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Typography sx={FooterTextStyleTwo}>Terms of Use</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
