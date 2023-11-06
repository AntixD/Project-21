import { View, Modal, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../../components/button/Button';
import { Typography } from '../../../../components/typography/typography';

interface ProfileModalProps {
  isVisible: boolean;
  onClose: () => void;
  username: string;
  iconUri: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isVisible, onClose, username, iconUri }) => {
  const navigation = useNavigation();

  return (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalView}>
              <Image source={{ uri: iconUri }} style={styles.icon} />
              <Typography variant="titleMedium" style={styles.username}>{username}</Typography>
              <Button
                variant="signIn"
                label="Logout"
                onPress={() => {
                  onClose();
                  navigation.navigate("Login");
                }}
                textColor="black"
                typographyVariant="btnStyleVariant"
                style={styles.logoutButton}
              />
              <Button
                variant="social"
                label="Privacy Policy"
                onPress={() => { /* handle privacy policy navigation */ }}
                textColor="black"
                typographyVariant="titleSmall"
                style={styles.privacyButton}
              />
              <Typography variant="description" style={styles.version}>App Version: Demo</Typography>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: "5%"
  },
  modalView: {
    width: "100%",
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 20,
  },
  username: {
    marginBottom: 20,
  },
  logoutButton: {
    marginBottom: 10,
    backgroundColor: '#D9D9D9',
  },
  privacyButton: {
    marginBottom: 20,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  version: {
    fontSize: 14,
    color: '#000',
  },
});

export default ProfileModal;