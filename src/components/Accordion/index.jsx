import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'What is influencer marketing in esports and gaming, and how can it benefit my brand?',
    answer:
      'Influencer marketing in esports and gaming involves collaborating with content creators to promote products or services to their audiences. It benefits brands by reaching engaged gaming communities, boosting brand awareness, and driving sales.',
  },
  {
    question: 'Why choose INFLUX for influencer management in esports and gaming?',
    answer:
    'With over 10 years of industry experience, we specialise in esports and gaming influencer marketing. We offer tailored solutions including content management, social media, brand development, and brand deals to maximize your brands presence in the esports & entertainment world.'
  },
  {
    question: 'How do you select and manage creators for our brand within esports and gaming?',
    answer:
      'We carefully vet creators who align with your brand and target audience. Our services include content strategy, social media management, and brand partnership negotiation to foster long-term relationships and drive success.',
  },
  {
    question: 'What sets INFLUX apart in esports and gaming?',
    answer:
      'Our expertise and extensive network in the esports and gaming industry enable us to deliver measurable results. Whether you seek brand visibility, engagement, or sales, we have the insights and strategies to help you achieve your goals.',
  },
  {
    question: 'How can I get started with INFLUX?',
    answer:
      'Reach out to us via our contact page or give us a call to schedule a consultation. Well discuss your brand objectives, target audience, and budget to create a tailored influencer marketing strategy that meets your needs.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
