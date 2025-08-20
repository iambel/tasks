import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = () => {
  return (
    <div className="p-4 flex flex-col gap-2 text-justify lg:w-2/4 lg:mx-auto">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=" !text-white !bg-black !border-2 border-gray-900"
        >
          <Typography component="span">What is Watchit?</Typography>
        </AccordionSummary>
        <AccordionDetails className=" !text-white !bg-black">
          <Typography>
            <strong> Watchit</strong> is a streaming service that offers a wide
            variety of award-winning TV shows, movies, anime, documentaries, and
            more on thousands of internet-connected devices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className=" !text-white !bg-black !border-2 border-gray-900"
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Where can I watch?</Typography>
        </AccordionSummary>
        <AccordionDetails className=" !text-white !bg-black">
          <Typography>
            Watch anywhere, anytime. Sign in with your <strong>Watchit </strong>
            account to watch instantly on the web at
            <strong> watchit.com </strong> from your personal computer or on any
            internet-connected device that offers the <strong>Watchit </strong>
            app, including smart TVs, smartphones, tablets, streaming media
            players and game consoles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel2-content"
          id="panel2-header"
          className=" !text-white !bg-black !border-2 border-gray-900"
        >
          <Typography component="span">What can I watch on Watchit?</Typography>
        </AccordionSummary>
        <AccordionDetails className=" !text-white !bg-black">
          <Typography>
            <strong>Watchit</strong> has an extensive library of feature films,
            documentaries, TV shows, anime, award-winning{" "}
            <strong>Watchit </strong> originals, and more. Watch as much as you
            want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
