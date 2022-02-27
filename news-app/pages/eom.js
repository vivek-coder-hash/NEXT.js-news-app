//import React from 'react';
import styles from '../styles/EOM.module.css';
import Toolbar from '../components/toolbar.js';
function eom({ employee }) {
  console.log(styles, 'styles');
  console.log(employee, 'employee');
  return (
    <div className="page-container">
      <Toolbar></Toolbar>
      <div className={styles.main}>
        <h1>Employee of the month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image}></img>
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
}

export default eom;

export async function getServerSideProps() {
  const apiResponse = await fetch('http://localhost:4000/employeeOfTheMonth');
  const data = await apiResponse.json();

  return {
    props: { employee: data },
  };
}
