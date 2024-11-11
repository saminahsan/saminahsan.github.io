import React from "react";
import "./Exp.css";
import { Text, Collapse, Avatar } from "@nextui-org/react";

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
      <Collapse.Group splitted>
        <Collapse
              css={{ fontFamily: "Space Grotesk" }}
              title="Conference Publication"
              subtitle="DEXA DAWAK 2023 | BRAC University | Aug 2023"
              expanded
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
            <Text css={{ fontFamily: "Rubik" }}>
              Title - <br /> Supervised Hybrid Model for Rumor Classification: A Comparative Study of Machine and Deep Learning <br /> Approaches <br /><br />
              Authors - <br />
              Mehzabin Sadat Aothoi*, <b>Samin Ahsan*</b>, Najeefa Nikhat Choudhury & Annajiat Alim Rasel <br /><br />

              <a href="https://doi.org/10.1007/978-3-031-39831-5_25" target='_blank' rel='noreferrer'>DOI</a>
            </Text>
          </Collapse>

          <Collapse
              css={{ fontFamily: "Space Grotesk" }}
              title="Lecturer"
              subtitle="BRAC University | Contractual | Sep 2023 - Dec 2023"
              contentLeft={
                <a href="https://www.bracu.ac.bd/" rel="noreferrer" target='_blank'>
                  <Avatar
                    size="md"
                    src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg"
                    bordered
                    squared
                    pointer
                  />
                </a>
              }
          >
              <Text css={{ fontFamily: "Rubik" }}>
                - Facilitated laboratory sessions for CSE110: Programming Languages
                I, CSE111: Programming <br /> Languages II,and CSE484: Cloud Computing
                courses. <br />
                - Contributed to the development of problem sets for effective course delivery <br />
                - Orchestrated the management of lab resources. <br />
                <br />
                <Text b css={{ fontFamily: "Rubik" }}>
                  Skills: Python · OOP · Cloud · Teaching · Communication
                </Text>
              </Text>
          </Collapse>

          <Collapse
            css={{ fontFamily: "Space Grotesk" }}
            title="Student Tutor"
            subtitle="BRAC University | Part-time | Feb 2022 - Dec 2022"
            contentLeft={
              <a href="https://www.bracu.ac.bd/" rel="noreferrer" target='_blank'>
                <Avatar
                  size="md"
                  src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg"
                  bordered
                  squared
                  pointer
                />
              </a>
            }
          >
            <Text css={{ fontFamily: "Rubik" }}>
              - Checked assignment scripts. <br />
              - Provided consultation to around 100 students every semester.<br />
              - Maintained grade sheets and Assisted the faculty in course management.<br />
              <br />
              <br />
              <Text b css={{ fontFamily: "Rubik" }}>
                Skills: Mathematics · Communication · Management · Research ·
                Teaching · Python
              </Text>
            </Text>
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
      <Collapse.Group splitted>
        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="Java Developer"
          subtitle="Orbund Bangladesh | Full-time | Jan 2024 - Present"
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
          expanded
        >
          <Text css={{ fontFamily: "Rubik" }}>
            - Research architectural best-practices to develop new features and integrate 3rd party API services.<br />
            - Develop the redesigned teacher and admin portal of a SIS variant. <br />
            - Adhere to agile methodologies to track progress and ensure project alignment. <br />
            <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Java · JSP · JavaScript · Servlet · Git
            </Text>
          </Text>
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
          <Text css={{ fontFamily: "Rubik" }}>
            - Analyzed system requirement specifications and designing an
            efficient database. <br />
            - Implemented a secure and optimized front end with Angular best
            practices. <br />
            - Ensured consistent design and responsive UI with PrimeNG and
            Bootstrap. <br />
            <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Angular · TypeScript · Bootstrap · SCSS · PrimeNG ·
              Teamwork · Database Design · Git
            </Text>
          </Text>
        </Collapse>

        <Collapse
          css={{ fontFamily: "Space Grotesk" }}
          title="UX Engineer Intern"
          subtitle="Penguin.com.bd | Internship | Mar 2021 - May 2021"
          contentLeft={
            <a href="https://www.penguin.com.bd/" rel="noreferrer" target='_blank'>
              <Avatar
                size="md"
                text="Penguin"
                bordered
                squared
                pointer
              />
            </a>
          }
        >
          <Text css={{ fontFamily: "Rubik" }}>
            - Designed consumer-facing app UX. <br />
            - Created usable and efficient UI mockups in Figma.
            <br />
            - Developed UI components using React.
            <br />
            <br />
            <Text b css={{ fontFamily: "Rubik" }}>
              Skills: Web Development · Git · Node.js · JavaScript · Figma ·
              React.js
            </Text>
          </Text>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}

export default Exp;
