# distribute-proportion-bar-chart
Horizontal bar chart of distribution proportion of different types

## Screenshots
![demoPicture](https://github.com/KevinPFeng/distribute-proportion-bar-chart/blob/master/images/demo.png)

## How To Install
```
$ npm install react-native-distribute-bar-chart
```

## How To Use
```
  import React from 'react';
  import EventTypeDistrCharts from 'react-native-distribute-bar-chart';
  
  const ScrubbingStat = (props) => {
    const data = [
      {name: 'UDP Flood', value: 70},
      {name: 'ACK Flood', value: 55},
      {name: 'SYN Flood', value: 42},
      {name: 'ICMP Flood', value: 19},
      {name: 'others', value: 15},
      {name: 'Connection Flood', value: 6}
    ];
    
    return (
      <>
        <EventTypeDistrCharts data={data} />
      </>
    );
  };
```
