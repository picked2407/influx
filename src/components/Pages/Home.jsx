import React, { useEffect } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Instagram',
    links: '/',
  },
  {
    name: 'LinkedDIn',
    links: 'https://www.linkedin.com/company/influx-management/?viewAsMember=true',
  },
  {
    name: 'Twitter',
    links: 'https://twitter.com/InfluxMGMT',
  },
];

// FunFact Data
const funfaceData = [
  {
    title: 'years experience',
    factNumber: '10+',
  },
  {
    title: 'Views',
    factNumber: '10B+',
  },
  {
    title: 'Impressions',
    factNumber: '100B+',
  },
  {
    title: 'Followers Earned',
    factNumber: '10M+',
  },
];
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_2.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_0.jpg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_3.jpeg',
  },
];

export default function Home() {
  pageTitle('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero 
        title="Empowering Talent <br/>Igniting Success"
        subtitle="Maximising influencer potential through expert management and strategic enhancement."
        btnText="Contact Us"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our Achievements"
          subtitle="Step into the vast landscape of influencer marketing. As pioneers in talent management, we navigate space to propel our clients towards unparalleled success."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"hance
                
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Management"
                    link="/service/service-details"
                    src="/images/22.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Partnerships"
                    link="/service/service-details"
                    src="https://media.discordapp.net/attachments/1211374771531415594/1220753653351321661/Untitled_design_3.png?ex=6610166f&is=65fda16f&hm=f610e1d8ce9baaf7ce1e8f7849ae88d861d45eea9f477b89eb0a7a8096ff3d78&=&format=webp&quality=lossless&width=437&height=437"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Content Creation"
                    link="/service/service-details"
                    src="/images/33.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Social Media"
                    link="/service/service-details"
                    src="/images/55.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}


      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Infleuncer Marketing industry"
                subtitle="Our Industry"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}
       {/* Start MovingText Section */}
       <Spacing lg="125" md="70" />
      <MovingText text="Connecting you with global brands" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

     
     

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

  
    
     

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
