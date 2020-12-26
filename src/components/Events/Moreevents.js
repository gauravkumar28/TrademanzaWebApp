import React from 'react'

const eventsobj={
    name:'game4',
    contest_date:'31-01-20',
    details:'fourth contest on webstite',
};

export const Moreevents = () => {
    return (
        <div>
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
        </div>

  )

}

