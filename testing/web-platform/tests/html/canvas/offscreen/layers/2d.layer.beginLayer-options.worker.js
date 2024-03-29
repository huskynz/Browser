// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.beginLayer-options
// Description:Checks beginLayer works for different option parameter values
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Checks beginLayer works for different option parameter values");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.beginLayer(); ctx.endLayer();
  ctx.beginLayer(null); ctx.endLayer();
  ctx.beginLayer(undefined); ctx.endLayer();
  ctx.beginLayer([]); ctx.endLayer();
  ctx.beginLayer({}); ctx.endLayer();

  assert_throws_js(TypeError, function() { ctx.beginLayer(''); });
  assert_throws_js(TypeError, function() { ctx.beginLayer(0); });
  assert_throws_js(TypeError, function() { ctx.beginLayer(1); });
  assert_throws_js(TypeError, function() { ctx.beginLayer(true); });
  assert_throws_js(TypeError, function() { ctx.beginLayer(false); });

  ctx.beginLayer({filter: null}); ctx.endLayer();
  ctx.beginLayer({filter: undefined}); ctx.endLayer();
  ctx.beginLayer({filter: []}); ctx.endLayer();
  ctx.beginLayer({filter: {}}); ctx.endLayer();
  ctx.beginLayer({filter: {name: "unknown"}}); ctx.endLayer();

  assert_throws_js(TypeError, function() { ctx.beginLayer({filter: ''}); });
  assert_throws_js(TypeError, function() { ctx.beginLayer({filter: 0}); });
  assert_throws_js(TypeError, function() { ctx.beginLayer({filter: 1}); });
  assert_throws_js(TypeError, function() { ctx.beginLayer({filter: true}); });
  assert_throws_js(TypeError, function() { ctx.beginLayer({filter: false}); });
  t.done();
});
done();
