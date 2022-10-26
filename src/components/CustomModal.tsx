import React from 'react';

import {Modal, Text, View, StyleSheet, ActivityIndicator} from 'react-native';

type ModalObject = {
  loadingIndicator: boolean;
  text: string;
  visible: boolean;
};
const CustomModal = ({loadingIndicator, text, visible}: ModalObject) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.modalContainer}>
          {loadingIndicator ? (
            <ActivityIndicator animating={true} color="#0000cd" size={15} />
          ) : null}
          <Text style={styles.title}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000000',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(191, 191, 191, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: 300,
    height: 80,
    borderRadius: 30,
    elevation: 10,
  },
});
export default CustomModal;
