import React, { useState } from 'react';

const MemberForm = props => {

    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = e => {
        setMember({...member, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name Here"
                value={member.name}
                onChange={changeHandler}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={member.email}
                onChange={changeHandler}
            />
            <label htmlFor="role">Role</label>
            <input
                id="role"
                type="text"
                name="role"
                placeholder= "Example: Frontend Engineer"
                value={member.role}
                onChange={changeHandler}
            />
            <button type="submit">Add Member</button>
        </form>
    )
}
export default MemberForm;