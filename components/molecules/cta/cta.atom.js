import React from 'react';
import Link from 'next/link';

const Cta = ({ href, text }) => (
  <Link href={href}>
    <a>{text}</a>
  </Link>
);

export default Cta;
