import React, { Component, useState, useEffect } from 'react';

function getDefaultHeaders(){
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  return(defaultHeaders);
}

const ApiHelper = {

  // api: function(endpoint,body,method, customHeaders={}){

  api: function(endpoint,body,method,query_parameter){

    const url= `${process.env.API_KEY}/api/v1/${endpoint}${query_parameter}`;

    fetch(url, {
      method,
      headers: {
        ...getDefaultHeaders()
        //...customHeaders()
      },
      body
    })
    .then((response)=> response.json())
    .then((responseJson) => {
      console.log(responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

export default ApiHelper;