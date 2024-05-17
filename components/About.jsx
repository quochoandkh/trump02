import React from 'react';
import Head from 'next/head'; // Import Head từ next/head

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - TRUMP_COIN</title> {/* Đặt tiêu đề cho trang About */}
      </Head>
      <div className='container p-5 text-center bg-light'>
        <h1 className='mb-3'>Heading</h1>
        <h4 className='mb-3'>Subheading</h4>
        <a className='btn btn-primary' href='' role='button'>
          Call to action
        </a>
      </div>
    </div>
  );
}

export default About;
