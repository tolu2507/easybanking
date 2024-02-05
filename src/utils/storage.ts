import RNSInfo from 'react-native-sensitive-info';

class encrypted {
  private options = {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  };
  private keys: string[] = [];
  constructor() {}

  async deleteItems(key: string) {
    return await RNSInfo.deleteItem(key, this.options);
  }
  async deleteAllKeys() {
    for (const iterator of this.keys) {
      await this.deleteItems(iterator);
    }
    return true;
  }

  async getAllItems() {
    return await RNSInfo.getAllItems(this.options);
  }

  async getSingleItem(key: string) {
    return await RNSInfo.getItem(key, this.options);
  }

  async setItems(key: string, value: string) {
    if (!this.keys.includes(key)) {
      this.keys.push(key);
      console.log(`added ${key} to the list of keys: ${this.keys}`);
    }
    return await RNSInfo.setItem(key, value, this.options);
  }
}

const encryptedDetails = new encrypted();

export default encryptedDetails;
