/**
 * 
 * @param {string} username 
 * @param {string} password 
 * @param {string} role 
 * @param {string} status 
 */

function login(username,password,role = 'admin',status = 'active'){
    console.log(username,password,role,status)

}
login('gopi')
login('gopi','gopi@123')
login( 'gopi','gopi@123','seller','inactive')