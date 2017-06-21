function User(profile) {
	this.name = 'name'; 
	this.address = 'address';
	this.city = 'city';
	this.state = 'state';
	this.zipcode = 'zipcode'; 
	this.avatar = 'avatar' 
}

console.log(User)

function getProfileUpdate(){
	this.name = 'Christian Holdsworth',
	this.address = '110 Verret St',
	this.city = 'New Orleans',
	this.state = 'LA',
	this.zipcode = '70114',
	this.avatar = 'Swiss'
}

var n = new User();

var q = new getProfileUpdate();


Object.assign(n,q);

console.log(n);
