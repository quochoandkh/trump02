"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/globals.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillTwitterCircle, AiFillGithub, AiFillRedditCircle } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import Image from 'next/image';

// Corrected assignment to avoid errors
const contract = "ECUB6HxvhMtDdVRc5Erbk7aY5brhV7MsAJuPpg4tjKwf";
const LP = "Bohupfpq5is6AGXrx2rsjC5rPrp2aVVpDgdY2HnG21MV?handle=257183f85fc3e31ade7a3";

const Page = () => {
  return (
    <div>
      <Container className='hero p-5 mt-5 text-center'>
        <h1 className='hero-text'>
          TRUMP_COIN
        </h1>
        <h4 className='mb-3'>
          <span className='text-primary'>
            The new meme coin, create by Trump, TRUMP_COIN may be big coin!!!
          </span>
          <br />
          <span className='text-secondary'>
            contract: {contract}
          </span>
        </h4>
      </Container>
      <Container className='hero-container'>
        <Row>
          <Col lg={6} sm={12} md={12} className='hero-icons d-flex align-items-center justify-content-center'>
            <AiFillGithub className='github'/>
            <AiFillRedditCircle className='reddit' />
            <AiFillTwitterCircle className='twitter' />
            <BsTelegram className='telegram' />
          </Col>
          <Col lg={6} sm={12} md={12} className='hero-buttons d-flex align-items-center justify-content-center'>
            <button className='btn btn-outline-danger rounded-pill'>KYC</button>
            <button className='btn btn-outline-primary rounded-pill'>SAFU</button>
            <button className='btn btn-outline-success rounded-pill'>AUDITED</button>
          </Col>
        </Row>
      </Container>
      <Container className='mt-5 p-5 text-center'>
        <Row className='mt-5'>
          <Col>
            <div className='coin-wrapper'>
              <button className='btn btn-outline-light rounded-pill text-center flex-button btn-flexible move-up'>
                <a href={`https://photon-sol.tinyastro.io/en/lp/${LP}`} target='_blank'>Buy Now</a>
                <Image className="img" src="/assets/icons/buy.svg" width={30} height={30} alt='buy now' />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
