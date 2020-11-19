import React from 'react'
import './eventlist.css';
const eventsobj={
    name:'game3',
    contest_date:'12-9-16',
    details:'third contest on webstite'
};

export const Todayevent = () => {
    return (
        <div className="eventlist">
            <div className="eventbox">
                <div className="event-item">
                        {eventsobj.name}
                        {eventsobj.date}
                        {eventsobj.details}
                </div>
                <div className="event-itemlink">
                    Play
                </div>
            </div>
        <div className="eventbox">
        <div className="event-item">
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
        </div>
        <div className="event-itemlink">
            Play
        </div>
        </div>
        <div className="eventbox">
        <div className="event-item">
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
        </div>
        <div className="event-itemlink">
            Play
        </div>
        </div>
        <div className="eventbox">
        <div className="event-item">
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
        </div>
        <div className="event-itemlink">
            Play
        </div>
        </div>
        <div className="eventbox">
        <div className="event-item">
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
        </div>
        <div className="event-itemlink">
            Play
        </div>
        </div>
        <div className="eventbox">
        <div className="event-item">
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
        </div>
        <div className="event-itemlink">
            Play
        </div>
        </div>
        <div className="eventbox">
        <div className="event-item">
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
        </div>
        <div className="event-itemlink">
            Play
        </div>
        </div>
        
        </div>

  )

}

