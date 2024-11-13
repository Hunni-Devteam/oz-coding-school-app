import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';

// Define the state structure with an optional 'items' property
interface State {
  items?: AgendaSchedule;
}

export default class AgendaScreen extends Component<State> {
  state: State = {
    items: undefined // Initialize 'items' as undefined in the state
  };

  // render() method returns the layout of the Agenda component
  render() {
    return (
      <Agenda
        items={this.state.items} // Set items to the state 'items'
        loadItemsForMonth={this.loadItems} // Function to load items for the month
        selected={'2017-05-16'} // Set the default selected date
        renderItem={this.renderItem} // Function to render each item
        renderEmptyDate={this.renderEmptyDate} // Function for rendering an empty date
        rowHasChanged={this.rowHasChanged} // Function to check if rows have changed
        showClosingKnob={true} // Show closing knob (optional)
        // Additional features are commented out but can be used to customize marking, themes, etc.
      />
    );
  }

  // Load items for a given day. Adds random items for the next 85 days.
  loadItems = (day: DateData) => {
    const items = this.state.items || {}; // If items are not loaded yet, initialize as empty object.

    setTimeout(() => {
      // Loop through the days starting from 15 days before to 85 days after the current day
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000; // Calculate timestamp for the day
        const strTime = this.timeToString(time); // Convert timestamp to a string date format

        if (!items[strTime]) {
          items[strTime] = []; // If no items exist for this day, create an empty array

          // Generate a random number of items for this day (1-3)
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j, // Random name for the item
              height: Math.max(50, Math.floor(Math.random() * 150)), // Random height for item (min 50)
              day: strTime // Store the date
            });
          }
        }
      }

      const newItems: AgendaSchedule = {};
      // Create a new items object to ensure proper update in state
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });

      // Update the state with the new items
      this.setState({
        items: newItems
      });
    }, 1000); // Simulate network delay by delaying for 1 second
  };

  // Function to render the day text for the calendar (can be customized)
  renderDay = (day) => {
    if (day) {
      return <Text style={styles.customDay}>{day.getDay()}</Text>; // Display the day of the week
    }
    return <View style={styles.dayItem} />; // If no day is provided, render an empty view
  };

  // Function to render individual items for the agenda
  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14; // If it's the first item, make the font bigger
    const color = isFirst ? 'black' : '#43515c'; // Color changes based on the position of the item

    return (
      <TouchableOpacity
        style={[styles.item, { height: reservation.height }]} // Style for each item with dynamic height
        onPress={() => Alert.alert(reservation.name)} // Show an alert with item name on press
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text> // Display item name with dynamic styles
      </TouchableOpacity>
    );
  };

  // Function to render when a date has no items (empty date)
  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text> {/* Message to display for empty date */}
      </View>
    );
  };

  // Function to check if the row has changed. This helps in determining if re-rendering is necessary.
  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name; // If the names of the two entries are different, the row has changed
  };

  // Convert timestamp to a string format (yyyy-mm-dd)
  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0]; // Extract only the date part (yyyy-mm-dd)
  }
}

// Styles for various components (items, empty date, day view)
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white', // Background color for items
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: 'green'
  },
  dayItem: {
    marginLeft: 34
  }
});