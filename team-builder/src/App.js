import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TeamMember from './TeamMember';
import MemberForm from './MemberForm';
// import { notStrictEqual } from 'assert';


function App() {

  const [members, setMembers] = useState([]);
  const addNewMember = member => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <MemberForm addNewMember={addNewMember} />
      <TeamMember memberList={members} />
    </div>
  );
}

export default App;
