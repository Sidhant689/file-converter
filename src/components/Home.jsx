// Home.js
import React, { useState } from 'react';
import * as bs from 'react-bootstrap';
import conversions from '../conversions';
import FileConversionModal from './FileConversionModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedConversion, setSelectedConversion] = useState(null);

  const handleConversionClick = (conversion) => {
    setSelectedConversion(conversion);
    setShowModal(true);
  };

  return (
    <div className="py-4 px-4">
      <bs.Container>
        <bs.Row xs={1} md={2} lg={4} className="g-4">
          {conversions.map((conversion, index) => (
            <bs.Col key={index}>
              <bs.Card
                className="h-100"
                onClick={() => handleConversionClick(conversion)}
              >
                <bs.Card.Body className="cardBody d-flex align-items-center justify-content-center flex-column h-100">
                  <div className="me-3" style={{ fontSize: '2rem' }}>
                    {conversion.icon()}
                  </div>
                  <div>{conversion.name}</div>
                </bs.Card.Body>
              </bs.Card>
            </bs.Col>
          ))}
        </bs.Row>
      </bs.Container>

      <FileConversionModal
        show={showModal}
        onHide={() => setShowModal(false)}
        conversion={selectedConversion}
      />
    </div>
  );
};

export default Home;