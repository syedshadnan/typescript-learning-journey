"use strict";
// Problem 1 — Basic Inference
// const username = "Ifty";  ==>string
// const age = 25; ==> number
// const isStudent = true; ==>boolean
// Problem 2 — User Role
const createUser = (name, role) => {
    return `${name} | ${role}`;
};
const createUserProfile = (profile) => {
    return `${profile.name} | ${profile.age} | ${profile.role} | ${profile.status}`;
};
const formatUserStatus = (status) => {
    return `user is ${status.status}`;
};
console.log(formatUserStatus({
    status: 'active'
}));
