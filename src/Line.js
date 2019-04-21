import React, { Component }  from 'react';

export const Line = ({ color, opacity, width }) => (
    <hr
        style={{
            width: width ? width : '97%',
            color: color,
            backgroundColor: color,
            height: '3px',
            border: 'none', 
            opacity: opacity,
        }}
    />
  );