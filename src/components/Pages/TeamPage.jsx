import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';
const teamData = [
  {
    memberImage: 'https://media.discordapp.net/attachments/1211374771531415594/1220345515808395385/IMG_8637.png?ex=660e9a53&is=65fc2553&hm=9f132192b10ef635b8a5b42f5a3197b6932827a94e51b4fb053dd597904c01de&=&format=webp&quality=lossless&width=437&height=437',
    memberName: 'Melon Bulgery',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: 'https://media.discordapp.net/attachments/1211374771531415594/1220345515808395385/IMG_8637.png?ex=660e9a53&is=65fc2553&hm=9f132192b10ef635b8a5b42f5a3197b6932827a94e51b4fb053dd597904c01de&=&format=webp&quality=lossless&width=437&height=437',
    memberName: 'Olinaz Fushi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: 'https://media.discordapp.net/attachments/1211374771531415594/1220345515808395385/IMG_8637.png?ex=660e9a53&is=65fc2553&hm=9f132192b10ef635b8a5b42f5a3197b6932827a94e51b4fb053dd597904c01de&=&format=webp&quality=lossless&width=437&height=437',
    memberName: 'David Elone',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: 'https://media.discordapp.net/attachments/1211374771531415594/1220345515808395385/IMG_8637.png?ex=660e9a53&is=65fc2553&hm=9f132192b10ef635b8a5b42f5a3197b6932827a94e51b4fb053dd597904c01de&=&format=webp&quality=lossless&width=437&height=437',
    memberName: 'Melina Opole',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: 'https://media.discordapp.net/attachments/1211374771531415594/1220345515808395385/IMG_8637.png?ex=660e9a53&is=65fc2553&hm=9f132192b10ef635b8a5b42f5a3197b6932827a94e51b4fb053dd597904c01de&=&format=webp&quality=lossless&width=437&height=437',
    memberName: 'David Elone',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: 'https://media.discordapp.net/attachments/1211374771531415594/1220345515808395385/IMG_8637.png?ex=660e9a53&is=65fc2553&hm=9f132192b10ef635b8a5b42f5a3197b6932827a94e51b4fb053dd597904c01de&=&format=webp&quality=lossless&width=437&height=437',
    memberName: 'Melina Opole',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: 'https://media.discordapp.net/attachments/1211374771531415594/1220345515808395385/IMG_8637.png?ex=660e9a53&is=65fc2553&hm=9f132192b10ef635b8a5b42f5a3197b6932827a94e51b4fb053dd597904c01de&=&format=webp&quality=lossless&width=437&height=437',
    memberName: 'Melon Bulgery',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: 'https://media.discordapp.net/attachments/1211374771531415594/1220345515808395385/IMG_8637.png?ex=660e9a53&is=65fc2553&hm=9f132192b10ef635b8a5b42f5a3197b6932827a94e51b4fb053dd597904c01de&=&format=webp&quality=lossless&width=437&height=437',
    memberName: 'Olinaz Fushi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
];

export default function TeamPage() {
  pageTitle('Team');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet our awesome <br/>team members"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
