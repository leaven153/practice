import FetchWrapper from "./fetch-wrapper.js";

const form = document.querySelector("#todo-form");
const btn = document.querySelector("#button-add");
const tit = document.querySelector("#todo-title");
const cat = document.querySelector("#todo-category");
const list = document.querySelector("#todos-list");

const API = new FetchWrapper("");
