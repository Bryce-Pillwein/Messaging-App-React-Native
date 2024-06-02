/**
 * Global Style Sheet GSS
 */

import { StyleSheet } from 'react-native';

const gss = StyleSheet.create({
    // Padding
    padBlk10: { marginVertical: 5, },

    // Font Size
    fs12: { fontSize: 12 }, fs14: { fontSize: 14 }, fs16: { fontSize: 16 }, fs18: { fontSize: 18 },
    fs20: { fontSize: 20 }, fs24: { fontSize: 24 }, fs26: { fontSize: 26 }, fs28: { fontSize: 28 },
    fs30: { fontSize: 30 },

    // Font Family
    // ffCallingCode: { fontFamily: 'CallingCode' },

    // Colors
    cpink: { color: '#FF3EB5' },
    cyellow: { color: '#FFE900' },
    cl30: { color: 'hsl(0 0% 30%)' }, cl40: { color: 'hsl(0 0% 40%)' }, cl50: { color: 'hsl(0 0% 50%)' },
    cl60: { color: 'hsl(0 0% 60%)' }, cl70: { color: 'hsl(0 0% 70%)' }, cl80: { color: 'hsl(0 0% 80%)' },
    cl90: { color: 'hsl(0 0% 90%)' },

    // Background Colors
    bgpink: { color: '#FF3EB5' },
    bgyellow: { color: '#FFE900' },
    cbg: { backgroundColor: 'hsl(0, 0%, 10%)' },
    cbg15: { backgroundColor: 'hsl(0, 0%, 15%)' },
    cbg20: { backgroundColor: 'hsl(0, 0%, 20%)' },
    cbg25: { backgroundColor: 'hsl(0, 0%, 25%)' },
    cbg30: { backgroundColor: 'hsl(0, 0%, 30%)' },


    /**
     * UI Components
     */

    // Container
    containerMain: {
        flex: 1,
        backgroundColor: 'hsl(0, 0%, 80%)',
    },
    // Wrapper
    wrapperMain: {
        flex: 1,
        width: '95%',
    },
    // Align Center
    alCnt: {
        alignItems: 'center',
    },
    alCntTxt: {
        textAlign: 'center',
    },
    // Button
    btnDefault: {
        borderWidth: 1,
        borderColor: 'rgb(100, 100, 100)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    // Divider LIne
    divider: {
        borderBottomWidth: 1,
        borderColor: '#646464',
        marginVertical: 40,
    },

    // Flex Designs
    flexColumnCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexRowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexRowEven: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default gss;
