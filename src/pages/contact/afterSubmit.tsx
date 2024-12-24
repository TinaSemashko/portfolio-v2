import { Box, Typography } from "@mui/material";
import React from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useTranslation } from "react-i18next";

const AfterSubmit: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "2rem",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        marginTop="11.5rem"
        sx={{ color: "colorBlue.main" }}
      >
        {t("contact.submission")}
      </Typography>
      <ContactMailIcon
        sx={{
          width: "3rem",
          height: "3rem",
          color: "colorBlue.main",
          marginTop: "1rem",
        }}
      />
      <Typography
        variant="body1"
        marginTop="1rem"
        sx={{ color: "colorBlue.main" }}
      >
        {t("contact.submission2")}
      </Typography>
    </Box>
  );
};

export default AfterSubmit;
