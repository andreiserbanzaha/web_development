import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    if (true) {
        throw new Error("Fuck! This shouldn't have had happened!");
    }

    // return component with cards array
    return (
        <div>
            {robots.map((user, index) => {
                return (
                    <Card
                        key={index}
                        id={robots[index].id}
                        name={robots[index].name}
                        email={robots[index].email} />
                )
            })}
        </div>
    );
}

export default CardList;