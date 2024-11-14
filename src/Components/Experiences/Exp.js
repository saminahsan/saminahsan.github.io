import React from "react";
import "./Exp.css";
import { Text, Collapse, Avatar, Badge, Grid } from "@nextui-org/react";

function Exp() {
  return (
    <div className="Exp" id="exp">
      <Text
        h1
        css={{
          fontFamily: "Space Grotesk",
          textGradient: "45deg, $blue600 -20%, $pink600 80%",
        }}
      >
        Academia
      </Text>
      <Collapse.Group splitted css={{width: '100%'}}>
        <Collapse
              css={{ fontFamily: "Space Grotesk" }}
              title="Adjunct Lecturer"
              subtitle="BRAC University | Contractual | Sep 2023 - Dec 2023"
              expanded
              contentLeft={
                <a href="https://www.bracu.ac.bd/" rel="noreferrer" target='_blank'>
                  <Avatar
                    size="md"
                    text="BU"
                    bordered
                    squared
                    pointer
                  />
                </a>
              }
          >
              <ul>
                <li>
                  - Facilitated laboratory sessions for CSE110: Programming Languages I, CSE111: Programming Languages II, and CSE484: Cloud Computing courses.
                </li>
                <li>- Contributed to the development of problem sets for effective course delivery.</li>
                <li>- Orchestrated the management of lab resources.</li>
                <li>
                  <Grid.Container gap={1}>
                    <Grid>Skills:</Grid>
                    <Grid><Badge isSquared>Teaching</Badge></Grid>
                    <Grid><Badge isSquared>Python</Badge></Grid>
                    <Grid><Badge isSquared>OOP</Badge></Grid>
                    <Grid><Badge isSquared>Cloud</Badge></Grid>
                    <Grid><Badge isSquared>Research</Badge></Grid>
                  </Grid.Container>
                </li>
              </ul>
          </Collapse>
        <Collapse
              css={{ fontFamily: "Space Grotesk" }}
              title="Conference Publication"
              subtitle="DEXA DAWAK 2023 | Aug 2023"
              contentLeft={
                <a href="https://link.springer.com/chapter/10.1007/978-3-031-39831-5_25" rel="noreferrer" target='_blank'>
                  <Avatar
                    size="md"
                    text="NLP"
                    bordered
                    squared
                    pointer
                  />
                </a>
              }
          >
            <ul>
              <li>
                Title
                <Text css={{ fontFamily: "Rubik" }}>
                  Supervised Hybrid Model for Rumor Classification: A Comparative Study of Machine and Deep Learning Approaches
                </Text>
              </li>
              <li>
                Authors
                <Text css={{ fontFamily: "Rubik" }}>
                  Mehzabin Sadat Aothoi*, <b>Samin Ahsan*</b>, Najeefa Nikhat Choudhury & Annajiat Alim Rasel
                </Text>
              </li>
              <li><a href="https://doi.org/10.1007/978-3-031-39831-5_25" target='_blank' rel='noreferrer'>DOI</a>
              </li>
            </ul>
          </Collapse>

          <Collapse
            css={{ fontFamily: "Space Grotesk" }}
            title="Teaching Assistant"
            subtitle="BRAC University | Part-time | Feb 2022 - Dec 2022"
            contentLeft={
              <a href="https://www.bracu.ac.bd/" rel="noreferrer" target='_blank'>
                <Avatar
                  size="md"
                  text="BU"
                  bordered
                  squared
                  pointer
                />
              </a>
            }
          >
              <ul>
                <li>- Checked assignment scripts.</li>
                <li>- Provided consultation to around 100 students every semester.</li>
                <li>- Maintained grade sheets and Assisted the faculty in course management.</li>
                <li>
                  <Grid.Container gap={1}>
                    <Grid>Skills:</Grid>
                    <Grid><Badge isSquared>Mathematics</Badge></Grid>
                    <Grid><Badge isSquared>Research</Badge></Grid>
                    <Grid><Badge isSquared>Communication</Badge></Grid>
                    <Grid><Badge isSquared>Management</Badge></Grid>
                    <Grid><Badge isSquared>Teaching</Badge></Grid>
                    <Grid><Badge isSquared>Python</Badge></Grid>
                  </Grid.Container>
                </li>
              </ul>
         </Collapse>

         <Collapse
            css={{ fontFamily: "Space Grotesk" }}
            title="B.Sc. in Computer Science & Engineering"
            subtitle="BRAC University | CGPA 3.90 / 4.00 | Jan 2019 - Jan 2023"
            contentLeft={
              <a href="https://www.bracu.ac.bd/" rel="noreferrer" target='_blank'>
                <Avatar
                  size="md"
                  text="BU"
                  bordered
                  squared
                  pointer
                />
              </a>
            }
          >
              <ul>
                <li>- Highest Distinction Award.</li>
                <li>- 6-time VC's list and 2-time Dean's list Academic Achievement Award with Merit Scholarships.</li>
              </ul>
         </Collapse>
      </Collapse.Group>

      <br /><br />
 
      <Text
        h1
        css={{
          fontFamily: "Space Grotesk",
          textGradient: "45deg, $blue600 -20%, $pink600 80%",
        }}
      >
        Industry
      </Text>
      <Collapse.Group splitted css={{width: '100%'}}>
        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="Java Developer"
          subtitle="Orbund Bangladesh | Full-time | Jan 2024 - Present"
          expanded
          contentLeft={
            <a href="https://orbund.com/" rel="noreferrer" target='_blank'>
              <Avatar
                size="md"
                src="https://orbund.com/orbund_icon_large.png"
                color="primary"
                bordered
                squared
                pointer
              />
            </a>
          }
        >
            <ul>
              <li>- Research architectural best-practices to develop new features and integrate 3rd party API services.</li>
              <li>- Develop the redesigned teacher and admin portal of a SIS variant.</li>
              <li>- Adhere to agile methodologies to track progress and ensure project alignment.</li>
              <li>
                <Grid.Container gap={1}>
                  <Grid>Skills:</Grid>
                  <Grid><Badge isSquared>Java</Badge></Grid>
                  <Grid><Badge isSquared>JSP</Badge></Grid>
                  <Grid><Badge isSquared>JavaScript</Badge></Grid>
                  <Grid><Badge isSquared>Servlet</Badge></Grid>
                  <Grid><Badge isSquared>Git</Badge></Grid>
                </Grid.Container>
              </li>
            </ul>
        </Collapse>

        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="Software Engineer Intern"
          subtitle="Square Health Ltd. | Internship | Feb 2023 - May 2023"
          contentLeft={
            <a href="https://squarehealth.com.bd/" rel="noreferrer" target='_blank'>
              <Avatar
                size="md"
                text="SQH"
                bordered
                squared
                pointer
              />
            </a>
          }
        >
            <ul>
              <li>- Analyzed system requirement specifications and designing an efficient database.</li>
              <li>- Implemented a secure and optimized front end with Angular best practices.</li>
              <li>- Ensured consistent design and responsive UI with PrimeNG and Bootstrap.</li>
              <li>
                <Grid.Container gap={1}>
                  <Grid>Skills:</Grid>
                  <Grid><Badge isSquared>Angular</Badge></Grid>
                  <Grid><Badge isSquared>TypeScript</Badge></Grid>
                  <Grid><Badge isSquared>Bootstrap</Badge></Grid>
                  <Grid><Badge isSquared>SCSS</Badge></Grid>
                  <Grid><Badge isSquared>PrimeNG</Badge></Grid>
                  <Grid><Badge isSquared>Teamwork</Badge></Grid>
                  <Grid><Badge isSquared>Database</Badge></Grid>
                  <Grid><Badge isSquared>Git</Badge></Grid>
                </Grid.Container>
              </li>
            </ul>
        </Collapse>

        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="UX Engineer Intern"
          subtitle="Penguin.com.bd | Internship | Mar 2021 - May 2021"
          contentLeft={
            <a href="https://www.penguin.com.bd/" rel="noreferrer" target='_blank'>
              <Avatar
                size="md"
                text="PNGN"
                bordered
                squared
                pointer
              />
            </a>
          }
        >
            <ul>
              <li>- Designed consumer-facing app UX.</li>
              <li>- Created usable and efficient UI mockups in Figma.</li>
              <li>- Developed UI components using React.</li>
              <li>
                <Grid.Container gap={1}>
                  <Grid>Skills:</Grid>
                  <Grid><Badge isSquared>Figma</Badge></Grid>
                  <Grid><Badge isSquared>Web Development</Badge></Grid>
                  <Grid><Badge isSquared>JavaScript</Badge></Grid>
                  <Grid><Badge isSquared>Node.js</Badge></Grid>
                  <Grid><Badge isSquared>React.js</Badge></Grid>
                  <Grid><Badge isSquared>Git</Badge></Grid>
                </Grid.Container>
              </li>
            </ul>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}

export default Exp;
