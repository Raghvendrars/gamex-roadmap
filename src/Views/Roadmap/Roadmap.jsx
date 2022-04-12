import React from 'react'
// import Header from '../../Components/Header/Header';
import { Paper, Stack, Grid, Box, Typography, Button, Container } from "@mui/material";
import "./Roadmap.css";
import DiscordImg from "./Discord.png";
import TelegramImg from "./Telegram.png";
import { HiArrowRight } from "react-icons/hi";
import Header from "../../Components/Header/Header";
// import GradientBorder from '../../Components/GradientBorder/GradientBorder';
import GradientBorder from '../../Components/GradientBorder/GradientBorder';

const TextStyle = {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: {
        xl: "24px", lg: "22px", md: "20px", sm: "18px", xs: "18px"
    },
    color: "#fff",

}

const HeroTitleFooterTextStyle = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: { xl: "20px", lg: "20px", md: "18px", sm: "16px", xs: "16px" },
    lineHeight: "29px",
    textAlign: "center",
    color: "#797979",
}

const JoinComTextOne = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: { xl: "50px", lg: "50px", md: "40px", sm: "35px", xs: "30px" },
    lineHeight: "61px",
    textTransform: "uppercase",
    color: "#FFFFFF",
}
const JoinComTextTwo = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: { xl: "50px", lg: "50px", md: "40px", sm: "35px", xs: "30px" },
    lineHeight: "61px",
    textTransform: "uppercase",
    color: "#B8E503",
    ml: 2

}
const JoinComTextFooter = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "29px",
    texAlign: "center",
    color: "#363636",
}
const JoinDsText = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: { xl: "22px", lg: "20px", md: "18px", sm: "16px", xs: "16px" },
    lineHeight: "27px",
    color: "#9A9A9A",
    mt: 0,
    mb: 2

}

const DscButtonText = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "30px",
    color: "#363636",
    textTransform: "none",

}

const titleTextForRoadMap = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "27px",
    // textDecoration: "underline",
    lineHeight: "30px",
    color: "#B8E503",
    textTransform: "none",
    mb: 1
}

const titleTextForRoadMapFooter = {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "15px",
    textDecoration: "none",
    lineHeight: "auto",
    color: "#363636",
    textTransform: "none",
    mt: 0.5
}

