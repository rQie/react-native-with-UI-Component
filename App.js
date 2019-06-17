import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StatusBar,
  Switch,
  CheckBox,
  Picker,
  TouchableOpacity
} from "react-native";
import Slider from "@react-native-community/slider";
import RadioForm from "react-native-simple-radio-button";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

export default class UIComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      choosenDate: ''
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false
   });
  };

  handleDatePicked = (datetime) => {
    this.setState({ isDateTimePickerVisible: false,
      choosenDate: moment(datetime).format('MMM, D YYYY HH:mm')
   });
  };


  state = {
    slideValue: 0,
    check: false,
    check2: false,
    choosenLabel: "",
    choosenIndex: ""
  };

  checkBoxTest(name) {
    console.log(name);
    this.setState(prevState => {
      console.log("now value is " + !prevState[name]);
      return {
        [name]: !prevState[name]
      };
    });
  }
  radio_props = [
    { label: "Button 1", value: 0 },
    { label: "Button 2", value: 1 }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>UIComponent</Text>
        <StatusBar
          backgroundColor="lightgray"
          barStyle="dark-content"
          animated={true}
        />

        <TextInput style={styles.textInput} placeholder="Test Type!!!" />

        <View style={styles.btnContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => alert("You Have Pressed This Button")}
          >
            <Text style={styles.buttonText}>GO</Text>
          </TouchableHighlight>
        </View>
        <Text>{this.state.switchValue ? "on" : "off"} </Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={switchValue => this.setState({ switchValue })}
        />
        <Text> one</Text>
        <CheckBox
          value={this.state.check}
          onChange={() => this.checkBoxTest("check")}
          key="One"
        />
        <Text>Two</Text>
        <CheckBox
          value={this.state.check2}
          key="Two"
          onChange={() => this.checkBoxTest("check2")}
        />
        <RadioForm
          radio_props={this.radio_props}
          initial={0}
          onPress={value => {
            this.setState({ value: value });
          }}
        />
        <View style={styles.slider}>
          <Text>{this.state.slideValue}</Text>
          <Slider
            style={{ width: "100%" }}
            step={1}
            maximumValue={20}
            value={this.state.slideValue}
            onValueChange={slideValue => this.setState({ slideValue })}
          />
        </View>
        
        <View>
          <Text style={styles.textDateTimePicker}>
            {this.state.choosenDate}
          </Text>
          <TouchableOpacity style={styles.buttonDateTimePicker}  onPress={this.showDateTimePicker}> 
          <Text style={styles.titleDateTimePicker}>Show Date Picker</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode={'datetime'}
            is24Hour= {true}
            datePickerModeAndroid={'default'}
          />
        </View>

        <Text style={styles.text}>{this.state.choosenLabel}</Text>
        <Text style={styles.text2}>{this.state.choosenIndex}</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.choosenLabel}
          mode={'dropdown'}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              choosenLabel: itemValue,
              choosenIndex: itemIndex
            })
          }
        >
          <Picker.Item label="Hello" value="word1" />
          <Picker.Item label="React" value="word2" />
          <Picker.Item label="Native" value="word3" />
          <Picker.Item label="How" value="word4" />
          <Picker.Item label="are" value="word5" />
          <Picker.Item label="you" value="word6" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    padding: 20
  },
  Title: {
    fontSize: 35,
    alignSelf: "center",
    fontStyle: 'normal',
    marginBottom: 30,
    color: "orange",
    fontWeight: 'normal',
  },
  textInput: {
    height: 45,
    textAlign: "center",
    width: 250,
    borderWidth: 1,
    color: "black",
    borderColor: "blue",
    borderRadius: 1,
    marginBottom: 20
  },
  btnContainer: {
    marginBottom: 20
  },
  buttonText: {
    fontSize: 13,
    color: "black",
    alignSelf: "center"
  },
  button: {
    height: 40,
    backgroundColor: "#2196F3",
    width: 80,
    justifyContent: "center"
  },
  slider: {
    marginBottom: 15,
    flexDirection: "row"
  },
  picker: {
    marginTop: 5,
    width: 115,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  buttonDateTimePicker: {
    width: 250,
    height: 50,
    backgroundColor: '#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 1,
  },
  titleDateTimePicker: {
    fontSize: 18,
    color: 'white',
    textAlign: "center"
  },
  textDateTimePicker: {
    color: 'blue',
    fontSize: 20,
    textAlign: "center"
  }
});
