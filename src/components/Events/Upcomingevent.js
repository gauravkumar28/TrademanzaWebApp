import React from 'react'

const eventsobj={
    name:'game2',
    contest_date:'1-8-13',
    details:'second contest on webstite'
};

export const Upcomingevent = () => {
    return (
        <div>
                {eventsobj.name}
                {eventsobj.date}
                {eventsobj.details}
                
        </div>

  )

}

