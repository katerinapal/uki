/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Uki by Charles Childers

 This is a framework for interfacing Retro and JavaScript.

 Uki is gifted to the public domain. Share freely.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function words()
{
  var words = new uki();
  document.getElementById('tulari').innerHTML = words.eval('words');
}

function def_foo()
{
  var foo = new uki();
  foo.eval(': foo 10000 for 1 . next ;');
}

function run_foo()
{
  var foo = new uki();
  document.getElementById('tulari').innerHTML = foo.eval('foo');
}

function do_html()
{
  var html = new uki();
  html.eval(': html s" <h1>Hello</h1> <p>Hello from Uki</p>" type ; clear');
  document.getElementById('tulari').innerHTML = html.eval('html');
  html.eval('last @ @ last !');
}
