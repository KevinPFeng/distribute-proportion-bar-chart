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
      {name: 'type1', value: 70},
      {name: 'type2', value: 55},
      {name: 'type3', value: 42},
      {name: 'type4', value: 19},
      {name: 'type5', value: 15},
      {name: 'type6', value: 6}
    ];
    
    return (
      <>
        <EventTypeDistrCharts data={data} />
      </>
    );
  };
```
