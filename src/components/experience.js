import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Experience = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="experience-container">
          <Fade bottom cascade>
            <h1>experience
            </h1>
            <h2>what I'm currently up to!</h2>
          </Fade>
          {/* <p>{data.promotionPara}</p> */}
        <Timeline className="work_tl" lineColor={'#ddd'}>
          <TimelineItem
            key="001"
            dateText="MAY 2021 - present"
            style={{ color: 'rgb(255, 145, 0)' }}
            dateInnerStyle={{ background: 'rgb(255, 145, 0)' }}
          >
            <h3>Software Engineer Intern</h3>
            <h4> <span role="img" aria-label="Emoji">📍</span> KeepTruckin |<i> San Francisco, CA</i></h4>
            <p>
            Currently on my first co-op, I’m at KeepTruckin as a software engineer intern. In the next four months, I’ll be working with the engineering team to develop cloud-based fleet management technologies, and daydreaming about summer nights in San Francisco (in another term, hopefully…). 
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="APR 2021 - present"
            dateInnerStyle={{ background: 'rgb(255, 187, 0)' }}
          >
            <h3>Logistics Coordinator</h3>
            <h4><span role="img" aria-label="Emoji">📍</span> TechNova | <i>Waterloo, ON</i></h4>
            <p>
            I’m very excited to be a part of the founding team for TechNova, as we aim to create UWaterloo’s first women+ in tech hackathon, coming virtually near you soon(; As part of logistics, we aim to create an inclusive and empowering event through every activity, every detail, every moment.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="MAY 2020 - present"
            dateInnerStyle={{ background: 'rgb(255, 208, 0)' }}
          >
            <h3>Creative Designer + Web Developer</h3>
            <h4><span role="img" aria-label="Emoji">📍</span> Waterloo Business Review | <i>Waterloo, ON</i></h4>
            <p>
            As part of WBR, I work alongside editors and researchers to publish termly issues of business articles. I help drive visual integration and engagement across a variety of platforms, as well with our <a href="http://waterloobusinessreview.com/">website</a> development. 
            </p>
          </TimelineItem>
      </Timeline>
      </div>
      </div>
    </div>
  )
}

export default Experience
