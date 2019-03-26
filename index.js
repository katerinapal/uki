var attributes = document.getElementsByTagName('body');
for(var i = 0; i < attributes.length; i++) {
attributes[i].onload = function() {
	uki_start();
}
}
document.getElementById('List all words').onclick = function() {
	words();
}
document.getElementById(': foo 10000 for 1 . next ;').onclick = function() {
	def_foo();
}
document.getElementById('foo').onclick = function() {
	run_foo();
}
document.getElementById('HTML output').onclick = function() {
	do_html();
}
document.getElementById('Image Information').onclick = function() {
	displayStats();
}
document.getElementById('Stack Access').onclick = function() {
	stack();
}
