"use client";

import * as React from "react";
import {Accordion, AccordionButton, AccordionItem, AccordionPanel, Headline, styled} from "@zeiss/beyond-online-react";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-l);
`

export default function Home() {
  return (
    <div>
      <StyledContainer>
        <Headline
          headline="Frequently Asked Questions"
          size="l"
        />
        <Accordion>
          <AccordionItem>
            <AccordionButton>
              What is MyZEISS?
            </AccordionButton>
            <AccordionPanel>
              The MyZEISS customer platform is your central point of contact for all digital services that ZEISS offers you: from managing your devices and systems to customer services and training.

              My Learning: Learn more about your systems with detailed product tutorials and take online certification courses from the ZEISS Academy. In addition, you get access to clinical case presentations from your professional colleagues in the Peer Insights section.
              My Tools: You get access to patient materials exclusively for ophthalmology customers that will help you advance your business. The CONVIVO Image Library is exclusively available to ZEISS CONVIVO customers.
              My Systems: Manage your devices and create service tickets – easily online.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              How can I register with MyZEISS?
            </AccordionButton>
            <AccordionPanel>
              MyZEISS is tailored and optimized specifically for each user. Register in three easy steps at www.zeiss.com/meditec/myzeiss , preferably with your business email address.

              Step 1: Enter your business email address
              Step 2: Fill out the form
              Step 3: Click on the link in the confirmation email to activate your user account
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              Can I also find additional useful tools or services for my practical work on MyZEISS?
            </AccordionButton>
            <AccordionPanel>
              Depending on your role and area of ​​expertise, additional tools are available to
              you on MyZEISS. CONVIVO customers can benefit from the ZEISS CONVIVO Image Library, which
              contains selected clinical cases from their specialist colleagues - with image examples
              from procedures in which CONVIVO® from ZEISS was used. We are constantly developing new
              functions and services in order to offer help and support to all customers of our wide
              range of services.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              How can I submit a service request using MyZEISS?
            </AccordionButton>
            <AccordionPanel>
              You can easily create service requests in the "Service Requests" section and send them to ZEISS. Alternatively, you can use the device overview in the "My Systems" area. This option has the advantage that some data for your service request is transferred directly to the form, including the department and the serial number. All you then have to do is select the general topic area and describe your problem in more detail. Optionally, you can also upload pictures or videos that can help us better understand the problem and find a solution more quickly. In the "Service Requests" area, you can track the progress of your request at any time.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              Can I find help for troubleshooting myself at MyZEISS?
            </AccordionButton>
            <AccordionPanel>
              Yes, on MyZEISS you will find various product training and troubleshooting videos as well as device documentation. In the short instructional videos, ZEISS experts explain our products and show you how to troubleshoot them. This way you can easily solve minor problems yourself. In Peer Insights you will also find a large collection of clinical case presentations in which your professional colleagues explain their treatment methods using ZEISS technologies.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </StyledContainer>
    </div>
  );
}
