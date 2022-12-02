#include <iostream>
#include <cstdlib>
#include <time.h>
#include <node.h>

namespace Random {
	using namespace std;
	using namespace v8;

	void main(const FunctionCallbackInfo<Value> &args) {
		int current_time = time(0);
		srand(current_time);
	}

	void use_seed(const FunctionCallbackInfo<Value> &args) {
		Isolate* isolate = args.GetIsolate();
		Local<Context> context = isolate -> GetCurrentContext();

		int seed = args[0].As<Number>() -> Value();
		cout << "Using seed " << seed << endl;
		srand(seed);
	}

	void ranum(const FunctionCallbackInfo<Value> &args) {
		Isolate* isolate = args.GetIsolate();
		Local<Context> context = isolate -> GetCurrentContext();

		if (args.Length() == 0) {
			int number = rand() % 101; // return a number between 0 and 100
			Local<Number> result = Number::New(isolate, number);
			args.GetReturnValue().Set(result);
		}
		if (args.Length() == 2) {
			int min = args[0].As<Number>() -> Value();
			int max = args[1].As<Number>() -> Value();
			int range = max - min + 1;
			int number = rand() % range + min;
			Local<Number> result = Number::New(isolate, number);
			args.GetReturnValue().Set(result);
		}
	}

	void Initialize(Local<Object> exports) {
		NODE_SET_METHOD(exports, "main", main);
		NODE_SET_METHOD(exports, "use_seed", use_seed);
		NODE_SET_METHOD(exports, "ranum", ranum);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}