import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Input() {
  const { roleId } = useParams();
  localStorage.setItem('role', roleId);

  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      Please enter your Playername.
      <input
        type="text"
        placeholder="Spielername"
        onChange={handleChange}
        value={name}
      />
      <Link to={`/player/${name}`}>
        <button type="button">GO!</button>
      </Link>
    </div>
  );
}
