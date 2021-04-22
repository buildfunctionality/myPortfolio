import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import codingPerson from "../../assets/lottie/codingPerson";

export default function Talks() {
    return (
        <> 
        
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">Distillery-Argentina</h3>
                <h4 className="vertical-timeline-element-subtitle">Software developer </h4>
                <p>
                Software Developer 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                             
                date="2020 - 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">Overactive-Uruguay</h3>
                <h4 className="vertical-timeline-element-subtitle">Software developer </h4>
                <p>
                Software Developer, Architecture Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">Hexacta - Argentina </h3>
                <h4 className="vertical-timeline-element-subtitle">Software Developer for credit card bank of USA </h4>
                <p>
                Net Developer, React js, React Native 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017 - 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">Globant-Argentina</h3>
                <h4 className="vertical-timeline-element-subtitle">Software developer for AON </h4>
                <p>
                 Net Developer, Angular js, Jenkins
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2015 - 2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">Digital-Blend Argentina</h3>
                <h4 className="vertical-timeline-element-subtitle">Content media for SMS Carrier-Billing process </h4>
                <p>
                 Net Developer and Techical Leader
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2013 - 2015"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">Globant-Argentina</h3>
                <h4 className="vertical-timeline-element-subtitle">Naranja Online</h4>
                <p>
                Net Developer-Angular Js, MVC 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2011 - 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">VATES-Argentina</h3>
                <h4 className="vertical-timeline-element-subtitle">Naranja Online/Intel</h4>
                <p>
                 Net Developer, MVC, Razor
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2009-2011"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">INTERTRON</h3>
                <h4 className="vertical-timeline-element-subtitle">CNE / NARANJA </h4>
                <p>
                Software developer .NET 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="May 2007-2009"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">Prominente</h3>
                <h4 className="vertical-timeline-element-subtitle">Internal Proyects </h4>
                <p>
                Software Intern  
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2008"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<codingPerson />}
            >
                <h3 className="vertical-timeline-element-title">Universidad Tecnologica Nacional</h3>
                <h4 className="vertical-timeline-element-subtitle">System Analysis</h4>
                <p>
                 Student 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<codingPerson />}
            />
            </VerticalTimeline>
        </>
    )
}
