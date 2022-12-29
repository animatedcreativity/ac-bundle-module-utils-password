exports = module.exports = exports = module.exports = function() {
  var mod = {
    test: function(password, level) {
      if (typeof level === "undefined") level = "medium";
      return mod[level]().test(password);
    },
    medium: function() {
      return new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    },
    strong: function() {
      return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    }
  };
  return mod;
};