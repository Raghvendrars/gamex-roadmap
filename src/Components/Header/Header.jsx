import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Container, Button, Box } from "@mui/material";
import LogoImg from "./Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import HamMenu from "./HamMenu.png";
import CloseIcon from "./CloseIcon.png";
// import { useSpring, animated } from "react-spring";

const NavbarStyle = {
  width: "100%",
  position: {
    xl: "absolute",
    lg: "absolute",
    md: "absolute",
    sm: "fixed",
    xs: "fixed",
  },
  zIndex: { xl: 0, xs: 10 },
  bgcolor: {
    xl: "transparent",
    lg: "transparent",
    md: "transparent",
    sm: "#000",
    xs: "#000",
  },
  display: {
    xl: "block",
    lg: "block",
    md: "block",
    sm: "none",
    xs: "none",
  },
  paddingTop: 0,
};

const NavbarStyleMobile = {
  width: "100%",
  position: {
    xl: "absolute",
    lg: "absolute",
    md: "absolute",
    sm: "fixed",
    xs: "fixed",
  },
  zIndex: { xl: 0, xs: 10 },
  display: {
    xl: "none",
    lg: "none",
    md: "none",
    sm: "block",
    xs: "block",
  },
  paddingTop: 0,
};

const NavbarLinks = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "22px",
  color: "#9a9a9a",
};

const LinkStyle = {
  textDecoration: "none",
};

