import React from 'react';
import Div from '../Div';
import './logolist.scss';
const partnerLogos = [
  {
    src: 'https://media.discordapp.net/attachments/1211374771531415594/1220823301761273887/HelloFresh-Logo-White-Transparent-Insight-Platforms.png?ex=6610574c&is=65fde24c&hm=c9aa7d002d2b233aa764e5bae7d144281e5ff344d13afa7ce5ddae2212fdb858&=&format=webp&quality=lossless&width=613&height=613',
    alt: 'Partner',
  },
  {
    src: '/images/partner_2.svg',
    alt: 'Partner',
  },
  {
    src: '/images/partner_3.svg',
    alt: 'Partner',
  },
  {
    src: '/images/partner_4.svg',
    alt: 'Partner',
  },
  {
    src: '/images/partner_5.svg',
    alt: 'Partner',
  },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}
