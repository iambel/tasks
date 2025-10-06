import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const AccordionComponent = () => {
  const accordionStyle = {
    backgroundColor: "black",
    color: "white",
    border: "2px solid #1f2937",
    "& .MuiAccordionSummary-expandIcon": {
      color: "white",
    },
  };

  const detailsStyle = {
    backgroundColor: "black",
    color: "white",
  };

  const containerStyle = {
    padding: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    textAlign: "justify",
    maxWidth: { xs: "90%", sm: "80%", md: "50%" },
    margin: "0 auto",
  };

  return (
    <Box sx={containerStyle}>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
          >
            What is Watchit?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsStyle}>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            <strong>Watchit</strong> is a streaming service that offers a wide
            variety of award-winning TV shows, movies, anime, documentaries, and
            more on thousands of internet-connected devices.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
          >
            Where can I watch?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsStyle}>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            Watch anywhere, anytime. Sign in with your <strong>Watchit</strong>{" "}
            account to watch instantly on the web at
            <strong> watchit.com</strong> from your personal computer or on any
            internet-connected device that offers the <strong>Watchit</strong>{" "}
            app, including smart TVs, smartphones, tablets, streaming media
            players and game consoles.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }}
          >
            What can I watch on Watchit?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={detailsStyle}>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
            <strong>Watchit</strong> has an extensive library of feature films,
            documentaries, TV shows, anime, award-winning{" "}
            <strong>Watchit</strong> originals, and more. Watch as much as you
            want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionComponent;
