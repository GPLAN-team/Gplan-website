import React, { useEffect } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LinkIcon from "@mui/icons-material/Link";
import "../../styles/home.css";

export default function Policy() {
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
              Privacy Policy
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
          This privacy policy (“Policy”) describes how the personally
          identifiable information (“Personal Information”) you may provide on
          the Gplan.in website (“Website” or “Service”) and any of its related
          products and services (collectively, “Services”) is collected,
          protected, and used. It also describes the choices available to you
          regarding our use of your Personal Information and how you can access
          and update this information. This Policy is a legally binding
          agreement between you (“User”, “you” or “your”) and this Website
          operator (“Operator”, “we”, “us” or “our”). By accessing and using the
          Website and Services, you acknowledge that you have read, understood,
          and agree to be bound by the terms of this Policy.
        </p>
        <h2>1. AUTOMATIC COLLECTION OF INFORMATION</h2>
        <p>
          Our top priority is customer data security. We may process only
          minimal user data, only as much as it is necessary to maintain the
          Website and Services. Information collected automatically is used only
          to identify potential cases of abuse and establish statistical
          information regarding the usage and traffic of the Website and
          Services. This statistical information is not otherwise aggregated in
          such a way that would identify any particular user of the system.
        </p>
        <h2>2. COLLECTION OF PERSONAL INFORMATION</h2>
        <p>
          You can access and use the Website without telling us who you are or
          revealing any information by which someone could identify you as a
          specific, identifiable individual. If, however, you wish to use the
          Service, you may be asked to provide certain Personal Information (for
          example, your name and e-mail address). We receive and store any
          information you knowingly provide to us when you create an account, or
          fill any online forms on the Website. When required, this information
          may include the following:
          <ul>
            <li>Personal details such as name, country of residence, etc.</li>
            <li>Contact information such as email address, address, etc.</li>
            <li>
              Account details such as user name, unique user ID, password, etc.
            </li>
          </ul>
        </p>
        <h2>3. USE AND PROCESSING OF COLLECTED INFORMATION</h2>
        <p>
          In order to make the Website and Services available to you, or to meet
          a legal obligation, we may need to collect and use certain Personal
          Information. If you do not provide the information that we request, we
          may not be able to provide you with the requested products or
          services. Any of the information we collect from you may be used for
          the following purposes:
        </p>
        <ul>
          <li>Create and manage user accounts</li>
          <li>Send administrative information </li>
          <li>Request user feedback</li>
          <li>Improve user experience</li>
          <li>Enforce terms and conditions and policies</li>
          <li>Protect from abuse and malicious users</li>
          <li>Respond to legal requests and prevent harm</li>
          <li>Run and operate the Website and Services</li>
        </ul>
        <p>
          Processing your Personal Information depends on how you interact with
          the Website and Services, where you are located in the world and if
          one of the following applies: (i) you have given your consent for one
          or more specific purposes; this, however, does not apply, whenever the
          processing of Personal Information is subject to California Consumer
          Privacy Act or European data protection law; (ii) provision of
          information is necessary for the performance of an agreement with you
          and/or for any pre-contractual obligations thereof; (iii) processing
          is necessary for compliance with a legal obligation to which you are
          subject; (iv) processing is related to a task that is carried out in
          the public interest or in the exercise of official authority vested in
          us; (v) processing is necessary for the purposes of the legitimate
          interests pursued by us or by a third party. Note that under some
          legislations we may be allowed to process information until you object
          to such processing (by opting out), without having to rely on consent
          or any other of the following legal bases below. In any case, we will
          be happy to clarify the specific legal basis that applies to the
          processing, and in particular whether the provision of Personal
          Information is a statutory or contractual requirement, or a
          requirement necessary to enter into a contract.
        </p>
        <h2>4. MANAGING INFORMATION</h2>
        <p>
          You are able to delete certain Personal Information we have about you.
          The Personal Information you can delete may change as the Website and
          Services change. When you delete Personal Information, however, we may
          maintain a copy of the unrevised Personal Information in our records
          for the duration necessary to comply with our obligations to our
          affiliates and partners, and for the purposes described below. If you
          would like to delete your Personal Information or permanently delete
          your account, you can do so by contacting us.
        </p>
        <h2>5. DISCLOSURE OF INFORMATION</h2>
        <p>
          Depending on the requested Services or as necessary to complete any
          transaction or provide any service you have requested, we may share
          your information with your consent with our trusted third parties that
          work with us, any other affiliates and subsidiaries we rely upon to
          assist in the operation of the Website and Services available to you.
          We do not share Personal Information with unaffiliated third parties.
          These service providers are not authorized to use or disclose your
          information except as necessary to perform services on our behalf or
          comply with legal requirements. We may share your Personal Information
          for these purposes only with third parties whose privacy policies are
          consistent with ours or who agree to abide by our policies with
          respect to Personal Information. These third parties are given
          Personal Information they need only in order to perform their
          designated functions, and we do not authorize them to use or disclose
          Personal Information for their own marketing or other purposes. We
          will disclose any Personal Information we collect, use or receive if
          required or permitted by law, such as to comply with a subpoena, or
          similar legal process, and when we believe in good faith that
          disclosure is necessary to protect our rights, protect your safety or
          the safety of others, investigate fraud, or respond to a government
          request.
        </p>
        <h2>6. RETENTION OF INFORMATION</h2>
        <p>
          We will retain and use your Personal Information for the period
          necessary to comply with our legal obligations, resolve disputes, and
          enforce our agreements unless a longer retention period is required or
          permitted by law. We may use any aggregated data derived from or
          incorporating your Personal Information after you update or delete it,
          but not in a manner that would identify you personally. Once the
          retention period expires, Personal Information shall be deleted.
          Therefore, the right to access, the right to erasure, the right to
          rectification and the right to data portability cannot be enforced
          after the expiration of the retention period.
        </p>
        <h2>7. TRANSFER OF INFORMATION</h2>
        <p>
          Depending on your location, data transfers may involve transferring
          and storing your information in a country other than your own. You are
          entitled to learn about the legal basis of information transfers to a
          country outside the European Union or to any international
          organization governed by public international law or set up by two or
          more countries, such as the UN, and about the security measures taken
          by us to safeguard your information. If any such transfer takes place,
          you can find out more by checking the relevant sections of this Policy
          or inquire with us using the information provided in the contact
          section.
        </p>
        <h2>8. THE RIGHTS OF USERS</h2>
        <p>
          You may exercise certain rights regarding your information processed
          by us. In particular, you have the right to do the following: (i) you
          have the right to withdraw consent where you have previously given
          your consent to the processing of your information; (ii) you have the
          right to object to the processing of your information if the
          processing is carried out on a legal basis other than consent; (iii)
          you have the right to learn if information is being processed by us,
          obtain disclosure regarding certain aspects of the processing and
          obtain a copy of the information undergoing processing; (iv) you have
          the right to verify the accuracy of your information and ask for it to
          be updated or corrected; (v) you have the right, under certain
          circumstances, to restrict the processing of your information, in
          which case, we will not process your information for any purpose other
          than storing it; (vi) you have the right, under certain circumstances,
          to obtain the erasure of your Personal Information from us; (vii) you
          have the right to receive your information in a structured, commonly
          used and machine readable format and, if technically feasible, to have
          it transmitted to another controller without any hindrance. This
          provision is applicable provided that your information is processed by
          automated means and that the processing is based on your consent, on a
          contract which you are part of or on pre-contractual obligations
          thereof.
        </p>
        <h2>9. THE RIGHT TO OBJECT TO PROCESSING</h2>
        <p>
          Where Personal Information is processed for the public interest, in
          the exercise of an official authority vested in us or for the purposes
          of the legitimate interests pursued by us, you may object to such
          processing by providing a ground related to your particular situation
          to justify the objection.
        </p>
        <h2>10. DATA PROTECTION RIGHTS UNDER GDPR</h2>
        <p>
          If you are a resident of the European Economic Area (EEA), you have
          certain data protection rights and the Operator aims to take
          reasonable steps to allow you to correct, amend, delete, or limit the
          use of your Personal Information. If you wish to be informed what
          Personal Information we hold about you and if you want it to be
          removed from our systems, please contact us. In certain circumstances,
          you have the following data protection rights:
        </p>
        <ul>
          <li>
            You have the right to request access to your Personal Information
            that we store and have the ability to access your Personal
            Information.
          </li>
          <li>
            You have the right to request that we correct any Personal
            Information you believe is inaccurate. You also have the right to
            request us to complete the Personal Information you believe is
            incomplete.
          </li>
          <li>
            You have the right to request the erase your Personal Information
            under certain conditions of this Policy.
          </li>
          <li>
            You have the right to object to our processing of your Personal
            Information.
          </li>
          <li>
            You have the right to seek restrictions on the processing of your
            Personal Information. When you restrict the processing of your
            Personal Information, we may store it but will not process it
            further.
          </li>
          <li>
            You have the right to be provided with a copy of the information we
            have on you in a structured, machine-readable and commonly used
            format.
          </li>
          <li>
            You also have the right to withdraw your consent at any time where
            the Operator relied on your consent to process your Personal
            Information.
          </li>
          <li>
            You have the right to complain to a Data Protection Authority about
            our collection and use of your Personal Information. For more
            information, please contact your local data protection authority in
            the European Economic Area (EEA).
          </li>
        </ul>
        <h2>11. CALIFORNIA PRIVACY RIGHTS</h2>
        <p>
          In addition to the rights as explained in this Policy, California
          residents who provide Personal Information (as defined in the statute)
          to obtain products or services for personal, family, or household use
          are entitled to request and obtain from us, once a calendar year,
          information about the Personal Information we shared, if any, with
          other businesses for marketing uses. If applicable, this information
          would include the categories of Personal Information and the names and
          addresses of those businesses with which we shared such personal
          information for the immediately prior calendar year (e.g., requests
          made in the current year will receive information about the prior
          year). To obtain this information please contact us.
        </p>
        <h2>12. HOW TO EXERCISE THESE RIGHTS</h2>
        <p>
          Any requests to exercise your rights can be directed to the Operator
          through the contact details provided in this document. Please note
          that we may ask you to verify your identity before responding to such
          requests. Your request must provide sufficient information that allows
          us to verify that you are the person you are claiming to be or that
          you are the authorized representative of such person. You must include
          sufficient details to allow us to properly understand the request and
          respond to it. We cannot respond to your request or provide you with
          Personal Information unless we first verify your identity or authority
          to make such a request and confirm that the Personal Information
          relates to you.
        </p>
        <h2>13. PRIVACY OF CHILDREN</h2>
        <p>
          We do not knowingly collect any Personal Information from children
          under the age of 18. If you are under the age of 18, please do not
          submit any Personal Information through the Website and Services. We
          encourage parents and legal guardians to monitor their children’s
          Internet usage and to help enforce this Policy by instructing their
          children never to provide Personal Information through the Website and
          Services without their permission. If you have reason to believe that
          a child under the age of 18 has provided Personal Information to us
          through the Website and Services, please contact us. You must also be
          at least 16 years of age to consent to the processing of your Personal
          Information in your country (in some countries we may allow your
          parent or guardian to do so on your behalf).
        </p>
        <h2>14. COOKIES</h2>
        <p>
          The Website and Services use “cookies” to help personalize your online
          experience. A cookie is a text file that is placed on your hard disk
          by a web page server. Cookies cannot be used to run programs or
          deliver viruses to your computer. Cookies are uniquely assigned to
          you, and can only be read by a web server in the domain that issued
          the cookie to you. We may use cookies to collect, store, and track
          information for statistical purposes to operate the Website and
          Services. You have the ability to accept or decline cookies. Most web
          browsers automatically accept cookies, but you can usually modify your
          browser setting to decline cookies if you prefer. If you choose to
          decline cookies, you may not be able to fully experience the features
          of the Website and Services.
        </p>
        <h2>15. DO NOT TRACK SIGNALS</h2>
        <p>
          Some browsers incorporate a Do Not Track feature that signals to
          websites you visit that you do not want to have your online activity
          tracked. Tracking is not the same as using or collecting information
          in connection with a website. For these purposes, tracking refers to
          collecting personally identifiable information from consumers who use
          or visit a website or online service as they move across different
          websites over time. The Website and Services do not track its visitors
          over time and across third party websites. However, some third party
          sites may keep track of your browsing activities when they serve you
          content, which enables them to tailor what they present to you.
        </p>
        <h2>16. INFORMATION SECURITY</h2>
        <p>
          We secure information you provide on computer servers in a controlled,
          secure environment, protected from unauthorized access, use, or
          disclosure. We maintain reasonable administrative, technical, and
          physical safeguards in an effort to protect against unauthorized
          access, use, modification, and disclosure of Personal Information in
          its control and custody. However, no data transmission over the
          Internet or wireless network can be guaranteed. Therefore, while we
          strive to protect your Personal Information, you acknowledge that (i)
          there are security and privacy limitations of the Internet which are
          beyond our control; (ii) the security, integrity, and privacy of any
          and all information and data exchanged between you and the Website and
          Services cannot be guaranteed; and (iii) any such information and data
          may be viewed or tampered with in transit by a third party, despite
          best efforts.
        </p>
        <h2>17. DATA BREACH</h2>
        <p>
          In the event we become aware that the security of the Website and
          Services has been compromised or users Personal Information has been
          disclosed to unrelated third parties as a result of external activity,
          including, but not limited to, security attacks or fraud, we reserve
          the right to take reasonably appropriate measures, including, but not
          limited to, investigation and reporting, as well as notification to
          and cooperation with law enforcement authorities. In the event of a
          data breach, we will make reasonable efforts to notify affected
          individuals if we believe that there is a reasonable risk of harm to
          the user as a result of the breach or if notice is otherwise required
          by law. When we do, we will send you an email.
        </p>
        <h2>18. CHANGES AND AMENDMENTS</h2>
        <p>
          We reserve the right to modify this Policy or its terms relating to
          the Website and Services from time to time in our discretion and will
          notify you of any material changes to the way in which we treat
          Personal Information. When we do, we will send you an email to notify
          you. We may also provide notice to you in other ways in our
          discretion, such as through contact information you have provided. Any
          updated version of this Policy will be effective immediately upon the
          posting of the revised Policy unless otherwise specified. Your
          continued use of the Website and Services after the effective date of
          the revised Policy (or such other act specified at that time) will
          constitute your consent to those changes. However, we will not,
          without your consent, use your Personal Information in a manner
          materially different than what was stated at the time your Personal
          Information was collected.
        </p>
        <h2>19. ACCEPTANCE OF THIS POLICY</h2>
        <p>
          You acknowledge that you have read this Policy and agree to all its
          terms and conditions. By accessing and using the Website and Services
          you agree to be bound by this Policy. If you do not agree to abide by
          the terms of this Policy, you are not authorized to access or use the
          Website and Services.
        </p>
        <h2>20. Collection of Personal Information during Cancellation</h2>
        <p>
          When you submit a cancellation request via support@gplan.in, we may
          collect additional information to verify your identity and process the
          request. This information typically includes your name, account
          details, and email address. We collect this information to protect
          against fraudulent requests and to ensure that only authorized users
          can cancel their accounts.
        </p>
        <h2>21. Processing of Personal Information</h2>
        <p>
          The personal information provided for the cancellation will only be
          used to process your request and will not be shared with any third
          parties unless required by law. We may store a record of your
          cancellation request, including the date and time of the request, for
          internal auditing, legal, and operational purposes.
        </p>
        <h2>22. Data Retention Post-Cancellation</h2>
        <p>
          Upon successful cancellation of your account, your personal data will
          be retained only as long as necessary to comply with legal and
          regulatory obligations or for legitimate business purposes, such as
          dispute resolution, compliance with applicable laws, and maintaining
          records of transactions and communications.
        </p>
        <h2>23. Right to Erasure</h2>
        <p>
          Users may request the permanent deletion of their personal data by
          contacting us at support@gplan.in after account cancellation. Please
          note that some data may be retained as required by law or for
          legitimate business purposes.
        </p>
        <h2>24. Security of Information</h2>
        <p>
          We take the security of your personal data seriously. Any data
          collected during the account cancellation process is stored securely
          and in compliance with relevant data protection regulations, including
          encryption and access control measures to prevent unauthorized access,
          alteration, or disclosure.
        </p>
        <h2>25. Collection of Personal Information during Refund Request</h2>
        <p>
          When you submit a refund request, we may collect personal information
          to verify your identity and process the request. This information
          typically includes your name, email address, payment details, and
          account information. We collect this information to ensure that the
          refund request is legitimate and that only authorized users can
          initiate such requests.
        </p>
        <h2>26. Processing of Personal Information</h2>
        <p>
          The personal information provided during the refund process will only
          be used for processing your request and verifying your eligibility for
          the refund. We do not share your personal information with any third
          parties unless required by law. Your payment details will be handled
          securely, in compliance with applicable payment and data protection
          regulations.
        </p>
        <h2>27. Data Retention Post-Refund</h2>
        <p>
          After processing your refund, we will retain the personal information
          related to your request for as long as necessary to comply with legal,
          regulatory, and operational obligations. This includes maintaining
          records for accounting, auditing, and dispute resolution purposes.
        </p>
        <h2>28. CONTACTING US</h2>
        <p>
          If you would like to contact us to understand more about this Policy
          or wish to contact us concerning any matter relating to individual
          rights and your Personal Information, you may send an email to
          <a href="mailto:support@gplan.in"> support@gplan.com</a>
        </p>
        <p>This document was last updated on September 15, 2024</p>
      </Grid>
      <Footer />
    </>
  );
}