const ButtonText = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: { xl: "16px", lg: "16px", md: "16px", sm: "16px", xs: "16px" },
  lineHeight: "17px",
  display: "flex",
  textDecoration: "none",
  color: "#000000",
};

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [nav, setNav] = useState(false);
  const [openNavbar, setopenNavbar] = useState(false);

  const CloseButton = () => {
    setopenNavbar(false);
  };

  const OpenButton = () => {
    setopenNavbar(true);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 900) {
      setButton(false);
    } else {
      setButton(true);
    }

  };


  useEffect(() => {
    showButton();
  }, [1]);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  // const toggleWrapperAnimatedStyle = useSpring({
  //   transform: click ? "rotate(0deg)" : "rotate(180deg)",
  // });

  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <Paper elevation={0} sx={{ bgcolor: "transparent" }} width="100%">
        <Grid container sx={NavbarStyle}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
            <Grid container sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 4, xs: 4 } }}>
              <Grid
                item
                xl={3}
                lg={3}
                md={1.5}
                sm={12}
                xs={12}
                textAlign="left"
              >
                <Box sx={{ ml: { xl: 10, md: 2 } }}>
                  <Link to="/">
                    <img
                      class="navbar-brand"
                      alt="LogoImg"
                      src={LogoImg}
                      width={100}
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={8.5} sm={12} xs={12}>
                <Grid container mt={2.5}>
                  <Grid item xl={2.4} lg={2.4} md={2} sm={12} xs={12}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Container>
                        <Typography sx={NavbarLinks}>Home</Typography>
                      </Container>
                    </Link>
                  </Grid>
                  <Grid
                    item
                    xl={2.4}
                    lg={2.4}
                    md={2.4}
                    sm={12}
                    xs={12}
                    sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 } }}
                  >
                    <Container>
                      {/* <Link to="/matches" style={{ textDecoration: "none" }}> */}
                        <Typography sx={NavbarLinks}>Matches</Typography>
                      {/* </Link> */}
                    </Container>
                  </Grid>
                  <Grid
                    item
                    xl={2.4}
                    lg={2.4}
                    md={2.4}
                    sm={12}
                    xs={12}
                    sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 } }}
                  >
                    {/* <Link to="/support" style={{ textDecoration: "none" }}> */}
                      <Container>
                        <Typography sx={NavbarLinks}>Support</Typography>
                      </Container>
                    {/* </Link> */}
                  </Grid>
                  <Grid
                    item
                    xl={2.4}
                    lg={2.4}
                    md={2.8}
                    sm={12}
                    xs={12}
                    sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 } }}
                  >
                    {/* <Link to="/contact" style={{ textDecoration: "none" }}> */}
                      <Container>
                        <Typography sx={NavbarLinks}>Contact us</Typography>
                      </Container>
                    {/* </Link> */}
                  </Grid>
                  <Grid
                    item
                    xl={2.4}
                    lg={2.4}
                    md={2.4}
                    sm={12}
                    xs={12}
                    sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 } }}
                  >
                    {/* <Link to="/aboutus" style={{ textDecoration: "none" }}> */}
                      <Container>
                        <Typography sx={NavbarLinks}>About us</Typography>
                      </Container>
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={3} lg={3} md={2} sm={12} xs={12}>
                {/* <Container mx={"auto"} sx={{mt:2}}> */}
                {/* {getTheLoggedUserData ? (
                  <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      mt: 2,
                      bgcolor: "#B8E503",
                      borderRadius: "20px",
                      width: { xl: "55%", md: "90%", lg: "70%" },
                      height: "35px",
                      maxWidth: "192px",
                      textDecoration: "none",
                    }}
                    variant="contained"
                  >
                    <Typography textTransform="none" textDecoration="none" sx={ButtonText}>
                      Profile
                    </Typography>
                  </Button>
                </Link>) : ( */}
                {/* <Link to="/login"> */}
                  <Button
                    sx={{
                      mt: 2,
                      bgcolor: "#B8E503",
                      borderRadius: "20px",
                      width: { xl: "55%", md: "90%", lg: "70%" },
                      maxWidth: "192px",
                    }}
                    variant="contained"
                  >
                    <Typography textTransform="none" sx={ButtonText}>
                      Register / Login
                    </Typography>
                  </Button>
                {/* </Link> */}
                {/* )} */}

                {/* </Container> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* For Tablet and Mobile */}

        <Grid container sx={NavbarStyleMobile}>
          <Grid item xl={3} lg={2} md={2} sm={12} xs={12}>
            <Grid
              container
              {...(openNavbar
                ? { bgcolor: "#000" }
                : { bgcolor: "transparent" })}
              pt={3}
            >
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                textAlign="left"
                sx={{ pl: 3, pt: 1 }}
              >
                <Box>
                  <Link to="/">
                    <img
                      class="navbar-brand"
                      alt="LogoImg"
                      src={LogoImg}
                      width={90}
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6} textAlign={"right"}>
                <div className="menu-icon" onClick={handleClick}>
                  {click ? (
                      <Button onClick={CloseButton}>
                    {/* <animated.div style={toggleWrapperAnimatedStyle}> */}
                        <img src={CloseIcon} alt="HamMenu" width="25px" />
                    {/* </animated.div> */}
                      </Button>
                  ) : (
                      <Button onClick={OpenButton}>
                    {/* <animated.div style={toggleWrapperAnimatedStyle}> */}
                        <img
                          src={HamMenu}
                          alt="HamMenu"
                          style={{ marginTop: "15px" }}
                          width="30px"
                        />
                    {/* </animated.div> */}
                      </Button>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={9} lg={10} md={10} sm={12} xs={12}>
            <div className={click ? "nav-menu active" : "nav-menu"}>
              {openNavbar ? (
                <Grid
                  container
                  sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 4, xs: 4 } }}
                >
                  <Grid item xl={8} lg={8} md={9} sm={12} xs={12}>
                    <Grid container mt={2.5}>
                      <Grid item xl={2.4} lg={2.4} md={2} sm={12} xs={12}>
                        <Link
                          to="/"
                          style={{ textDecoration: "none" }}
                          onClick={() => setopenNavbar(false)}
                        >
                          <Container>
                            <Typography sx={NavbarLinks}>Home</Typography>
                          </Container>
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xl={2.4}
                        lg={2.4}
                        md={2.4}
                        sm={12}
                        xs={12}
                        sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 } }}
                      >
                        <Container>
                          <Link
                            // to="/matches"
                            style={{ textDecoration: "none" }}
                            onClick={() => setopenNavbar(false)}
                          >
                            <Typography sx={NavbarLinks}>Matches</Typography>
                          </Link>
                        </Container>
                      </Grid>
                      <Grid
                        item
                        xl={2.4}
                        lg={2.4}
                        md={2.4}
                        sm={12}
                        xs={12}
                        sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 } }}
                      >
                        <Link
                          // to="/support"
                          style={{ textDecoration: "none" }}
                          onClick={() => setopenNavbar(false)}
                        >
                          <Container>
                            <Typography sx={NavbarLinks}>Support</Typography>
                          </Container>
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xl={2.4}
                        lg={2.4}
                        md={2.8}
                        sm={12}
                        xs={12}
                        sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 } }}
                      >
                        <Link
                          // to="/contact"
                          style={{ textDecoration: "none" }}
                          onClick={() => setopenNavbar(false)}
                        >
                          <Container>
                            <Typography sx={NavbarLinks}>Contact us</Typography>
                          </Container>
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xl={2.4}
                        lg={2.4}
                        md={2.4}
                        sm={12}
                        xs={12}
                        sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 5, xs: 5 } }}
                      >
                        <Link
                          // to="/aboutus"
                          style={{ textDecoration: "none" }}
                          onClick={() => setopenNavbar(false)}
                        >
                          <Container>
                            <Typography sx={NavbarLinks}>About us</Typography>
                          </Container>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={3}
                    sm={6}
                    pt={1.5}
                    xs={12}
                    sx={{
                      mt: { xl: 0, lg: 0, md: 0, sm: 4, xs: 4 },
                      mx: "auto",
                    }}
                  >
                    <Container mx={"auto"}>
                      {/* {getTheLoggedUserData ? (
                        <Link to="/profile">
                        <Button
                          sx={{
                            mt: 2,
                            bgcolor: "#B8E503",
                            borderRadius: "20px",
                            width: { xl: "55%", md: "90%", lg: "70%" },
                            maxWidth: "192px",
                          }}
                          variant="contained"
                        >
                          <Typography textTransform="none" sx={ButtonText}>
                            Profile
                          </Typography>
                        </Button>
                      </Link>) : ( */}
                      <Button
                        sx={{
                          bgcolor: "#B8E503",
                          borderRadius: "20px",
                          width: "50%",
                        }}
                        variant="contained"
                      >
                        <Typography textTransform="none" sx={{ color: "#000" }}>
                          Register / Login
                        </Typography>
                      </Button>
                      {/* )} */}
                    </Container>
                  </Grid>
                </Grid>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Header;
