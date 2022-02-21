// import React,{Component} from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import Table from 'react-bootstrap/Table'
import { stockData } from "./data";


export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                id={data.id}
                name={data.name}
                email={data.email}
                role={data.role}
                empid={data.empid}
                dob={data.dob}
                doj={data.doj}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your Stock Tracker</h2>
    </header>
  );
};

const Stock = ({ id, name, email, role, empid, dob, doj }) => {
//   if (!id) return <div />;
  return (   
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{id}</h5>
          </td>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h4>{email}</h4>
          </td>
          <td>
            <p>{role}</p>
          </td>
          <td>
            <p>{empid}</p>
          </td>
          <td>
            <p>{dob}</p>
          </td>
          <td>
            <p>{doj}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stocks;