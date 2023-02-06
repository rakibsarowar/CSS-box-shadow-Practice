// For Shadow one -------------------------------------------------------------
const copyDiv = document.querySelector('#shadow-one');
const data = "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;";

copyDiv.addEventListener('click', function() {
  navigator.clipboard.writeText(data).then(function() {
    console.log('Data copied to clipboard');
  }, function(err) {
    console.error('Could not copy data: ', err);
  });
});

// For Shadow two -------------------------------------------------------------
const copyDiv2 = document.querySelector('#shadow-two');
const data1 = "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;";

copyDiv2.addEventListener('click', function() {
  navigator.clipboard.writeText(data1).then(function() {
    console.log('Data copied to clipboard');
  }, function(err) {
    console.error('Could not copy data: ', err);
  });
});

// For Shadow Three -------------------------------------------------------------
const copyDiv3 = document.querySelector('#shadow-three');
const data3 = "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;";

copyDiv3.addEventListener('click', function() {
  navigator.clipboard.writeText(data3).then(function() {
    console.log('Data copied to clipboard');
  }, function(err) {
    console.error('Could not copy data: ', err);
  });
});

// // For Shadow Four -------------------------------------------------------------
const copyDiv4 = document.querySelector('#shadow-four');
const data4 = "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;";

copyDiv4.addEventListener('click', function() {
  navigator.clipboard.writeText(data4).then(function() {
    console.log('Data copied to clipboard');
  }, function(err) {
    console.error('Could not copy data: ', err);
  });
});
