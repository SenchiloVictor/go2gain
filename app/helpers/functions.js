const makeid = length => {
    const result = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    while (result.length < length) {
      result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
   }

   return result.join('');
}

module.exports = {

    makeid
}