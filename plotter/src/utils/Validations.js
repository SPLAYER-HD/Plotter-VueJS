class Validation {
  validateCommandsFormat(textarea) {
    let reg = /c[ ]\d+[ ]\d+[ ]\d+|p+.+|r[ ]\d+[ ]\d+[ ]\d+[ ]\d+/g;

    this.plotter = textarea.value.match(reg);
    var msg_list = textarea.value.split("\n");
    var msg;
    var warning_msg = "";
    var cursorPosition = textarea.selectionStart;
    var position = textarea.value.substr(0, cursorPosition).split("\n");
    for (msg in msg_list) {
      //alert("alert   "+textarea.value);
      if (Number(msg) + 1 != position.length) {
        var validate = msg_list[msg].match(reg);
        //alert(validate)
        if (
          validate == null &&
          Number(msg) + 1 != position.length &&
          msg_list[msg].trim() != ""
        ) {
          warning_msg += "\n There is a error in line " + (Number(msg) + 1);
        }
      }
    }
    if (warning_msg.length > 0) {
      warning_msg +=
        "\n Remember, the pattern is: \n r <X Coordinate> <Y Coordinate> <Width> <Height> \nc <CX Coordinate> <CY Coordinate> <Radius> \np <X1,Y1> <X2,Y2> <X3,Y3> ..... <Xn,Yn>";
    }
    return warning_msg;
  }
}

export default Validation;
