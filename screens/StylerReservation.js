import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';

import Layout from './layout';
import TodayReservation from './TodayReservation';

const today = new Date().toISOString().split('T')[0];

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const StylerReservation = () => {
    const [items, setItems] = React.useState({});

    const loadItems = (day) => {

      console.log('loadItems', day);
      let i = 0;
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = timeToString(time);
      console.log('strTime', strTime)

      const newItems = {};
      newItems[strTime] = [];
      newItems[strTime].push({
        name: 'Item',
        day: strTime,
        target: () => <TodayReservation datetime={new Date(strTime)}>{console.log('rendered')}</TodayReservation>
      });

      setItems(newItems);
    }

    const renderItem = (day, item) => {
        return (
          <>
          {console.log('renderItems')}
            {item.target()}
          </>
        );
    }

    return (
      <Layout title="Styler Reservation">
        <View style={styles.container}>
          <Agenda
            theme={{
              agendaTodayColor: "#a50034", // today in list
              textDefaultColor: "#a50034",
              selectedDayBackgroundColor: "#a50034", // calendar sel date
              dotColor: "#a50034", // dots
              'stylesheet.calendar.header': {
                dayTextAtIndex0: {
                  color: 'red'
                },
                dayTextAtIndex6: {
                  color: 'blue'
                }
              }
            }}
            items={items}
            loadItemsForMonth={loadItems}
            selected={today}
            refreshContrrol={null}
            showClosingKnob={true}
            refreshing={false}
            renderDay={renderItem}
            showOnlySelectedDayItems={true}
            style={{}}
          />
        </View>
      </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
});

export default StylerReservation;