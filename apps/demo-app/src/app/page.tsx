"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel, Button,
  Headline, InlineLink,
  styled, TextInput
} from "@zeiss/beyond-online-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import dataSlider from "@/_data/slider-data.json";
import 'swiper/css';
import DemoSlider from "@/components/DemoSlider";

const StyledLandingPage = styled.div`
  position: relative;
`

const StyledMedMyZEISSImageContainer = styled.div`
  background-image: url('/assets/med-myzeiss.png');
  background-size: contain;
  background-repeat: no-repeat;
  height: 700px;
  position: relative;
  width: calc(100vw - 20px);
  margin-left: calc(-50vw + 50% + 10px);
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const StyledMedMyZEISSImageContainerContent = styled.div`
  padding: 0 var(--spacing-4xl);
  margin: 0 auto;
  padding-top: var(--spacing-4xl);
  max-width: 1440px;
`

const StyledHeadline = styled(Headline)`
  max-width: 700px;
  padding: var(--spacing-s) 0;
`

const StyledInlineLink = styled(InlineLink)`
  margin-top: var(--spacing-l);
`

const StyledButton = styled(Button)`
  margin: var(--spacing-2xl) auto 0;
`

const StyledCarouselContainer = styled.div`
  width: calc(100vw - 20px);
  margin-left: calc(-50vw + 50% + 10px);
`

const StyledVideoContainer = styled.div`
  margin-top: var(--spacing-xl);
`


const StyledFAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-l);
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
`


export default function Home() {
  return (
    <StyledLandingPage>
      <StyledMedMyZEISSImageContainer>
        <StyledMedMyZEISSImageContainerContent>
          <StyledHeadline
            eyebrow="Everything at a glance"
            headline="Make the most of the potential of your ZEISS products: With MyZEISS"
            size="2xl"
          />

          <StyledInlineLink href="/">
            <b>Click here to log in.</b>
          </StyledInlineLink>

          <StyledHeadline
            headline="Or register in three easy steps."
            subHeadline="Enter your email address, fill out the form and activate your user account by clicking on the link in the confirmation email."
            size="s"
          />

          <TextInput
            label="To register, enter your business email address"
            placeholder="example@email.com"
          />

          <StyledButton
            onClick={() => {}}
            size="m"
            variant="primary"
          >
            Register Now
          </StyledButton>
        </StyledMedMyZEISSImageContainerContent>
      </StyledMedMyZEISSImageContainer>

      <StyledCarouselContainer>
        <DemoSlider data={dataSlider} />
      </StyledCarouselContainer>

      {/*<StyledVideoContainer>
        <video width="320" height="240" controls preload="none">
          <source src="https://embed-ssl.wistia.com/deliveries/b6f2e592c186238dab3a2573399c9cd9.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button_rounded=1&amp;image_play_button_color=54bbffe0" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </StyledVideoContainer>*/}

      <StyledFAQContainer>
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
              The MyZEISS customer platform is your central point of contact for all digital services that ZEISS offers
              you: from managing your devices and systems to customer services and training.

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
      </StyledFAQContainer>
    </StyledLandingPage>
  );
}
