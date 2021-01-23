const fs = require('fs');
const colors = require('colors');
const {CLIENT_RENEG_LIMIT} = require('tls');

function read() {
  try {
    const data = fs.readFileSync('output.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    let recentlyAvailable = [];

    lines.forEach((line, index) => {
      if (line.includes('IN STOCK')) {
        let lineSplit = line.split('info');
        // let timeStamp = lineSplit[0].trim().split('[')[1].split(']')[0];
        let timeStamp = lineSplit[0].trim();
        let productSplit = lineSplit[1].trim().split(' ');
        let link = lines[index + 1];

        let listing = {
          store: productSplit[3].substring(1, productSplit[3].length - 1),
          brand: productSplit[4].substring(1).trim(),
          calibur: productSplit[5].substring(1, productSplit[5].length - 2),
          type: productSplit[6],
          timestamp: timeStamp,
          link,
        };

        recentlyAvailable.push(listing);

        // console.log(
        //   listing.timestamp + listing.store + ':',
        //   listing.brand + ' ' + listing.calibur + ' ' + listing.type
        // );
      }
    });

    if (recentlyAvailable.length === 0) {
      let string =
        'Out of ' +
        lines.length.toString() +
        ' Requests, no available Listings Found Yet';
      console.log(string.black.bgRed);
    } else {
      let string =
        'Out of ' +
        lines.length.toString() +
        ' requests, ' +
        recentlyAvailable.length.toString() +
        ' listings found';
      console.log(string.black.bgGreen);
    }

    recentlyAvailable = recentlyAvailable.slice(
      Math.max(recentlyAvailable.length - 5, 1)
    );

    recentlyAvailable.forEach(listing => {
      let string =
        listing.timestamp +
        listing.store +
        ':' +
        listing.brand +
        ' ' +
        listing.calibur +
        ' ' +
        listing.type;
      console.log(string.green);
    });

    // console.log(recentlyAvailable);
  } catch (err) {
    console.error(err);
  }
}

const interval = setInterval(() => {
  console.clear();
  read();
}, 5000);
