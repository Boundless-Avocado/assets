// Test CREATE group (works in commit 50f555a)
$.post('http://localhost:8080/api/groups/', {'name': 'test'}, function(data, status, jqXHR) {console.log('data: ', data); console.log('status: ', status); console.dir('jqXHR: ', jqXHR); console.log()})


// Test CREATE user (works in commit 3a93e73)
$.post('http://localhost:8080/api/users/', {'username': 'a'}, function(data, status, jqXHR) {console.log('data: ', data); console.log('status: ', status); console.dir('jqXHR: ', jqXHR); console.log()})


// Test JOIN group (works in commit d39ff80)
$.post('http://localhost:8080/api/groups/jSON2', {'username': 'e'}, function(data, status, jqXHR) {console.log('data: ', data); console.log('status: ', status); console.dir('jqXHR: ', jqXHR); console.log()})


// Test PING group (works in commit d2680ea)
$.post('http://localhost:8080/api/groups/jSON3/pings', {'userId': '2'}, function(data, status, jqXHR) {console.log('data: ', data); console.log('status: ', status); console.dir('jqXHR: ', jqXHR); console.log()})

// Test PING group by sending username
$.post('http://localhost:8080/api/groups/m0ar/pings', {'username': 'david'}, function(data, status, jqXHR) {console.log('data: ', data); console.log('status: ', status); console.dir('jqXHR: ', jqXHR); console.log()})



// // TESTS:

// exports.groupBuilder({name: 'frisbee2'});
// exports.groupBuilder({name: 'frisbee3'});
// exports.groupBuilder({name: 'frisbee4'});
// exports.groupBuilder({name: 'frisbee5'});

// exports.userBuilder({username: 'mikey'});
// exports.userBuilder({username: 'michael'});
// exports.userBuilder({username: 'michelangelo'});

// exports.addToGroup('frisbee4','michael');
