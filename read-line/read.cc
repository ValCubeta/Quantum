#include <iostream>
#include <node.h>

namespace Read {
	using namespace std;
	using namespace v8;
	void read(const FunctionCallbackInfo<Value> &args) {
		Isolate* isolate = args.GetIsolate();
		Local<Context> context = isolate -> GetCurrentContext();

		string line;
		getline(cin, line);

		const char* chars = line.c_str();
		auto result = String::NewFromUtf8(isolate, chars).ToLocalChecked();
		args.GetReturnValue().Set(result);
	}

	void Initialize(Local<Object> exports) {
		NODE_SET_METHOD(exports, "read", read);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}