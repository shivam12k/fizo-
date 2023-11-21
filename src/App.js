import CustomNavbar from "./components/CustomNavbar"; // Adjust the relative path as necessary
import Section from "./components/Section";
import "./App.css";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import ExerciseSection from "./components/ExerciseSection";
import React, { useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import io from 'socket.io-client';


function App() {
  useEffect(() => {
    const socket = socketIOClient('http://192.168.1.45:1204'); // Replace with your server address
   
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('dataFromServer', (data) => {
      // Handle received data from server
      console.log('Received data from server:', data);
      // Update state or perform actions with the received data
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect(); // Disconnect socket when component unmounts
    };
  }, []);
  return (
    <div>
      <CustomNavbar />
      <Section />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ExerciseSection />
     
    </div>
  );
}

export default App;
