import { uki } from ".\\uki.js";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Uki by Charles Childers

 This is a framework for interfacing Retro and JavaScript.

 Uki is gifted to the public domain. Share freely.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export function words() {
  var words = new uki();
  document.getElementById('tulari').innerHTML = words.eval('words');
}

export function def_foo() {
  var foo = new uki();
  foo.eval(': foo 10000 for 1 . next ;');
}

export function run_foo() {
  var foo = new uki();
  document.getElementById('tulari').innerHTML = foo.eval('foo');
}

export function do_html() {
  var html = new uki();
  html.eval(': html s" <h1>Hello</h1> <p>Hello from Uki</p>" type ; clear');
  document.getElementById('tulari').innerHTML = html.eval('html');
  html.eval('last @ @ last !');
}

export function displayStats() {
  var info = new uki();
  var stats;
  stats  = '<b>Heap: </b>' + info.getHeapPointer() + '<br>';
  stats += '<b>Dict: </b>' + info.getDictPointer() + '<br>';
  stats += '<b>Strings: </b>' + info.getStrTablePointer() + '<br>';
  document.getElementById('tulari').innerHTML = stats;
}

export function stack() {
  var stack = new uki();
  stack.eval('1 2 + 3 *');
  document.getElementById('tulari').innerHTML = stack.tos;
}