const Roadmap = () => {
    return (
        <>
            <Header />
            <Paper elevation={0} sx={{ bgcolor: "#000", borderRadius: "0px" }}>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className='RoadMap_Hero_Section'>
                            <Button disabled sx={{ width: "100%", height: "100%", minHeight: "100vh", minWeight: "100vw", mx: "auto" }}>
                                <Grid container>
                                    <Grid item xl={9} lg={9} md={12} sm={12} xs={12} sx={{ mx: "auto" }}>
                                        <h1 className='RoadmapHeroText'>FASTEST GROWING
                                            WEB3 SOCIAL MEDIA APP
                                            CHINGARI</h1>
                                    </Grid>
                                    <Grid item xl={6} lg={6} md={6} sm={10} xs={10} sx={{ mx: "auto" }}>
                                        <Typography sx={HeroTitleFooterTextStyle}>Short Video + Social Audio + Social Commerce + Social
                                            Ed-Tech + Social Entertainment on Blockchain</Typography>
                                    </Grid>
                                </Grid>
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <Paper elevation={0} sx={{ bgcolor: "#000", borderRadius: "0px" }}>
                            <Grid container>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Button>
                                        <Typography sx={JoinComTextOne}>JOIN THE</Typography>
                                        <Typography sx={JoinComTextTwo}>COMMUNITY</Typography>
                                    </Button>
                                    <Typography sx={JoinComTextFooter}>Tournaments I'm playing now</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ width: "90%", mx: "auto" }}>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Grid container sx={{ mt: { xl: 25, lg: 25, md: 10, sm: 10, xs: 10 }, mb: { xl: 10, lg: 10, md: 10, sm: 0, xs: 0 } }}>
                                        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                                            <Box sx={{ width: { xl: "125px", lg: "100px", md: "90px", sm: "100px", xs: "100px" }, height: "100%", mt: { xl: 0, lg: 0, md: 0, sm: 4, xs: 4 } }}>
                                                <img src={DiscordImg} alt="1" width="100%" height="auto" style={{ alignItems: "center" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xl={9} lg={9} md={9} sm={9} xs={9} sx={{ width: "100%", mx: "auto", textAlign: "left", pl: 3 }}>
                                            <Typography sx={JoinDsText}>Join the main Discord server for announcements on the Pre-sale
                                            </Typography>
                                            <div className='Gradient-Border_Roadmap' >
                                                <Button sx={{ width: "99%", height: "98%", mx: "auto", bgcolor: "#000", borderRadius: "10px" }}><Typography sx={DscButtonText}>Join Discord</Typography> </Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Grid container sx={{ mt: { xl: 25, lg: 25, md: 10, sm: 7, xs: 7 }, mb: { xl: 10, lg: 10, md: 10, sm: 10, xs: 10 } }}>
                                        <Grid item xl={2.5} lg={2.5} md={2.5} sm={3} xs={3}>
                                            <Box sx={{ width: { xl: "125px", lg: "100px", md: "90px", sm: "100px", xs: "100px" }, height: "100%", mt: { xl: 0, lg: 0, md: 0, sm: 3, xs: 3 } }}>
                                                <img src={TelegramImg} alt="1" width="100%" height="auto" style={{ alignItems: "center" }} />
                                            </Box>
                                        </Grid>
                                        <Grid item xl={9.5} lg={9.5} md={9.5} sm={9} xs={9} sx={{ width: "100%", mx: "auto", textAlign: "left", pl: 3 }}>
                                            <Typography sx={JoinDsText}>Join the main Telegram server for announcements on the Pre-sale
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    width: {
                                                        xl: "70%",
                                                        lg: "70%",
                                                        md: "70%",
                                                        sm: "80%",
                                                        xs: "80%",
                                                    },
                                                    height: "54px",
                                                    backgroundImage:
                                                        "linear-gradient(to right, #b7e403, #1b1b1b)",
                                                    borderRadius: "32px",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontFamily: "Montserrat",
                                                        textTransform: "none",
                                                        fontSize: "20px",
                                                        color: "#000", fontWeight: 600,
                                                    }}
                                                >
                                                    Join Telegram
                                                </Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="RoadMapBgTwo">
                            <Button disabled sx={{ bgcolor: "transparent", borderRadius: "0px", height: "100%",minHeight:"100vh" }}>
                                <Grid container>
                                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                        <h1 className='RoadmapMainTextStyle'>RoadMap</h1>
                                        
                                    </Grid>
                                    <Grid item xl={10} lg={10} md={10} sm={12} xs={12} sx={{ mx: "auto", mt: -10 }}>
                                        <Typography sx={TextStyle}>Home <HiArrowRight /> RoadMap</Typography>
                                    </Grid>
                                </Grid>
                            </Button>
                        </div>
                    </Grid>

                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ overflowX: { xl: "hidden", lg: "hidden", md: "scroll", sm: "scroll", xs: "scroll" }, overflowY: { xl: "hidden", lg: "hidden", md: "scroll", sm: "scroll", xs: "scroll" }}}>

                    <div className='RoadMapScrollTable'>
                        <Paper elevation={0} sx={{ height: "100%", width: "100%", bgcolor: "transparent" }}>
                            <Grid container sx={{ width: "90%", mx: "auto", overflowX: { xl: "hidden", lg: "hidden", md: "scroll", sm: "scroll", xs: "scroll" }, overflowY: { xl: "hidden", lg: "hidden", md: "scroll", sm: "scroll", xs: "scroll" } }}>
                                <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4} sx={{ textAlign: "left", mt: 48 }}>
                                    <Typography sx={titleTextForRoadMap}>TITLE</Typography>
                                    <Paper sx={{ width: "40%", height: "3px", bgcolor: "#b8e503" }}></Paper>
                                    <Typography sx={titleTextForRoadMapFooter}>
                                        Amet minim mollit nodeseru ullamco est sit aliqua dolor do amet sint. Velit officia conVelit officia conVelit officia con
                                    </Typography>
                                </Grid>
                                <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4} sx={{ textAlign: "left", mt: 60, pl: 2 }}>
                                    <Typography sx={titleTextForRoadMap}>TITLE</Typography>
                                    <Paper sx={{ width: "40%", height: "3px", bgcolor: "#b8e503" }}></Paper>
                                    <Typography sx={titleTextForRoadMapFooter}>
                                        Amet minim mollit nodeseru ullamco est sit aliqua dolor do amet sint. Velit officia conVelit officia conVelit officia con
                                    </Typography>
                                </Grid>
                                <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4} sx={{ textAlign: "left", mt: 48, pl: 5 }}>
                                    <Typography sx={titleTextForRoadMap}>TITLE</Typography>
                                    <Paper sx={{ width: "40%", height: "3px", bgcolor: "#b8e503" }}></Paper>
                                    <Typography sx={titleTextForRoadMapFooter}>
                                        Amet minim mollit nodeseru ullamco est sit aliqua dolor do amet sint. Velit officia conVelit officia conVelit officia con
                                    </Typography>
                                </Grid>
                                <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4} sx={{ textAlign: "left", mt: 60, pl: 5 }}>
                                    <Typography sx={titleTextForRoadMap}>TITLE</Typography>
                                    <Paper sx={{ width: "40%", height: "3px", bgcolor: "#b8e503" }}></Paper>
                                    <Typography sx={titleTextForRoadMapFooter}>
                                        Amet minim mollit nodeseru ullamco est sit aliqua dolor do amet sint. Velit officia conVelit officia conVelit officia con
                                    </Typography>
                                </Grid>
                                <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4} sx={{ textAlign: "left", mt: 48, pl: 5 }}>
                                    <Typography sx={titleTextForRoadMap}>TITLE</Typography>
                                    <Paper sx={{ width: "40%", height: "3px", bgcolor: "#b8e503" }}></Paper>
                                    <Typography sx={titleTextForRoadMapFooter}>
                                        Amet minim mollit nodeseru ullamco est sit aliqua dolor do amet sint. Velit officia conVelit officia conVelit officia con
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                </Grid>
                <Grid container sx={{ mt: 15, mb: 0, bgcolor: "transparent" }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <GradientBorder />
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Roadmap