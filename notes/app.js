/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, NotesParameters) {
	    __webpack_require__(3);
	    __webpack_require__(2);
	    var lsKey = "notes";
	    var notesParameters = new NotesParameters();
	    var data = localStorage.getItem(lsKey);
	    if (data) {
	        notesParameters.notes(JSON.parse(data));
	    }
	    notesParameters.notes.subscribe(function (value) {
	        localStorage.setItem(lsKey, JSON.stringify(value));
	    });
	    refresh();
	    ko.applyBindings({ notesParameters: notesParameters });
	    function refresh() {
	        notesParameters.now(Date.now());
	        setTimeout(refresh, 1000);
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    var NotesParameters = (function () {
	        function NotesParameters() {
	            this.notes = ko.observableArray([]);
	            this.now = ko.observable(Date.now());
	        }
	        return NotesParameters;
	    })();
	    return NotesParameters;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    __webpack_require__(7);
	    __webpack_require__(8);
	    var Notes = (function () {
	        function Notes(params) {
	            this.notesParameters = params.notesParameters;
	        }
	        Object.defineProperty(Notes.prototype, "notes", {
	            get: function () {
	                return this.notesParameters.notes();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return Notes;
	    })();
	    ko.components.register('notes', {
	        viewModel: Notes,
	        template: __webpack_require__(9)
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    __webpack_require__(13);
	    var Note = (function () {
	        function Note(params) {
	            this.key = params.key;
	            this.notesParameters = params.notesParameters;
	        }
	        Object.defineProperty(Note.prototype, "text", {
	            get: function () {
	                var _this = this;
	                return this.notesParameters.notes().filter(function (x) { return x.key === _this.key; })[0].text;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Note.prototype.remove = function () {
	            var _this = this;
	            var item = this.notesParameters.notes().filter(function (x) { return x.key === _this.key; })[0];
	            this.notesParameters.notes.remove(item);
	        };
	        Object.defineProperty(Note.prototype, "time", {
	            get: function () {
	                return moment(new Date(this.key)).from(new Date(this.notesParameters.now()));
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return Note;
	    })();
	    ko.components.register('note-item', {
	        viewModel: Note,
	        template: __webpack_require__(15)
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    __webpack_require__(10);
	    var NoteAdd = (function () {
	        function NoteAdd(params) {
	            this.text = ko.observable("");
	            this.notesParameters = params.notesParameters;
	        }
	        NoteAdd.prototype.addByEnter = function (sender, event) {
	            if (event.keyCode == 13) {
	                this.add();
	            }
	            return true;
	        };
	        NoteAdd.prototype.add = function () {
	            var text = this.text().trim();
	            if (text == "") {
	                return;
	            }
	            this.text("");
	            this.notesParameters.notes.push({ key: Date.now(), text: text });
	        };
	        return NoteAdd;
	    })();
	    ko.components.register('note-add', {
	        viewModel: NoteAdd,
	        template: __webpack_require__(12)
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<!-- ko foreach: notes -->\r\n    <!-- ko component: {\r\n        name: \"note-item\",\r\n        params: { key:key,notesParameters:$parent.notesParameters }\r\n    } -->\r\n    <!-- /ko -->\r\n<!-- /ko -->\r\n<!-- ko component: {\r\n       name: \"note-add\",\r\n       params: { notesParameters:notesParameters }\r\n   } -->\r\n<!-- /ko -->\r\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"note-add\">\r\n    <div>\r\n        <input type=\"text\" data-bind=\"textInput :text,event:{keypress:addByEnter}\" maxlength=\"500\" />\r\n    </div>\r\n    <div class=\"button-container\">\r\n        <button data-bind=\"click:add\">Add</button>\r\n    </div>\r\n</div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"node-item\">\r\n    <div title=\"Remove note\" class=\"remove-button\" data-bind=\"click:remove\">x</div>\r\n    <span data-bind=\"text:text\"></span>  \r\n    <div class=\"time-title\" data-bind=\"text:time\"></div> \r\n</div>";

/***/ }
/******/ ])
//# sourceMappingURL=app.js.map