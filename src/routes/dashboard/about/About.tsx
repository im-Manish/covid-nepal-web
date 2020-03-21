import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const About = () => (
  <>
    <div className="container-fluid mt-3">
      <Row className="mt-5 justify-content-center">
        <Col lg="6" md="8" className="text-center">
          <div className="h1 text-primary font-weight-bold">Our Vision & Objective</div>

          <div className="h4 my-2 text-white my-4 font-weight-bold">
            Opensource platform to serve as reliable information portal about Covid-19 in Nepal.
          </div>

          <a href="/about/#volunter-with-us" className="btn btn-success px-3">
            Volunteer with us
          </a>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center">
        <Col lg="4" md="8" className="mt-4">
          <div className="bg-bluelight rounded p-4 h-100">
            <div className="font-18">Objective</div>
            <ul className="circle">
              <li>
                Collect reliable data from various trusted sources, so public can stay well informed and leverage that
                data to better manage their fight with this pandemic.
              </li>
              <li>
                Make relevant data easily consumable to get right information quickly, so informed decisions can be made
                during time of panic, should there be one.
              </li>
              <li>
                In future, this could be extended to a public sourced and curated portal for additional real-time
                information on the outbreak.
              </li>
              <li>In future, AI capabilities could be built to provide early warning projections. </li>
            </ul>
          </div>
        </Col>

        <Col lg="4" md="6" className="mt-4">
          <div className="bg-bluelight rounded p-4 h-100">
            <div className="font-18">Our process for collecting data:</div>

            <ul className="circle">
              <li>Goverment released data from various government and it agencies websites and published documents.</li>
              <li>World health Organization (WHO) published data</li>
              <li>Our data team reaching out to hospitals and health clinics to collect data</li>
              <li>Our data team Reaching out to pool of doctors to help with hospital capacity data</li>
              <li>Reaching out to general public to help with data collection</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row className="py-5 mt-5 bg-success justify-content-center" id="volunter-with-us">
        <Col sm="12" className="mb-3">
          <div className="h4 text-center font-weight-bold">Here is how you can help us:</div>
        </Col>

        <Col lg="3" md="5">
          <div className="">
            Access this form:{' '}
            <a href="https://bit.ly/collectnepalhospitaldata" target="_blank" className="text-white">
              https://bit.ly/collectnepalhospitaldata
            </a>
          </div>
          <div className="my-3">If you have reliable information that can help general public then please input</div>
          <div>Reachout to your contact that may have reliable information and ask them for help.</div>
        </Col>

        <Col md="2">
          <div className="text-white">
            <div className="text-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="99.888" viewBox="0 0 100 99.888">
                <g id="Group_636" data-name="Group 636" transform="translate(-57.054 -181.121)">
                  <path
                    id="Path_656"
                    data-name="Path 656"
                    d="M189.141,244.395H163.1c-1.742,0-2.226-.48-2.226-2.207q0-17.784-.018-35.567a2.61,2.61,0,0,1,.989-2.151q12.917-11.239,25.807-22.508c1.289-1.125,1.835-1.119,3.135.016q12.9,11.258,25.807,22.507a2.607,2.607,0,0,1,.967,2.16q-.034,17.731-.014,35.463c0,1.816-.465,2.288-2.254,2.288Q202.215,244.4,189.141,244.395Zm.059-59.337c-8.141,7.115-16.181,14.153-24.243,21.166a1.975,1.975,0,0,0-.775,1.667q.036,16.016.015,32.031v1.063h49.986c.014-.225.031-.363.031-.5q0-16.432-.024-32.863a1.82,1.82,0,0,0-.571-1.2q-7.1-6.271-14.247-12.484C196,190.992,192.634,188.055,189.2,185.058Z"
                    transform="translate(-82.173 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_657"
                    data-name="Path 657"
                    d="M64.728,523.311a8.354,8.354,0,1,1,11.279-.035c.258.164.5.327.746.473A13.07,13.07,0,0,1,83.689,535.5c.016,1.074.021,2.15,0,3.224a1.566,1.566,0,0,1-1.69,1.69q-11.615.02-23.23,0c-.98,0-1.724-.565-1.709-1.443a36.948,36.948,0,0,1,.34-6.511,12.568,12.568,0,0,1,6.62-8.741C64.225,523.6,64.432,523.48,64.728,523.311ZM80.341,537.05c.256-4.622-1.267-8.267-5.375-10.426a9.431,9.431,0,0,0-10.744.974c-3.089,2.364-4.133,5.643-3.817,9.452ZM70.329,512.131a4.994,4.994,0,1,0,5.032,4.938A5.069,5.069,0,0,0,70.329,512.131Z"
                    transform="translate(0 -259.412)"
                    fill="#fff"
                  />
                  <path
                    id="Path_658"
                    data-name="Path 658"
                    d="M416.581,523.271a8.352,8.352,0,1,1,11.287,0c.3.175.578.335.854.5a13.106,13.106,0,0,1,6.842,11.6c.021,1.109.023,2.219,0,3.328a1.564,1.564,0,0,1-1.687,1.693q-11.668.02-23.335,0a1.422,1.422,0,0,1-1.589-1.336c-.051-2.516-.284-5.05.509-7.526C410.577,528.036,412.4,525.866,416.581,523.271ZM412.29,537h19.888c.531-6.486-3.915-11.6-10-11.579C416.167,525.442,411.776,530.549,412.29,537Zm10-24.892a4.994,4.994,0,1,0,4.943,5.027A5.081,5.081,0,0,0,422.292,512.111Z"
                    transform="translate(-278.525 -259.394)"
                    fill="#fff"
                  />
                  <path
                    id="Path_659"
                    data-name="Path 659"
                    d="M229.1,553.079H212.421c0,1.064.013,2.091,0,3.118a1.659,1.659,0,0,1-2.635,1.542q-4.082-2.389-8.112-4.866a1.649,1.649,0,0,1,.027-3.009q3.99-2.442,8.024-4.812a1.672,1.672,0,0,1,2.7,1.544c.014,1,0,2,0,3.058h6.647v-16.5h3.345v16.514H229.1c0-1.024-.011-2.048,0-3.072a1.671,1.671,0,0,1,2.7-1.542q4.034,2.369,8.024,4.81a1.651,1.651,0,0,1,.024,3.009q-4.031,2.474-8.112,4.867a1.661,1.661,0,0,1-2.633-1.548C229.087,555.192,229.1,554.19,229.1,553.079Zm-20.05-3.713-3.346,2.021,3.346,1.986Zm26.768,2.006-3.3-1.957v3.937Z"
                    transform="translate(-113.727 -278.69)"
                    fill="#fff"
                  />
                  <path
                    id="Path_660"
                    data-name="Path 660"
                    d="M289.38,500.938h3.161v3.229H289.38Z"
                    transform="translate(-183.923 -253.186)"
                    fill="#fff"
                  />
                  <path
                    id="Path_661"
                    data-name="Path 661"
                    d="M232.175,279.814a4.213,4.213,0,0,0,.237,1.488c.348.6,1.26.517,1.855-.041,2.4-2.255,2.474-2.254,4.817.091,1.1,1.1,2.217,2.2,3.311,3.312a1.676,1.676,0,0,1,.016,2.712,9.551,9.551,0,0,0-1.011,1.044,1.842,1.842,0,0,0-.366,1.109c.064.616.5.919,1.172.879a14.051,14.051,0,0,1,1.769.046,1.543,1.543,0,0,1,1.586,1.58q.048,3.379,0,6.758a1.568,1.568,0,0,1-1.649,1.629c-.554.025-1.111.017-1.666,0-.505-.016-.907-.008-1.134.615-.2.562-.239.941.247,1.359a10.629,10.629,0,0,1,1.283,1.361,1.557,1.557,0,0,1-.061,2.252q-2.319,2.389-4.712,4.706a1.635,1.635,0,0,1-2.423-.006,16.563,16.563,0,0,0-1.2-1.149,1.8,1.8,0,0,0-1.113-.344.906.906,0,0,0-.857,1.077,14.023,14.023,0,0,1-.049,1.87,1.553,1.553,0,0,1-1.6,1.567q-3.384.042-6.77,0a1.558,1.558,0,0,1-1.612-1.661c-.022-.554-.024-1.11,0-1.663.022-.52-.037-.891-.641-1.12a1.111,1.111,0,0,0-1.361.273c-2.472,2.333-2.484,2.322-4.878-.065-1.105-1.1-2.221-2.194-3.31-3.313a1.655,1.655,0,0,1-.034-2.637,10.89,10.89,0,0,0,1.08-1.121,1.849,1.849,0,0,0,.323-1.118c-.054-.582-.457-.869-1.094-.833a15.35,15.35,0,0,1-1.769-.044,1.567,1.567,0,0,1-1.648-1.631q-.042-3.379,0-6.758a1.546,1.546,0,0,1,1.586-1.581c.554-.031,1.111-.022,1.666-.006.538.015.971.015,1.214-.657a1.124,1.124,0,0,0-.3-1.353c-2.326-2.454-2.317-2.463.1-4.871,1.08-1.078,2.151-2.166,3.242-3.233a1.732,1.732,0,0,1,2.8.008c.326.311.647.628.957.956.341.361.634.65,1.23.38a1.09,1.09,0,0,0,.787-1.162,16.352,16.352,0,0,1,.052-1.766,1.55,1.55,0,0,1,1.564-1.6q3.436-.049,6.874,0a1.551,1.551,0,0,1,1.55,1.618c.019.346,0,.693,0,1.04Zm6.781,24.972c-1.852-1.484-1.748-3.235-.876-5.221a3.725,3.725,0,0,1,4.107-2.471v-3.321a3.641,3.641,0,0,1-3.986-2.2c-.956-2.034-1.236-3.907.618-5.383l-2.3-2.347c-1.335,1.6-2.946,1.671-4.893.873a3.835,3.835,0,0,1-2.737-4.181h-3.334c.247,2.252-.885,3.421-2.812,4.232a3.843,3.843,0,0,1-4.838-.939l-2.362,2.251a3.671,3.671,0,0,1,1.213,4.365c-.758,2.1-1.878,3.649-4.462,3.324v3.342a3.624,3.624,0,0,1,3.986,2.194c.958,2.03,1.246,3.907-.686,5.439l2.345,2.326c1.361-1.622,2.97-1.7,4.919-.9a3.84,3.84,0,0,1,2.74,4.183h3.325c-.221-2.239.88-3.427,2.818-4.232a3.847,3.847,0,0,1,4.895,1.011Z"
                    transform="translate(-120.206 -76.001)"
                    fill="#fff"
                  />
                  <path
                    id="Path_662"
                    data-name="Path 662"
                    d="M273.62,333.44a8.332,8.332,0,1,1-8.288-8.336A8.284,8.284,0,0,1,273.62,333.44Zm-8.316,4.974a4.993,4.993,0,1,0-5.019-4.951A5.069,5.069,0,0,0,265.3,338.413Z"
                    transform="translate(-158.255 -113.986)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </div>
        </Col>

        <Col lg="3" md="5">
          <div className="my-3">
            If you would like to contribute to this opensource project as an engineer, data analyst, doctor, nurse,
            government officials, media or any other profession please join this effort by emailing
          </div>
          <div className="mt-3">
            <a
              className="btn btn-primary rounded px-3"
              href="mailto:signmeup@covidnepal.org?Subject=Contribution%20for%20covidnepal"
            >
              signmeup@covidnepal.org
            </a>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

export default About;