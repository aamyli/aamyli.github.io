import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>experience</h1>
          </Fade>
          {/* <p>{data.promotionPara}</p> */}
        </div>
        <Timeline className="work_tl" lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="APR 2021 - present"
            style={{ color: '#e86971' }}
          >
            <h3>Software Engineer Intern</h3>
            <h4>KeepTruckin, San Francisco</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="APR 2021 - present"
            dateInnerStyle={{ background: '#76bb7f' }}
          >
            <h3>Logistics Coordinator</h3>
            <h4>TechNova, Waterloo</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="MAY 2020 - present"
            dateInnerStyle={{ background: '#76bb7f' }}
          >
            <h3>Creative Designer + Web Developer</h3>
            <h4>Waterloo Business Review, Waterloo</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </TimelineItem>
      </Timeline>
      </div>
    </div>
  )
}

export default Promotion
