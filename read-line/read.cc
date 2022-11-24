#include <node.h>
#include <iostream>

namespace read {
	void read(const v8::FunctionCallbackInfo<v8::Value> &args) {
		v8::Isolate* isolate = args.GetIsolate();
		v8::Local<v8::Context> context = isolate -> GetCurrentContext();

		std::string line;
		std::getline(std::cin, line);

		const char* chars = line.c_str();
		auto result = v8::String::NewFromUtf8(isolate, chars).ToLocalChecked();
		args.GetReturnValue().Set(result);
	}

	void Initialize(v8::Local<v8::Object> exports) {
		NODE_SET_METHOD(exports, "read", read);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}