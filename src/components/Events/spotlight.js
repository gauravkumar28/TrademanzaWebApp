import React from 'react';

const eventsobj={ 
    name:'game1',
contest_date:'12-10-13',
details:'first contest on webstite'

};

export const Spotlight = () => {
    return (
        <div>
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
        </div>

  )

}

