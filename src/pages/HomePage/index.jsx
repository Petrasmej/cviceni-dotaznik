import { Question } from '../../components/Question';
import React from 'react';
import './style.css';
import { useState } from 'react';

export const HomePage = () => {
  return (
    <div className="container">
      <Question text="Kdo jinému jámu kopá, sám do ní padá." />
    </div>
  );
};
