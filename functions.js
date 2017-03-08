/**
* Removes part of string between two sub strings
* @param {string} text The original string
* @param {string} start The starting string
* @param {string} end The ending string
* @return {string} The string in between
* @throws (Error} If start or end not found
*/
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}
/**
 * Returns an area code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        } else {
            throw new Error("Invalid area code: " + areaCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

function getCOCode(phoneNum) {

    var COCode;

    try {
        COCode = between(phoneNum, ")", "-");
        COCode = COCode.trim();
        if (COCode.length == 3 && Number(COCode)) {
            return COCode;
        } else {
            throw new Error("Invalid CO code: " + COCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

function getLCode(phoneNum) {

    var LCode;

    try {
        LCode = phoneNum.slice(10, 15);
        LCode = LCode.trim();
        if (LCode.length == 4 && Number(LCode)) {
            return LCode;
        } else {
            throw new Error("Invalid L code: " + LCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
