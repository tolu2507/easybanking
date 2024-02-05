import firestore from '@react-native-firebase/firestore';

export const cardsCollection = firestore().collection('Cards');
export const transactionsCollection = firestore().collection('Transactions');
