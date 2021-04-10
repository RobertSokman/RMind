import {StyleSheet, ImageBackground, Dimensions} from 'react-native'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const deepSquidInk = '#152939'
export const linkUnderlayColor = '#FFF'
export const errorIconColor = '#30d0fe'

const AmplifyTheme = StyleSheet.create({
    
  container: {
    marginTop: windowHeight/3.5,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    width: '100%',
    //backgroundColor: 'lightgray',
  },
  errorIcon: {
      color: 'white',
  }
  ,
  section: {
    flex: 1,
    width: '100%',
    padding: 30,
  },
  sectionHeader: {
    width: '100%',
    marginBottom: 32,
  },
  sectionHeaderText: {   ///header text
    color: deepSquidInk,
    fontSize: 20,
    fontWeight: '500',
  },
 /* sectionFooter: {  //this is the footer where sign up button is
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: 'red'
  },*/
  sectionFooterLink: {
    fontSize: 14,
    color: '#30d0fe',
    alignItems: 'baseline',
    textAlign: 'center',
  },
  navBar: {
    marginTop: 35,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navButton: {
    marginLeft: 12,
    borderRadius: 4,
  },
  cell: { //signup/forgot password fields are in there
    flex: 1,
    width: '50%',
    
  },
  errorRow: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  errorRowText: { //for Username cannot be emty text
    marginLeft: 0,
    color: 'red',
  },
  photo: {
    width: '100%',
  },
  album: {
    width: '100%',
  },
  button: {   ////this is for sign in
    backgroundColor: '#30d0fe',
    alignItems: 'center',
    padding: 16,
  },
  buttonDisabled: {
    backgroundColor: '#85E4FF',
    alignItems: 'center',
    padding: 16,
  },
  buttonText: { ///sign in button text
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  formField: {  ///for input fields
    marginBottom: 22,
  },
  input: { //for input fields boxes
    padding: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C4C4C4',
  },
  inputLabel: {  // for input field texts
    marginBottom: 8,
  },
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneInput: {
    flex: 2,
    padding: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C4C4C4',
  },
  picker: {
    flex: 1,
    height: 44,
  },
  pickerItem: {
    height: 44,
  },
})

export {AmplifyTheme}