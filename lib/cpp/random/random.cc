#include <iostream>
#include <cstdlib>
#include <time.h>
#include <node.h>

namespace Random {
	using namespace std;
	using namespace v8;

	int current_seed = time(0);

	void main(const FunctionCallbackInfo<Value> &args) {
		srand(current_seed);
	}

	void use_seed(const FunctionCallbackInfo<Value> &args) {
		// Catch the argument error
		if (args.Length() != 1) {
			cout << "InternalError at random.use_seed: wrong number of arguments" << endl;
			return;
		}
		// Convert the JS number into an int
		int seed = args[0].As<Number>() -> Value();
		// Set the seed
		srand(seed);
	}

	void get_seed(const FunctionCallbackInfo<Value> &args) {
		// Convert the seed into a JS number
		Isolate* isolate = args.GetIsolate();
		Local<Number> result = Number::New(isolate, current_seed);
		// Return the seed
		args.GetReturnValue().Set(result);
	}

	void ranum(const FunctionCallbackInfo<Value> &args) {
		Isolate* isolate = args.GetIsolate();
		Local<Context> context = isolate -> GetCurrentContext();

		if (args.Length() == 0) {
			// Get a random number between 0 and 100
			int number = rand() % 101;
			// Convert the int into a JS number
			Isolate* isolate = args.GetIsolate();
			Local<Number> result = Number::New(isolate, number);
			// Return the number
			args.GetReturnValue().Set(result);
		} else if (args.Length() == 2) {
			int min = args[0].Get(0);
			int max = args[1].As<Number>() -> Value();
			int range = max - min + 1;
			int number = rand() % range + min;
			Local<Number> result = Number::New(isolate, number);
			args.GetReturnValue().Set(result);
		} else {
			cout << "InternalError at random.ranum: wrong number of arguments" << endl;
		}
	}

	void Initialize(Local<Object> exports) {
		NODE_SET_METHOD(exports, "main", main);
		NODE_SET_METHOD(exports, "use_seed", use_seed);
		NODE_SET_METHOD(exports, "get_seed", get_seed);
		NODE_SET_METHOD(exports, "ranum", ranum);
	}

	NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}