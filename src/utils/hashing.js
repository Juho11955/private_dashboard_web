import sha256 from "sha256";

function hashing(pwd, salt) {  
    return sha256(pwd + salt);
}

export default hashing;