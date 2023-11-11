import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemContainer2: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    overflow: 'hidden',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    flexGrow: 1,
  },
  viewButton: {
    borderBlockColor: '#cbd5e0',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
    width: '35%',
  },
  cancelButton: {
    borderBlockColor: '#cbd5e0',
    width: '35%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10,
  },
});
