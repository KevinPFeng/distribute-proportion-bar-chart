import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const getItemViewWidthOrigi = () => {
  return windowWidth - 48 - 12;
};

const EventTypeDistrCharts = (props) => {
  const { data } = props;

  let summarizeNum = 0;
  let increPercent = 0;

  const maxNum = data[0].value;
  const maxNumLen = maxNum.toString().length;
  const maxNumWidth = maxNumLen * 7 + 12;

  data.map((item) => {
    summarizeNum = summarizeNum + Number(item.value);
  });

  const maxPercent = maxNum / summarizeNum;
  if (maxPercent < 0.96) {
    /* maxPercent * ( 1 + increPercent ) = 0.96 */
    increPercent = 0.96 / maxPercent - 1;
  }

  const processItemViewWidth = getItemViewWidthOrigi() - maxNumWidth;

  return (
    <View>
      {data.map((item) => (
        <View key={item.name} style={styles.processItem}>
          <View
            style={{
              width: processItemViewWidth,
              ...styles.processItemView
            }}
          >
            <View
              style={{
                width:
                  (item.value / summarizeNum) *
                  (1 + increPercent) *
                  processItemViewWidth,
                ...styles.processItemLength
              }}
            />
            <Text style={styles.processItemName}>{item.name}</Text>
          </View>
          <Text style={styles.processItemValue}>
            {item.value}Times
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  processItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8
  },
  processItemView: {
    height: 20,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 10
  },
  processItemName: {
    height: 20,
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 17,
    color: '#333333',
    paddingLeft: 8,
    position: 'absolute',
    zIndex: 2
  },
  processItemLength: {
    height: '100%',
    backgroundColor: '#68B92E',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 10
  },
  processItemValue: {
    height: 17,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 17,
    color: '#333333',
    marginLeft: 12
  }
});

EventTypeDistrCharts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default EventTypeDistrCharts;
