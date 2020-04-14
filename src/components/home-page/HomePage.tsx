import React, { HTMLProps } from 'react';
import { Header, Footer, Promo, Container, Row, Col, Panel, Hero } from 'nhsuk-react-components';

interface HomePageProps extends HTMLProps<HTMLDivElement> {
  title: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  className,
  title,
}) => (
<div  className={className}>
    <title>{title}</title>
    <Header orgName="Health Education England" orgSplit="Library and Knowledge Services">
        <Header.Container>
            <Header.Logo href="/" />
            <Header.Content>
                <Header.MenuToggle />
                <Header.Search />
            </Header.Content>
        </Header.Container>
        <Header.Nav>
            <Header.NavItem href="/" mobileOnly>
                Home
            </Header.NavItem>
            <Header.NavItem>Your hospital visit</Header.NavItem>
            <Header.NavItem>Wards and departments</Header.NavItem>
            <Header.NavItem>Conditions and treatments</Header.NavItem>
            <Header.NavItem>Our people</Header.NavItem>
            <Header.NavItem>Our research</Header.NavItem>
        </Header.Nav>
    </Header>     
    <Hero imageSrc="https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg">

    </Hero>
    <Container>
      <Row>
        <Col width="full">
            <Panel>
                This is some text in a panel on the HomePage    
            </Panel>
        </Col>
      </Row>
      <Row>
        <Col width="one-third">
            <Promo href="https://www.nhs.uk">
                <Promo.Heading>Save a life: give blood</Promo.Heading>
                <Promo.Description>
                    Please register today. Donating blood is easy, and saves lives.
                </Promo.Description>
            </Promo>
        </Col>
        <Col width="one-third">
            <Promo href="https://www.nhs.uk">
                <Promo.Heading>Save a life: give blood</Promo.Heading>
                <Promo.Description>
                    Please register today. Donating blood is easy, and saves lives.
                </Promo.Description>
            </Promo>
        </Col>
        <Col width="one-third">
            <Promo href="https://www.nhs.uk">
                <Promo.Heading>Save a life: give blood</Promo.Heading>
                <Promo.Description>
                    Please register today. Donating blood is easy, and saves lives.
                </Promo.Description>
            </Promo>
        </Col>
      </Row>
    </Container>
    <Footer>
        <Footer.List columns>
          <Footer.ListItem href="https://www.nhs.uk/nhs-sites/">NHS sites</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/about-us/">About us</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/contact-us/">Contact us</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/personalisation/login.aspx">
            Profile editor login
          </Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/about-us/sitemap/">Sitemap</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/accessibility/">Accessibility</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/our-policies/">Our policies</Footer.ListItem>
          <Footer.ListItem href="https://www.nhs.uk/our-policies/cookies-policy/">
            Cookies
          </Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
    </Footer>
  </div>
);

export default HomePage;
