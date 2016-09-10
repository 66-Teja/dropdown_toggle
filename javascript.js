var para = $('p');
var button = $('button');
var dropdown = $('.dropdown');
var ul = dropdown.find('ul');
var a = dropdown.find('a');

para.css({
  backgroundColor: 'tomato',
  color: 'white',
  padding: '20px'
}).text('Click & Toggle ');

button.on('click', function() {
  para.addClass('bold-big');
});

a.on('click', function(e) {
  e.preventDefault();
  ul.toggleClass('show');
});

var links = [
  'Home',
  'About',
  'Contact'
];

var newLinks = links.map(function(item) {
  var li = $('<li />');
  li.text(item);
  return li;
});

console.log(links);
console.log(newLinks);
ul.prepend(newLinks);
