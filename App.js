import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import RazorpayCheckout from 'razorpay-react-native';


const PaymentButton = () => {
    const handlePayment = () => {
        var options = {
            description: 'Purchase Description',
            image: 'https://example.com/your-logo.png',
            currency: 'INR',
            key: 'rzp_test_SZboaAfM0KeK8o',
            amount: '50000',
            name: 'Your App Name',
            prefill: {
                email: 'test@razorpay.com',
                contact: '9999999999',
                name: 'Razorpay Software'
            },
            theme: { color: '#F37254' }
        };

        RazorpayCheckout.open(options).then((data) => {
            // handle success
            Alert.alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            Alert.alert(`Error: ${error.code} | ${error.description}`);
        });
    };

    return ( <
        View >
        <
        Button title = "Pay Now"
        onPress = { handlePayment }
        /> <
        /View>
    );
};

export default function App() {
    return ( <
        View style = { styles.container } >
        <
        PaymentButton / >
        <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});