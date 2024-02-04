import auth from '@react-native-firebase/auth';

class auths {
  constructor() {}

  async signIn(email: string, password: string) {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response) {
        console.log(response);
        return response.user;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async signUp(email: string, password: string) {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response) {
        console.log('eigned up successfully', response);
        return response.user;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async updateInfo(details: {displayName: string; photoUrl: string}) {
    let res = {
      displayName: details.displayName,
      photoURL: details.photoUrl,
    };

    let r = await auth().currentUser?.updateProfile(res);
    if (r) {
      console.log('r is this==> ', r);
      return true;
    }
  }
}

const authenthecation = new auths();
export default authenthecation;
