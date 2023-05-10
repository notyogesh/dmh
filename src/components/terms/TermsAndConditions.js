import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
const TermsAndConditions = () => {
  return (
    <Box sx={{ color: "#31344B", textAlign: "left", p: 5 }}>
      <Typography variant="h3" sx={{ textAlign: "center", pb: 3 }}>
        Terms and Conditions
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        Welcome to DMH . These terms and conditionsgovern your use of the
        Company's website, services, and products . By using the Services, you
        agree to these Terms.
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        Use of Services You may use the Services only for lawful purposes and in
        accordance with these Terms. You agree not to use the Services:
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        In any way that violates any applicable federal, state, local, or
        international law or regulation. To transmit, or procure the sending of,
        any advertising or promotional material, including any "junk mail,"
        "chain letter," "spam," or any other similar solicitation. To
        impersonate or attempt to impersonate the Company, a Company employee,
        another user, or any other person or entity. To engage in any other
        conduct that restricts or inhibits anyone's use or enjoyment of the
        Services, or which, as determined by the Company, may harm the Company
        or users of the Services, or expose them to liability. Intellectual
        Property The Services and its entire contents, features, and
        functionality (including but not limited to all information, software,
        text, displays, images, video, and audio) are owned by the Company, its
        licensors, or other providers of such material and are protected by
        United States and international copyright, trademark, patent, trade
        secret, and other int
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center", pb: 3 }}>
        ellectual property or proprietary rights laws.
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
          // textAlign: "center",
        }}
      >
        You must not reproduce, distribute, modify, create derivative works of,
        publicly display, publicly perform, republish, download, store, or
        transmit any of the material on our Services, except as follows:
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        Your computer may temporarily store copies of such materials in RAM
        incidental to your accessing and viewing those materials. You may store
        files that are automatically cached by your web browser for display
        enhancement purposes. You may print or download one copy of a reasonable
        number of pages of the Services for your own personal, non-commercial
        use and not for further reproduction, publication, or distribution. If
        we provide social media features with certain content, you may take such
        actions as are enabled by such features.
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        Disclaimer of Warranties The Services are provided on an "as is" and "as
        available" basis, without any warranties of any kind, express or
        implied, including but not limited to the warranties of merchantability,
        fitness for a particular purpose, and non-infringement. The Company
        makes no warranty that the Services will meet your requirements or be
        available on an uninterrupted, secure, or error-free basis.
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        Limitation of Liability In no event will the Company, its affiliates, or
        their licensors, service providers, employees, agents, officers, or
        directors be liable for damages of any kind, under any legal theory,
        arising out of or in connection with your use, or inability to use, the
        Services, including any direct, indirect, incidental, special,
        consequential, or punitive damages, including but not limited to,
        personal injury, pain and suffering, emotional distress, loss of
        revenue, loss of profits, loss of business or anticipated savings, loss
        of use, loss of goodwill, loss of data, and whether caused by tort
        (including negligence), breach of contract, or otherwise, even if
        foreseeable.
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          pb: 2,
        }}
      >
        Indemnification You agree to defend, indemnify, and hold harmless the
        Company, its affiliates, licensors, and service providers, and its and
        their respective officers, directors, employees, contractors, agents,
        licensors, suppliers, successors, and assigns from and against any
        claims, liabilities, damages, judgments, awards, losses, costs,
        expenses, or fees (including reasonable attorneys' fees) arising out of
        or relating to your violation of these Terms or your use.
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
