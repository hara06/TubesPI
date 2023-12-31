<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\RequestGuard;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $input = $request->all();
        $user = User::create(
            [
                'name' => $input['name'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
                'api_token' => Str::random(60)
            ]
        );
        $success['token'] =  $user->createToken('MyApp')->plainTextToken;
        $success['name'] =  $user->name;
        $success['email'] =  $user->email;
        $success['message'] = 'User has been created';

        return response()->json(['success'=>$success], 200);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()], 401);
        }

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->plainTextToken;
            $success['name'] =  $user->name;
            $success['email'] =  $user->email;
            $success['token_type'] = 'Bearer';
            $success['message'] = 'User Singed in';

            return response()->json(['success'=>$success],200);
            // return $this->sendResponse($success, 'User signed in');
        } else {
            return response()->json(['error'=>'Unauthorised'], 401);
        }

    }

    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json(['success'=>'Logout berhasil'],200);
    }

}