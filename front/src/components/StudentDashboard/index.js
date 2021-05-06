// == Import npm
import React, { useState, useEffect } from 'react';
// bibliothèque pour faciliter les appels AJAX (en utilisant des Promise)
import axios from 'axios';



// == Import
import './styles.css';
import logo from 'src/assets/logos/Logo de O\'coaching - white and red svg v2.svg';
import ThemeInDashboard from './ThemeInDashboard';


//== Import from Semantic UI

import { Header, Progress, Divider, Card, Image } from 'semantic-ui-react'


// == Composant
const StudentDashboard = () => {
  

return(
  <div className="student-dashboard">
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Image src={logo} size='medium' centered />
    <Header className='header-dashboard' as='h1' textAlign='center'> Clique sur un thème et commence à remplir tes missions jeune padawan ! </Header>
    <Divider hidden />
    <Divider hidden />
      <div className="progress-container">
        <Progress className='general-progress-bar' percent={33} indicating progress label="Mettre un message qui évolue selon l'état d'avancement" />
      </div>
    <Divider hidden />
    <Divider hidden />
    <Card.Group centered>
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
      <ThemeInDashboard />
    </Card.Group>
  
  </div>
);}

// == Export
export default StudentDashboard;
