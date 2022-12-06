import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function FunctionalGetAPIByFetch() {

  const [apiData, setAPIData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/todo").then(
      (response) => {
        response.json().then(response => {
          setAPIData(response);
        })
      })
      .catch(error => {
        console.log(error)
        setError(error)
      })
  }, [])

  return (
    <div style={{ width: "100%", height: "80vh", overflow: "scroll" }}>
      <strong className="heading"> Functional GET API Fetched </strong>
      <table style={{ textAlign: "left" }}>
        <tbody>
          {
            apiData ?
            Object.values(apiData).map((ele, index) => {
              return (
                <tr key={index}>
                  <td> <strong>  User ID : </strong> {ele.userId} </td>
                  <td> <strong> Title : </strong> {ele.title} </td>
                </tr>
              )
            }) : <strong> Loading... </strong>
          }
          {
            error ? <p> Something went wrong </p> : null
          }
        </tbody>
      </table>
    </div>
  )
}

function FunctionalGetAPI() {

  const [apiData, setAPIData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/todo").then(
      response => {
        setAPIData(response.data);
      })
      .catch(error => {
        console.log(error)
        setError(error)
      })
  }, [])

  return (
    <div style={{ width: "100%", height: "80vh", overflow: "scroll" }}>
      <strong className="heading"> Functional GET API Fetched </strong>
      <table style={{ textAlign: "left" }}>
        <tbody>
          {
            apiData ?
            Object.values(apiData).map((ele, index) => {
              return (
                <tr key={index}>
                  <td> <strong>  User ID : </strong> {index + 1} </td>
                  <td> <strong> Title : </strong> {ele.title} </td>
                </tr>
              )
            }) : <strong> Loading... </strong>
          }
          {
            error ? <p> Something went wrong </p> : null
          }
        </tbody>
      </table>
    </div>
  )
}

export default FunctionalGetAPI;

export function FunctionalPostAPI() {

  const apiData = {
    userId:	2,
    title: "Writing Code",
    completed: false
  };
  const [getAPIResponseData, setGetAPIResponseData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    axios.post("http://localhost:3030/todo", apiData)
    .then(
      response => {
        console.log(response.data)
        setGetAPIResponseData(response.data);
    })
    .catch(error => {
      console.log(error)
      setError(error)
    })
  })

  return (
    <div>
      <strong className="heading"> Functional POST API Fetched </strong> <br/>
      {
        getAPIResponseData ?  JSON.stringify(getAPIResponseData) : null
      }
      {
        error ? <p> Something went wrong </p> : null
      }
    </div>
  )
}

export class ClassGetAPI extends React.Component {

  constructor() {
    super()
    this.state = {
      APIData: [],
      Error: ""
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3030/todo")
    .then(response => {
        this.setState({ APIData: response.data });
    })
    .catch(error => {
      this.setState({ Error: error })
      console.log(error)
    })
  }

  render() {
    return (
      <div style={{ width: "100%", height: "80vh", overflow: "scroll" }}>
        <strong className="heading"> Class GET API Fetched </strong>
        <table style={{ textAlign: "left" }}>
          <tbody>
            {
              this.state.APIData ?
              Object.values(this.state.APIData).map((ele, index) => {
                return (
                  <tr key={index}>
                    <td> <strong>  User ID : </strong> {ele.userId} </td>
                    <td> <strong> Title : </strong> {ele.title} </td>
                  </tr>
                )
              }) : <em> Please wait... </em>
            }
            {
              this.state.error ? <em> Something went wrong </em> : null
            }
          </tbody>
        </table>
      </div>
    )
  }
}