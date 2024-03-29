// |jit-test| skip-if: !getBuildConfiguration("decorators")

load(libdir + "asserts.js");

Reflect.parse("class c {@dec1 field = false;}");
Reflect.parse("class c {@dec1 @dec2 @dec3 field = false;}");
Reflect.parse("class c {@dec1 @dec2 @dec3('a') static field = false;}");
Reflect.parse("class c {@dec1 method() {};}");
Reflect.parse("class c {@dec1 @dec2 @dec3 method() {};}");
Reflect.parse("class c {@dec1 @dec2 @dec3 static method() {};}");
Reflect.parse("class c {@dec1 @dec2('a') @dec3 method(...args) {};}");
Reflect.parse("class c {@((a, b, c) => {}) method(a, b) {};}");
Reflect.parse("class c {@((a, b, c) => {}) @dec2('a', 'b') @dec3 method(a, b) {};}");
Reflect.parse("@dec1 class c {}");
Reflect.parse("@dec1 @dec2 @dec3 class c {}");
Reflect.parse("@dec1('a') @(() => {}) @dec3 class c {}");
Reflect.parse("@dec1('a') @(() => {}) @dec3 class c {@((a, b, c) => {}) @dec2('a', 'b') @dec3 method(a, b) {};}");
Reflect.parse("x = @dec class { #x }");
Reflect.parse("x = (class A { }, @dec class { })");
Reflect.parse("@dec1 class A extends @dec2 class B extends @dec3 class {} {} {}");
Reflect.parse("class c {@dec1.dec2.dec3 method() {};}");
Reflect.parse("class c {@dec1 @dec2.dec3.dec4 @dec5 method() {};}");
Reflect.parse("class c {@dec1('a') @dec2.dec3.dec4 @dec5 method() {};}");
Reflect.parse("class c {@dec1('a') @dec2.dec3.dec4('b', 'c') @dec5 method() {};}");
Reflect.parse("class c {@dec1('a') @dec2.dec3.dec4('b', 'c') @dec5.dec6 method() {};}");
Reflect.parse("@dec1.dec2 class c {}");
Reflect.parse("@dec1.dec2 @dec3.dec4 @dec5 class c {}");
Reflect.parse("@dec1.dec2('a') @(() => {}) @dec4 class c {}");
Reflect.parse("@dec1.dec2('a') @(() => {}) @dec4 class c {@((a, b, c) => {}) @dec5.dec6('a', 'b') @dec7 method(a, b) {};}");
Reflect.parse("class c {accessor field = false;}");
Reflect.parse("class c {static accessor field = false;}");
Reflect.parse("class c {@dec1 @dec2 accessor field = false;}");
Reflect.parse("class c {@dec1 @dec2 @dec3 static accessor field = false;}");
Reflect.parse("let accessor = false;");
Reflect.parse("class accessor {accessor = false;}");
Reflect.parse("class c {accessor = false;}");
Reflect.parse("class c {accessor\n= false;}");
Reflect.parse("class c {accessor\nfield = false;}");
Reflect.parse("class C {accessor\n foo() {}}");
Reflect.parse("class c {accessor; }");
Reflect.parse("class c {accessor\nset field(a) {}}");
Reflect.parse("class c {accessor\nasync field(a) {}}");
Reflect.parse("class c {accessor\n* field(a) {}}");
Reflect.parse("{accessor, field(a)}");
Reflect.parse("class c {static accessor x = 1;}");
Reflect.parse("class c {accessor #y = 2;}");
Reflect.parse("class c {static dec1(){}; static {@c.dec1 class d{@c.dec1 field}}}");
Reflect.parse("class c {static #dec1(){}; static {@c.#dec1 class d{@c.#dec1 field}}}");
Reflect.parse("class c {@as field = false;}");
Reflect.parse("class c {@accessor field = false;}");
Reflect.parse("class c {@assert field = false;}");
Reflect.parse("class c {@async field = false;}");
Reflect.parse("class c {@await field = false;}");
Reflect.parse("class c {@each field = false;}");
Reflect.parse("class c {@from field = false;}");
Reflect.parse("class c {@get field = false;}");
Reflect.parse("class c {@meta field = false;}");
Reflect.parse("class c {@of field = false;}");
Reflect.parse("class c {@set field = false;}");
Reflect.parse("class c {@target field = false;}");

assertThrowsInstanceOf(() => Reflect.parse("class c {@ method() {};}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@((a, b, c => {}) method(a, b) {};}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@dec1 static @dec2 method(a, b) {};}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("@dec1 let x = 1"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("@dec1 f(a) {}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("@dec1 () => {}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("@class class { x; }"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("@for class { x; }"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@dec1. method() {};}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("@dec1. class c {method() {};}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("@dec1.(a) class c {method() {};}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {accessor method() {};}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {accessor @dec1 field = false;}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {accessor, }"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("({ accessor field: 10 })"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("({ accessor foo });"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("({ accessor foo = 10 } = {});"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {async accessor foo() {}}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {accessor set field(a) {}}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {accessor *field(a) {}}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {accessor *field(a) {}}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@dec[0] x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@new dec() x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@super x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@super() x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@super.dec() x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@import \"decorator\" x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@dec`template` x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@import.meta.url x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@new.target x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@obj.first?.second x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@class x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@function() x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@{} x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@[] x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@\"string\" x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@`string` x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@/[a-z]+/ x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@true x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@1n x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@this x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@null x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@... x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@let x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@static x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@yield x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@if x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@enum x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@implements x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@foo().bar.prop x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@foo.bar().prop x}"), SyntaxError);
assertThrowsInstanceOf(() => Reflect.parse("class c {@foo.bar().prop() x}"), SyntaxError);
