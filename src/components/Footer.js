import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Stay connected with us:</span>
        </div>
        {/* Social Icons Here */}
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="12" lg="12" xl="12" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Tunza Watoto Foundation Inc.
              </h6>
              <p>
                The Tunza Watoto Foundation is dedicated to providing opportunities for orphaned and vulnerable children. Our mission is to break the cycle of adversity and poverty by offering essential services such as food, shelter, water, healthcare, clothing, and education. We aim to transform lives, enabling every child to thrive and become a beacon of hope in their community.
              </p>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Information</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                1234 Tunza Street, Watoto City, Country
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@tunzawatoto.org
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 
                +1 (123) 456-7890
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Tunza Watoto Foundation Inc. All Rights Reserved.
      </div>
    </MDBFooter>
  );
}
