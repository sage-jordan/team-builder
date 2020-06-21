import React from 'react';


const TeamMember = props => {
    
    return (
        <div>
        {props.memberList.map((member) => {
            return (
                <div className="teamMember" key={member.id}>
                    <h1>{member.name}</h1>
                    <h2>{member.role}</h2>
                    <h3>{member.email}</h3>
                </div>
            )
        })}
        </div>
    )
}

export default TeamMember;
