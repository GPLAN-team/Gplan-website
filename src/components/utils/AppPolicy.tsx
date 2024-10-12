import React, { useEffect } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LinkIcon from "@mui/icons-material/Link";
import "../../styles/home.css";

export default function AppPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Navbar />
            <Grid
                spacing={5}
                sx={{
                    backgroundColor: "#1C4C82",
                    pl: "7%",
                    pr: "7%",
                    pb: "32px",
                    pt: "32px",
                    mb: "15px",
                    mt: "100px",
                    height: "25vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontFamily: "Bebas Neue",
                            fontSize: { xs: "36px", sm: "56px" },
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            marginBottom: "4px",
                        }}
                    >
                        <Box sx={{ color: "white", marginRight: "10px" }}>
                            Privacy Policy for GPlan Game
                        </Box>
                    </Typography>
                </Box>
            </Grid>
            <Grid
                spacing={5}
                sx={{
                    backgroundColor: "#fff",
                    pl: "7%",
                    pr: "7%",
                    pb: "32px",
                    pt: "32px",
                    mb: "36px",
                    mt: "36px",
                }}
                className="policy"
            >
                <p>
                    Effective Date: 10 October, 2024
                    <br></br>
                    <br></br>

                    At GPlan, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the GPlan mobile application (the "App"). Please read this policy carefully. By using the App, you agree to the collection and use of information as described in this policy.

                </p>
                <h2>1. Information We Collect</h2>
                <p>
                    We collect the following information from users:
                    <ul>
                        <li>Email address: Used for account creation, login, and password recovery.</li>
                        <li>Username: Used for identification on the leaderboard and account 	management.</li>
                        <li>Password: Used for secure login to the App.</li>
                        <li>Gameplay data: Specifically, the time taken to complete a level is recorded to provide star ratings and leaderboard rankings.</li>
                    </ul>
                </p>
                <h2>2. How We Use Your Information</h2>
                <p>
                    We use the information we collect for the following purposes:

                    <ul>
                        <li>To create and manage your account in the App.</li>
                        <li>
                            To authenticate your login.
                        </li>
                        <li>
                            To display your performance on the leaderboard.
                        </li>
                        <li>
                            To secure your account using encrypted login credentials (such as JWT).
                        </li>
                        <li>
                            To manage account settings and allow users to delete their account.
                        </li>
                    </ul>
                </p>
                <h2>3. Children’s Privacy                </h2>
                <p>
                    Our app is allowed for users under 18. However, if you are under 13, you must obtain permission from your parent or guardian and use their email address to create an account. We do not knowingly collect personal information from children under 13 without parental consent. If we become aware that we have collected personal data from a child under 13 without consent, we will delete the information as soon as possible.<br /><br />

                    If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can remove the data.
                </p>
                <h2>4. Data Retention</h2>
                <p>
                    We retain your personal information (email, username, password) until you request deletion or delete your account through the app’s settings. Once your account is deleted, your information will be permanently removed from our servers.
                </p>
                <h2>5. Data Security</h2>
                <p>
                    We prioritize the security of your information and use industry-standard encryption techniques, including secure storage of your login credentials with JWT (JSON Web Tokens). However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
                <h2>6. Your Rights (GDPR and CCPA)</h2>
                <p>
                    If you are located in the European Economic Area (EEA) or California, you have specific rights regarding your personal data. These include the right to:
                    <ul>

                        <li> Access, correct, or delete your personal information.</li>
                        <li>Restrict or object to the processing of your personal data.</li>
                        <li>Request data portability.</li>
                        <li> Opt-out of data collection or request that your data be erased.</li>

                    </ul>
                    To exercise any of these rights, please contact us at support@gplan.in.
                </p>
                <h2>7. Data Sharing and Disclosure</h2>
                <p>
                    We do not share or sell your data to third parties. The data we collect is used solely for the operation and improvement of the App. The information you provide is transmitted securely between the app and our backend server.
                </p>
                <h2>
                    8. Third-Party Services
                </h2>
                <p>
                    Currently, GPlan does not integrate with third-party services such as analytics, advertising, or social media platforms. Should this change in the future, we will update this privacy policy to reflect any new practices.
                </p>
                <h2>
                    9. Changes to This Privacy Policy
                </h2>
                <p>
                    We may update our Privacy Policy from time to time. Any changes will be posted in the App, and the "Effective Date" will be updated. It is your responsibility to review this Privacy Policy periodically.
                </p>
                <h2>
                    10. Contact Us
                </h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, or if you would like to exercise your rights regarding your data, please contact us at:
                    <br />
                    <br />
                    Email: krishnendra.iitd@gmail.com

                </p>
            </Grid>
            <Footer />
        </>
    );
}
