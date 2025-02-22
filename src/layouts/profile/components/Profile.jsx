/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components

// Data

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const Profile = () => {
  return (
    <MDBox mt={5} mb={3}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <MDTypography variant="h3" fontWeight="medium" textAlign="center">
            Saiful Islam
          </MDTypography>
          <MDBox>
            <img width="100%" src="images/avatar.jpg" alt="avatar" />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: "flex" }}>
          <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
          <ProfileInfoCard
            title="Me at a glance"
            description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
            info={{
              fullName: "Alec M. Thompson",
              mobile: "(44) 123 1234 123",
              email: "alecthompson@mail.com",
              location: "USA",
            }}
            social={[
              {
                link: "https://www.facebook.com/CreativeTim/",
                icon: <FacebookIcon />,
                color: "facebook",
              },
              {
                link: "https://twitter.com/creativetim",
                icon: <TwitterIcon />,
                color: "twitter",
              },
              {
                link: "https://www.instagram.com/creativetimofficial/",
                icon: <InstagramIcon />,
                color: "instagram",
              },
            ]}
            action={{ route: "", tooltip: "Edit Profile" }}
            shadow={false}
          />
          <Divider orientation="vertical" sx={{ mx: 0 }} />
        </Grid>
      </Grid>
    </MDBox>
  );
};
export default Profile;
