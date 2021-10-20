function User(email) {
  let _email = email;
  let _online = false;
  return {
    login: function () {
      _online = true;
      console.log(_email + " has logged in! ");
    },
    logout: function () {
      _online = false;
      console.log(_email + " has logged out! ");
    },
    status: function () {
      console.log(_email + " is " + _online);
    },
  };
}

function User1(email) {
  this.email = email;
  this.online = false;
  this.login = function () {
    this.online = true;
    console.log(this.email + " has logged in! ");
  };
  this.logout = function () {
    this.online = false;
    console.log(this.email + " has logged out! ");
  };
  this.status = function () {
    console.log(this.email + " is " + this.online);
  };
}

function User2(email) {
  const asd = email;
  this._email = email;
  this._online = false;
  return {
    email: this._email,
    online: false,
    login: function () {
      this.online = true;
      console.log(this.email + " has logged in! ");
      console.log(this._email + " ");
      console.log(asd + "  ");
    },
    logout: function () {
      this.online = false;
      console.log(this.email + " has logged out! ");
    },
    status: function () {
      console.log(this.email + " is " + this.online);
    },
  };
}

var u1 = new User2("sss@b.com", "sb");
var u2 = new User2("zzzz@c.com", "zc");
var u3 = new User1("kkkkkkk@b.com", "kkb");

u3.hoho = function () {
  this.email = "eeeeee";
};

u3.status();
u3.hoho();
u3.status();

// u1.status();
// u1.login();
// u1.status();
// u1.logout();
// u1.status();
