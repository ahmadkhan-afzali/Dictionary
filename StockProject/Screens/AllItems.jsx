import {StyleSheet, Text, View,FlatList} from 'react-native';

const AllItems = ({data}) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTxt}>Items</Text>
        <Text style={styles.headingTxt}>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtrotor={(item) => item.id}
        renderItem={({item}) => (
          <View style={[styles.itemConatiner,{backgroundColor: item.stock <20 ? "red" : "green"}]}>
            <Text style={styles.itemTxt}>{item.name}</Text>
            <Text style={styles.itemTxt}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{gap:10}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: '500',
  },
  itemConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderRadius:10,
    height:40,
    paddingVertical:10,
  },
  itemTxt: {
    fontSize: 15,
    fontWeight: '400',
  },
});
