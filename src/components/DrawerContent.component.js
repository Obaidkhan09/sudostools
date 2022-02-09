import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formattersDict, converters, checkers, coders } from './constants/Constants';
import { Link } from 'react-router-dom';

import '../index.css'

export default function DrawerContent() {
    return (
        <div style={{ paddingTop: "80px" }}>
            <Typography style={{ padding: "0px 16px", fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.54)", margin: "0px" }}>
                Navigation
            </Typography>
            <Accordion elevation={0} style={{ margin: "5px 0px" }} sx={{ "&:before": { display: "none" } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Formatters</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: "0px 0px 0px 16px" }}>
                    {Object.entries(formattersDict).map(([path, value]) => (
                        <Link to={path} style={{ textDecoration: "none", color: "#212121" }}>
                            <Typography key={value}
                                style={{
                                    padding: "8px 16px",
                                    fontSize: "1rem",
                                    fontFamily: "Roboto",
                                    lineSpacing: "0.00938rem",
                                    paddingBottom: "12px",
                                    width: "100%"
                                }}
                                className="onHover"
                            >

                                {value}
                            </Typography>
                        </Link>
                    ))}
                    {/* {formatters.map((item, i) => (
                        <Typography key={i} style={{
                            padding: "8px 16px",
                            fontSize: "1rem",
                            fontFamily: "Roboto",
                            lineSpacing: "0.00938rem",
                            paddingBottom: "12px"
                        }}>
                            {item}
                        </Typography>
                    ))} */}
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} style={{ margin: "5px 0px" }} sx={{ "&:before": { display: "none" } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Converters</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: "0px 16px 0px" }}>
                    {converters.map((item, i) => (
                        <Typography key={i} style={{
                            padding: "8px 16px",
                            fontSize: "1rem",
                            fontFamily: "Roboto",
                            lineSpacing: "0.00938rem",
                            paddingBottom: "12px"
                        }}>
                            {item}
                        </Typography>
                    ))}
                    <Accordion elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            Encode & Decode
                        </AccordionSummary>
                        <AccordionDetails>
                            {coders.map((encoder, i) => (
                                <Typography key={i} style={{
                                    padding: "8px 16px",
                                    fontSize: "1rem",
                                    fontFamily: "Roboto",
                                    lineSpacing: "0.00938rem",
                                    paddingBottom: "12px"
                                }}>
                                    {encoder}
                                </Typography>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} style={{ margin: "5px 0px" }} sx={{ "&:before": { display: "none" } }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Diff Checkers</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ padding: "0px 16px 0px" }}>
                    {checkers.map((item, i) => (
                        <Typography key={i} style={{
                            padding: "8px 16px",
                            fontSize: "1rem",
                            fontFamily: "Roboto",
                            lineSpacing: "0.00938rem",
                            paddingBottom: "12px"
                        }}>
                            {item}
                        </Typography>
                    ))}
                </AccordionDetails>
            </Accordion>

        </div>
    );
}