class Logger {
  constructor() {
    this.endpoint = 'http://4.224.186.213/evaluation-service/logs';
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async log(stack, level, pkg, message) {
    if (!this.token) return;

    const body = {
      stack: stack,
      level: level,
      package: pkg,
      message: message,
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    };

    try {
      await fetch(this.endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      });
    } catch (error) {
      return null;
    }
  }
}

module.exports = Logger;
