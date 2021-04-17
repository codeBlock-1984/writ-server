
class Setting {
  static get(name) {
    return process.env[name];
  }
}

export default Setting;
