import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    emptyListView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    emptyListIcon: {
        fontSize: 124
    },
    emptyText: {
        fontSize: 24
    },
    swipeRowBody: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    swipeRowTitleRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    swipeRowIcon: {
        paddingLeft: 15,
        paddingRight: 15
    },
    swipeRowTitle: {
        fontSize: 18
    }
});

export default styles;