#include <iostream>
#include <node.h>

namespace read {
	using namespace std;
	using namespace v8;
	void read(const FunctionCallbackInfo<Value> &args) {
		// Get the line
		string line;
		getline(cin, line);
		// Convert to chars
		const char* chars = line.c_str();
		// Convert to JS string
		auto result = String::NewFromUtf8(args.GetIsolate(), chars).ToLocalChecked();
		// Return the line
		args.GetReturnValue().Set(result);
	}

	void Initialize(Local<Object> exports) {
		NODE_SET_METHOD(exports, "read", read);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}