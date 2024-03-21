import React from 'react';
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li style={{ color: '#FF4A17' }}>
          {withIcon ? <span className='cs-FF4A17'><Icon icon="mdi:envelope" /></span> : ''}
          hello@talentoptic.com
        </li>
      </ul>
    </>
  );
}
