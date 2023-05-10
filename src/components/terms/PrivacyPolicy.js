import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ color: "#31344B", textAlign: "left", p: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", pb: 3 }}>
        Privacy Policy
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        {" "}
        DMH is committed to protecting your privacy. This Privacy Policy
        explains how we collect, use, and disclose personal information about
        you when you use our website, interact with us, and receive our
        services.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pb: 2,
        }}
      >
        Information We Collect
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        We collect personal information about you when you provide it to us or
        when we obtain it from third-party sources. This information may
        include:
        <br />
        Your name, email address, phone number, and other contact information.
        Your job title and company information. Your payment information,
        including credit card numbers. Your employment and education history.
        Information about your use of our website, including IP address, browser
        type, and operating system. How We Use Your Information
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pb: 2,
        }}
      >
        We use your personal information for the following purposes:
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        To provide our services to you, including construction and engineering
        services. To communicate with you about our services, projects, and
        updates. To process your payments and transactions. To provide you with
        customer support. To comply with legal obligations. To improve our
        services and website. We may share your personal information with
        third-party service providers who help us deliver our services, such as
        payment processors, shipping companies, and marketing agencies. We will
        not sell, lease, or rent your personal information to any third party.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pb: 2,
        }}
      >
        Security
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 3,
        }}
      >
        We take reasonable steps to protect your personal information from
        unauthorized access, disclosure, or alteration. However, we cannot
        guarantee the security of your information.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pb: 2,
        }}
      >
        Cookies
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 3,
        }}
      >
        We use cookies and similar technologies to collect information about
        your use of our website. Cookies are small data files that are stored on
        your device. You can choose to disable cookies in your browser settings,
        but this may limit your ability to use some features of our website.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pb: 2,
        }}
      >
        Links to Other Websites
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 3,
        }}
      >
        Our website may contain links to third-party websites. We are not
        responsible for the privacy practices of those websites. We encourage
        you to review the privacy policies of those websites before providing
        any personal information.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pb: 2,
        }}
      >
        {" "}
        Your Rights
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 3,
        }}
      >
        You have the right to access, correct, and delete your personal
        information. You can also object to the processing of your personal
        information or request that we restrict the processing of your personal
        information. To exercise these rights, please contact us using the
        contact information provided below.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pb: 2,
        }}
      >
        {" "}
        Changes to This Policy
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 3,
        }}
      >
        We may update this Policy from time to time. We will notify you of any
        changes by posting the new Policy on our website. You should check this
        page periodically to ensure that you are comfortable with any changes.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          pb: 2,
        }}
      >
        {" "}
        Your Rights
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 3,
        }}
      >
        If you have any questions or concerns about this Policy or our privacy
        practices, please contact us at <Link to="/contact">here</Link>.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
