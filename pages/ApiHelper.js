import React, { Component, useState, useEffect } from 'react';

function getDefault(){
  const defaultHeaders = {
    'Accept': 'application/json',
  'Content-Type': 'application/json'
  };
  return(defaultHeaders);
}

const ApiHelper = {

  // apii: function(endpoint,body,method, customHeaders={}){
  api: function(endpoint,body,method,query_parameter){
  const url= `${process.env.API_KEY}/api/v1/${endpoint}${query_parameter}`;
  console.log(url);

  fetch(url, {
    method,
    headers: {
      ...getDefault()
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