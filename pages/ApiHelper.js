import React, { Component, useState, useEffect } from 'react';
import qs from 'query-string';

function getDefaultHeaders(){
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  return(defaultHeaders);
}

export default function(endpoint, body = {}, query_parameter = {}, method = "GET", headers={}){
  let url = `${process.env.API_KEY}/api/v1${endpoint}`;

  if(method=="GET" && Object.keys(query_parameter).length > 0) {
    url= `${url}?${qs.stringify(query_parameter)}`;
  } 
  
  return fetch(url, {
    method,
    headers: {
      ...getDefaultHeaders(),
      ...headers
    },
    body
  })
  .then((response)=> response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    throw error;
  });
}