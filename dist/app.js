webpackJsonp( [0], [
    /* 0 */
    /***/ function ( module, exports, __webpack_require__ ) {

        'use strict';

        var _toConsumableArray2 = __webpack_require__( 1 );

        var _toConsumableArray3 = _interopRequireDefault( _toConsumableArray2 );

        var _extends2 = __webpack_require__( 39 );

        var _extends3 = _interopRequireDefault( _extends2 );

        var _react = __webpack_require__( 45 );

        var _react2 = _interopRequireDefault( _react );

        var _reactDom = __webpack_require__( 202 );

        var _reactDom2 = _interopRequireDefault( _reactDom );

        var _redux = __webpack_require__( 203 );

        var _reactRedux = __webpack_require__( 213 );

        function _interopRequireDefault( obj ) {
            return obj && obj.__esModule ? obj : {default : obj};
        }

        var todo = function todo( state, action ) {
            switch ( action.type ) {
                case 'ADD_TODO':
                    return {
                        id        : action.id,
                        text      : action.text,
                        completed : false
                    };
                case 'TOGGLE_TODO':
                    if ( state.id !== action.id ) {
                        return state;
                    }

                    return (0, _extends3.default)( {}, state, {
                        completed : !state.completed
                    } );
                default:
                    return state;
            }
        };

        var todos = function todos() {
            var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
            var action = arguments[1];

            switch ( action.type ) {
                case 'ADD_TODO':
                    return [].concat( (0, _toConsumableArray3.default)( state ), [todo( undefined, action )] );
                case 'TOGGLE_TODO':
                    return state.map( function ( t ) {
                        return todo( t, action );
                    } );
                default:
                    return state;
            }
        };

        var visibilityFilter = function visibilityFilter() {
            var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
            var action = arguments[1];

            switch ( action.type ) {
                case 'SET_VISIBILITY_FILTER':
                    return action.filter;
                default:
                    return state;
            }
        };

        var todoApp = (0, _redux.combineReducers)( {
            todos            : todos,
            visibilityFilter : visibilityFilter
        } );

        var nextTodoId = 0;
        var addTodo = function addTodo( text ) {
            return {
                type : 'ADD_TODO',
                id   : nextTodoId++,
                text : text
            };
        };

        var setVisibilityFilter = function setVisibilityFilter( filter ) {
            return {
                type   : 'SET_VISIBILITY_FILTER',
                filter : filter
            };
        };

        var toggleTodo = function toggleTodo( id ) {
            return {
                type : 'TOGGLE_TODO',
                id   : id
            };
        };

        var Link = function Link( _ref ) {
            var active = _ref.active;
            var children = _ref.children;
            var _onClick = _ref.onClick;

            if ( active ) {
                return _react2.default.createElement(
                    'span',
                    null,
                    children
                );
            }

            return _react2.default.createElement(
                'a',
                {
                    href : '#', onClick : function onClick( e ) {
                    e.preventDefault();
                    _onClick();
                }
                },
                children
            );
        };

        var mapStateToLinkProps = function mapStateToLinkProps( state, ownProps ) {
            return {
                active : ownProps.filter === state.visibilityFilter
            };
        };

        var mapDispatchToLinkProps = function mapDispatchToLinkProps( dispatch, ownProps ) {
            return {
                onClick : function onClick() {
                    dispatch( setVisibilityFilter( ownProps.filter ) );
                }
            };
        };

        var FilterLink = (0, _reactRedux.connect)( mapStateToLinkProps, mapDispatchToLinkProps )( Link );

        var getVisibleTodos = function getVisibleTodos( todos, filter ) {
            switch ( filter ) {
                case 'SHOW_ALL':
                    return todos;
                case 'SHOW_COMPLETED':
                    return todos.filter( function ( t ) {
                        return t.completed;
                    } );
                case 'SHOW_ACTIVE':
                    return todos.filter( function ( t ) {
                        return !t.completed;
                    } );
            }
        };

        var Todo = function Todo( _ref2 ) {
            var onClick = _ref2.onClick;
            var completed = _ref2.completed;
            var text = _ref2.text;
            return _react2.default.createElement(
                'li',
                {
                    onClick : onClick,
                    style   : {textDecoration : completed ? 'line-through' : 'none'}
                },
                text
            );
        };

        var TodoList = function TodoList( _ref3 ) {
            var todos = _ref3.todos;
            var onTodoClick = _ref3.onTodoClick;
            return _react2.default.createElement(
                'ul',
                null,
                todos.map( function ( todo ) {
                    return _react2.default.createElement( Todo, (0, _extends3.default)( {
                        key : todo.id
                    }, todo, {
                        onClick : function onClick() {
                            return onTodoClick( todo.id );
                        }
                    } ) );
                } )
            );
        };

        var AddTodo = function AddTodo( _ref4 ) {
            var dispatch = _ref4.dispatch;

            var input = undefined;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement( 'input', {
                    ref : function ref( node ) {
                        input = node;
                    }
                } ),
                _react2.default.createElement(
                    'button',
                    {
                        onClick : function onClick() {
                            dispatch( addTodo( input.value ) );
                            input.value = '';
                        }
                    },
                    'Add Todo'
                )
            );
        };

        AddTodo = (0, _reactRedux.connect)()( AddTodo );

        var Footer = function Footer() {
            return _react2.default.createElement(
                'p',
                null,
                'Show:',
                ' ',
                _react2.default.createElement(
                    FilterLink,
                    {filter : 'SHOW_ALL'},
                    'All'
                ),
                ' ',
                _react2.default.createElement(
                    FilterLink,
                    {filter : 'SHOW_ACTIVE'},
                    'Active'
                ),
                ' ',
                _react2.default.createElement(
                    FilterLink,
                    {filter : 'SHOW_COMPLETED'},
                    'Completed'
                )
            );
        };

        var mapStateToTodoListProps = function mapStateToTodoListProps( state ) {
            return {
                todos : getVisibleTodos( state.todos, state.visibilityFilter )
            };
        };

        var mapDispatchToTodoListProps = function mapDispatchToTodoListProps( dispatch ) {
            return {
                onTodoClick : function onTodoClick( id ) {
                    return dispatch( toggleTodo( id ) );
                }
            };
        };

        var VisibleTodoList = (0, _reactRedux.connect)( mapStateToTodoListProps,
            mapDispatchToTodoListProps )(
            TodoList );

        VisibleTodoList.contextTypes = {
            store : _react2.default.PropTypes.object
        };

        var TodoApp = function TodoApp() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement( AddTodo, null ),
                _react2.default.createElement( VisibleTodoList, null ),
                _react2.default.createElement( Footer, null )
            );
        };

        _reactDom2.default.render( _react2.default.createElement(
            _reactRedux.Provider,
            {store : (0, _redux.createStore)( todoApp )},
            _react2.default.createElement( TodoApp, null )
        ), document.getElementById( 'root' ) );

        /***/
    },
    /* 1 */
    /***/ function ( module, exports, __webpack_require__ ) {

        "use strict";

        exports.__esModule = true;

        var _from = __webpack_require__( 2 );

        var _from2 = _interopRequireDefault( _from );

        function _interopRequireDefault( obj ) {
            return obj && obj.__esModule ? obj : {default : obj};
        }

        exports.default = function ( arr ) {
            if ( Array.isArray( arr ) ) {
                for ( var i = 0, arr2 = Array( arr.length ); i < arr.length; i++ ) {
                    arr2[i] = arr[i];
                }

                return arr2;
            }
            else {
                return (0, _from2.default)( arr );
            }
        };

        /***/
    },
    /* 2 */
    /***/ function ( module, exports, __webpack_require__ ) {

        module.exports = {"default" : __webpack_require__( 3 ), __esModule : true};

        /***/
    },
    /* 3 */
    /***/ function ( module, exports, __webpack_require__ ) {

        __webpack_require__( 4 );
        __webpack_require__( 28 );
        module.exports = __webpack_require__( 12 ).Array.from;

        /***/
    },
    /* 4 */
    /***/ function ( module, exports, __webpack_require__ ) {

        'use strict';
        var $at = __webpack_require__( 5 )( true );

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__( 8 )( String, 'String', function ( iterated ) {
            this._t = String( iterated ); // target
            this._i = 0;                // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function () {
            var O = this._t
                , index = this._i
                , point;
            if ( index >= O.length ) {
                return {value : undefined, done : true};
            }
            point = $at( O, index );
            this._i += point.length;
            return {value : point, done : false};
        } );

        /***/
    },
    /* 5 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var toInteger = __webpack_require__( 6 )
            , defined = __webpack_require__( 7 );
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function ( TO_STRING ) {
            return function ( that, pos ) {
                var s = String( defined( that ) )
                    , i = toInteger( pos )
                    , l = s.length
                    , a, b;
                if ( i < 0 || i >= l ) {
                    return TO_STRING ? '' : undefined;
                }
                a = s.charCodeAt( i );
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt( i + 1 )) < 0xdc00 || b > 0xdfff
                    ? TO_STRING ? s.charAt( i ) : a
                    : TO_STRING ? s.slice( i, i + 2 ) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };

        /***/
    },
    /* 6 */
    /***/ function ( module, exports ) {

        // 7.1.4 ToInteger
        var ceil = Math.ceil
            , floor = Math.floor;
        module.exports = function ( it ) {
            return isNaN( it = +it ) ? 0 : (it > 0 ? floor : ceil)( it );
        };

        /***/
    },
    /* 7 */
    /***/ function ( module, exports ) {

        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function ( it ) {
            if ( it == undefined ) {
                throw TypeError( "Can't call method on  " + it );
            }
            return it;
        };

        /***/
    },
    /* 8 */
    /***/ function ( module, exports, __webpack_require__ ) {

        'use strict';
        var LIBRARY = __webpack_require__( 9 )
            , $export = __webpack_require__( 10 )
            , redefine = __webpack_require__( 15 )
            , hide = __webpack_require__( 16 )
            , has = __webpack_require__( 21 )
            , Iterators = __webpack_require__( 22 )
            , $iterCreate = __webpack_require__( 23 )
            , setToStringTag = __webpack_require__( 24 )
            , getProto = __webpack_require__( 17 ).getProto
            , ITERATOR = __webpack_require__( 25 )( 'iterator' )
            , BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
            , FF_ITERATOR = '@@iterator'
            , KEYS = 'keys'
            , VALUES = 'values';

        var returnThis = function () {
            return this;
        };

        module.exports = function ( Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED ) {
            $iterCreate( Constructor, NAME, next );
            var getMethod = function ( kind ) {
                if ( !BUGGY && kind in proto ) {
                    return proto[kind];
                }
                switch ( kind ) {
                    case KEYS:
                        return function keys() {
                            return new Constructor( this, kind );
                        };
                    case VALUES:
                        return function values() {
                            return new Constructor( this, kind );
                        };
                }
                return function entries() {
                    return new Constructor( this, kind );
                };
            };
            var TAG = NAME + ' Iterator'
                , DEF_VALUES = DEFAULT == VALUES
                , VALUES_BUG = false
                , proto = Base.prototype
                , $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
                , $default = $native || getMethod( DEFAULT )
                , methods, key;
            // Fix native
            if ( $native ) {
                var IteratorPrototype = getProto( $default.call( new Base ) );
                // Set @@toStringTag to native iterators
                setToStringTag( IteratorPrototype, TAG, true );
                // FF fix
                if ( !LIBRARY && has( proto, FF_ITERATOR ) ) {
                    hide( IteratorPrototype, ITERATOR, returnThis );
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if ( DEF_VALUES && $native.name !== VALUES ) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call( this );
                    };
                }
            }
            // Define iterator
            if ( (!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR]) ) {
                hide( proto, ITERATOR, $default );
            }
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if ( DEFAULT ) {
                methods = {
                    values  : DEF_VALUES ? $default : getMethod( VALUES ),
                    keys    : IS_SET ? $default : getMethod( KEYS ),
                    entries : !DEF_VALUES ? $default : getMethod( 'entries' )
                };
                if ( FORCED ) {
                    for ( key in methods ) {
                        if ( !(key in proto) ) {
                            redefine( proto, key, methods[key] );
                        }
                    }
                }
                else {
                    $export( $export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods );
                }
            }
            return methods;
        };

        /***/
    },
    /* 9 */
    /***/ function ( module, exports ) {

        module.exports = true;

        /***/
    },
    /* 10 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var global = __webpack_require__( 11 )
            , core = __webpack_require__( 12 )
            , ctx = __webpack_require__( 13 )
            , PROTOTYPE = 'prototype';

        var $export = function ( type, name, source ) {
            var IS_FORCED = type & $export.F
                , IS_GLOBAL = type & $export.G
                , IS_STATIC = type & $export.S
                , IS_PROTO = type & $export.P
                , IS_BIND = type & $export.B
                , IS_WRAP = type & $export.W
                , exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
                , target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
                , key, own, out;
            if ( IS_GLOBAL ) {
                source = name;
            }
            for ( key in source ) {
                // contains in native
                own = !IS_FORCED && target && key in target;
                if ( own && key in exports ) {
                    continue;
                }
                // export native or passed
                out = own ? target[key] : source[key];
                // prevent global pollution for namespaces
                exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                    // bind timers to global for call from export context
                    : IS_BIND && own ? ctx( out, global )
                    // wrap global constructors for prevent change them in library
                    : IS_WRAP && target[key] == out ? (function ( C ) {
                    var F = function ( param ) {
                        return this instanceof C ? new C( param ) : C( param );
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                    // make static versions for prototype methods
                })( out ) : IS_PROTO && typeof out == 'function' ? ctx( Function.call, out ) : out;
                if ( IS_PROTO ) {
                    (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
                }
            }
        };
        // type bitmap
        $export.F = 1;  // forced
        $export.G = 2;  // global
        $export.S = 4;  // static
        $export.P = 8;  // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        module.exports = $export;

        /***/
    },
    /* 11 */
    /***/ function ( module, exports ) {

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math
            ? window : typeof self != 'undefined' && self.Math == Math ? self : Function( 'return this' )();
        if ( typeof __g == 'number' ) {
            __g = global;
        } // eslint-disable-line no-undef

        /***/
    },
    /* 12 */
    /***/ function ( module, exports ) {

        var core = module.exports = {version : '1.2.6'};
        if ( typeof __e == 'number' ) {
            __e = core;
        } // eslint-disable-line no-undef

        /***/
    },
    /* 13 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // optional / simple context binding
        var aFunction = __webpack_require__( 14 );
        module.exports = function ( fn, that, length ) {
            aFunction( fn );
            if ( that === undefined ) {
                return fn;
            }
            switch ( length ) {
                case 1:
                    return function ( a ) {
                        return fn.call( that, a );
                    };
                case 2:
                    return function ( a, b ) {
                        return fn.call( that, a, b );
                    };
                case 3:
                    return function ( a, b, c ) {
                        return fn.call( that, a, b, c );
                    };
            }
            return function ( /* ...args */ ) {
                return fn.apply( that, arguments );
            };
        };

        /***/
    },
    /* 14 */
    /***/ function ( module, exports ) {

        module.exports = function ( it ) {
            if ( typeof it != 'function' ) {
                throw TypeError( it + ' is not a function!' );
            }
            return it;
        };

        /***/
    },
    /* 15 */
    /***/ function ( module, exports, __webpack_require__ ) {

        module.exports = __webpack_require__( 16 );

        /***/
    },
    /* 16 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var $ = __webpack_require__( 17 )
            , createDesc = __webpack_require__( 18 );
        module.exports = __webpack_require__( 19 ) ? function ( object, key, value ) {
            return $.setDesc( object, key, createDesc( 1, value ) );
        } : function ( object, key, value ) {
            object[key] = value;
            return object;
        };

        /***/
    },
    /* 17 */
    /***/ function ( module, exports ) {

        var $Object = Object;
        module.exports = {
            create     : $Object.create,
            getProto   : $Object.getPrototypeOf,
            isEnum     : {}.propertyIsEnumerable,
            getDesc    : $Object.getOwnPropertyDescriptor,
            setDesc    : $Object.defineProperty,
            setDescs   : $Object.defineProperties,
            getKeys    : $Object.keys,
            getNames   : $Object.getOwnPropertyNames,
            getSymbols : $Object.getOwnPropertySymbols,
            each       : [].forEach
        };

        /***/
    },
    /* 18 */
    /***/ function ( module, exports ) {

        module.exports = function ( bitmap, value ) {
            return {
                enumerable   : !(bitmap & 1),
                configurable : !(bitmap & 2),
                writable     : !(bitmap & 4),
                value        : value
            };
        };

        /***/
    },
    /* 19 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__( 20 )( function () {
            return Object.defineProperty( {}, 'a', {
                    get : function () {
                        return 7;
                    }
                } ).a != 7;
        } );

        /***/
    },
    /* 20 */
    /***/ function ( module, exports ) {

        module.exports = function ( exec ) {
            try {
                return !!exec();
            }
            catch ( e ) {
                return true;
            }
        };

        /***/
    },
    /* 21 */
    /***/ function ( module, exports ) {

        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function ( it, key ) {
            return hasOwnProperty.call( it, key );
        };

        /***/
    },
    /* 22 */
    /***/ function ( module, exports ) {

        module.exports = {};

        /***/
    },
    /* 23 */
    /***/ function ( module, exports, __webpack_require__ ) {

        'use strict';
        var $ = __webpack_require__( 17 )
            , descriptor = __webpack_require__( 18 )
            , setToStringTag = __webpack_require__( 24 )
            , IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__( 16 )( IteratorPrototype, __webpack_require__( 25 )( 'iterator' ), function () {
            return this;
        } );

        module.exports = function ( Constructor, NAME, next ) {
            Constructor.prototype = $.create( IteratorPrototype, {next : descriptor( 1, next )} );
            setToStringTag( Constructor, NAME + ' Iterator' );
        };

        /***/
    },
    /* 24 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var def = __webpack_require__( 17 ).setDesc
            , has = __webpack_require__( 21 )
            , TAG = __webpack_require__( 25 )( 'toStringTag' );

        module.exports = function ( it, tag, stat ) {
            if ( it && !has( it = stat ? it : it.prototype, TAG ) ) {
                def( it, TAG, {configurable : true, value : tag} );
            }
        };

        /***/
    },
    /* 25 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var store = __webpack_require__( 26 )( 'wks' )
            , uid = __webpack_require__( 27 )
            , Symbol = __webpack_require__( 11 ).Symbol;
        module.exports = function ( name ) {
            return store[name] || (store[name] =
                   Symbol && Symbol[name] || (Symbol || uid)( 'Symbol.' + name ));
        };

        /***/
    },
    /* 26 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var global = __webpack_require__( 11 )
            , SHARED = '__core-js_shared__'
            , store = global[SHARED] || (global[SHARED] = {});
        module.exports = function ( key ) {
            return store[key] || (store[key] = {});
        };

        /***/
    },
    /* 27 */
    /***/ function ( module, exports ) {

        var id = 0
            , px = Math.random();
        module.exports = function ( key ) {
            return 'Symbol('.concat( key === undefined ? '' : key, ')_', (++id + px).toString( 36 ) );
        };

        /***/
    },
    /* 28 */
    /***/ function ( module, exports, __webpack_require__ ) {

        'use strict';
        var ctx = __webpack_require__( 13 )
            , $export = __webpack_require__( 10 )
            , toObject = __webpack_require__( 29 )
            , call = __webpack_require__( 30 )
            , isArrayIter = __webpack_require__( 33 )
            , toLength = __webpack_require__( 34 )
            , getIterFn = __webpack_require__( 35 );
        $export( $export.S + $export.F * !__webpack_require__( 38 )( function ( iter ) {
                Array.from( iter );
            } ), 'Array', {
            // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
            from : function from( arrayLike/*, mapfn = undefined, thisArg = undefined*/ ) {
                var O = toObject( arrayLike )
                    , C = typeof this == 'function' ? this : Array
                    , $$ = arguments
                    , $$len = $$.length
                    , mapfn = $$len > 1 ? $$[1] : undefined
                    , mapping = mapfn !== undefined
                    , index = 0
                    , iterFn = getIterFn( O )
                    , length, result, step, iterator;
                if ( mapping ) {
                    mapfn = ctx( mapfn, $$len > 2 ? $$[2] : undefined, 2 );
                }
                // if object isn't iterable or it's array with default iterator - use simple case
                if ( iterFn != undefined && !(C == Array && isArrayIter( iterFn )) ) {
                    for ( iterator = iterFn.call( O ), result = new C; !(step = iterator.next()).done; index++ ) {
                        result[index] = mapping ? call( iterator, mapfn, [step.value, index], true ) : step.value;
                    }
                }
                else {
                    length = toLength( O.length );
                    for ( result = new C( length ); length > index; index++ ) {
                        result[index] = mapping ? mapfn( O[index], index ) : O[index];
                    }
                }
                result.length = index;
                return result;
            }
        } );

        /***/
    },
    /* 29 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__( 7 );
        module.exports = function ( it ) {
            return Object( defined( it ) );
        };

        /***/
    },
    /* 30 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__( 31 );
        module.exports = function ( iterator, fn, value, entries ) {
            try {
                return entries ? fn( anObject( value )[0], value[1] ) : fn( value );
                // 7.4.6 IteratorClose(iterator, completion)
            }
            catch ( e ) {
                var ret = iterator['return'];
                if ( ret !== undefined ) {
                    anObject( ret.call( iterator ) );
                }
                throw e;
            }
        };

        /***/
    },
    /* 31 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var isObject = __webpack_require__( 32 );
        module.exports = function ( it ) {
            if ( !isObject( it ) ) {
                throw TypeError( it + ' is not an object!' );
            }
            return it;
        };

        /***/
    },
    /* 32 */
    /***/ function ( module, exports ) {

        module.exports = function ( it ) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

        /***/
    },
    /* 33 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // check on default Array iterator
        var Iterators = __webpack_require__( 22 )
            , ITERATOR = __webpack_require__( 25 )( 'iterator' )
            , ArrayProto = Array.prototype;

        module.exports = function ( it ) {
            return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };

        /***/
    },
    /* 34 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // 7.1.15 ToLength
        var toInteger = __webpack_require__( 6 )
            , min = Math.min;
        module.exports = function ( it ) {
            return it > 0 ? min( toInteger( it ), 0x1fffffffffffff ) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
    },
    /* 35 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var classof = __webpack_require__( 36 )
            , ITERATOR = __webpack_require__( 25 )( 'iterator' )
            , Iterators = __webpack_require__( 22 );
        module.exports = __webpack_require__( 12 ).getIteratorMethod = function ( it ) {
            if ( it != undefined ) {
                return it[ITERATOR]
                       || it['@@iterator']
                       || Iterators[classof( it )];
            }
        };

        /***/
    },
    /* 36 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__( 37 )
            , TAG = __webpack_require__( 25 )( 'toStringTag' )
        // ES3 wrong here
            , ARG = cof( function () {
                return arguments;
            }() ) == 'Arguments';

        module.exports = function ( it ) {
            var O, T, B;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                : typeof (T = (O = Object( it ))[TAG]) == 'string' ? T
                // builtinTag case
                : ARG ? cof( O )
                // ES3 arguments fallback
                : (B = cof( O )) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };

        /***/
    },
    /* 37 */
    /***/ function ( module, exports ) {

        var toString = {}.toString;

        module.exports = function ( it ) {
            return toString.call( it ).slice( 8, -1 );
        };

        /***/
    },
    /* 38 */
    /***/ function ( module, exports, __webpack_require__ ) {

        var ITERATOR = __webpack_require__( 25 )( 'iterator' )
            , SAFE_CLOSING = false;

        try {
            var riter = [7][ITERATOR]();
            riter['return'] = function () {
                SAFE_CLOSING = true;
            };
            Array.from( riter, function () {
                throw 2;
            } );
        }
        catch ( e ) { /* empty */
        }

        module.exports = function ( exec, skipClosing ) {
            if ( !skipClosing && !SAFE_CLOSING ) {
                return false;
            }
            var safe = false;
            try {
                var arr = [7]
                    , iter = arr[ITERATOR]();
                iter.next = function () {
                    safe = true;
                };
                arr[ITERATOR] = function () {
                    return iter;
                };
                exec( arr );
            }
            catch ( e ) { /* empty */
            }
            return safe;
        };

        /***/
    },
    /* 39 */
    /***/ function ( module, exports, __webpack_require__ ) {

        "use strict";

        exports.__esModule = true;

        var _assign = __webpack_require__( 40 );

        var _assign2 = _interopRequireDefault( _assign );

        function _interopRequireDefault( obj ) {
            return obj && obj.__esModule ? obj : {default : obj};
        }

        exports.default = _assign2.default || function ( target ) {
                for ( var i = 1; i < arguments.length; i++ ) {
                    var source = arguments[i];

                    for ( var key in source ) {
                        if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
                            target[key] = source[key];
                        }
                    }
                }

                return target;
            };

        /***/
    },
    /* 40 */
    /***/ function ( module, exports, __webpack_require__ ) {

        module.exports = {"default" : __webpack_require__( 41 ), __esModule : true};

        /***/
    },
    /* 41 */
    /***/ function ( module, exports, __webpack_require__ ) {

        __webpack_require__( 42 );
        module.exports = __webpack_require__( 12 ).Object.assign;

        /***/
    },
    /* 42 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // 19.1.3.1 Object.assign(target, source)
        var $export = __webpack_require__( 10 );

        $export( $export.S + $export.F, 'Object', {assign : __webpack_require__( 43 )} );

        /***/
    },
    /* 43 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // 19.1.2.1 Object.assign(target, source, ...)
        var $ = __webpack_require__( 17 )
            , toObject = __webpack_require__( 29 )
            , IObject = __webpack_require__( 44 );

        // should work with symbols and should have deterministic property order (V8 bug)
        module.exports = __webpack_require__( 20 )( function () {
            var a = Object.assign
                , A = {}
                , B = {}
                , S = Symbol()
                , K = 'abcdefghijklmnopqrst';
            A[S] = 7;
            K.split( '' ).forEach( function ( k ) {
                B[k] = k;
            } );
            return a( {}, A )[S] != 7 || Object.keys( a( {}, B ) ).join( '' ) != K;
        } ) ? function assign( target, source ) { // eslint-disable-line no-unused-vars
            var T = toObject( target )
                , $$ = arguments
                , $$len = $$.length
                , index = 1
                , getKeys = $.getKeys
                , getSymbols = $.getSymbols
                , isEnum = $.isEnum;
            while ( $$len > index ) {
                var S = IObject( $$[index++] )
                    , keys = getSymbols ? getKeys( S ).concat( getSymbols( S ) ) : getKeys( S )
                    , length = keys.length
                    , j = 0
                    , key;
                while ( length > j ) {
                    if ( isEnum.call( S, key = keys[j++] ) ) {
                        T[key] = S[key];
                    }
                }
            }
            return T;
        } : Object.assign;

        /***/
    },
    /* 44 */
    /***/ function ( module, exports, __webpack_require__ ) {

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__( 37 );
        module.exports = Object( 'z' ).propertyIsEnumerable( 0 ) ? Object : function ( it ) {
            return cof( it ) == 'String' ? it.split( '' ) : Object( it );
        };

        /***/
    }
] );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmFuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaW9iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsS0FBTSxPQUFPLFNBQVAsSUFBTyxDQUFFLEtBQUYsRUFBUyxNQUFULEVBQXFCO0FBQzlCLGFBQVMsT0FBTyxJQUFQO0FBQ0wsY0FBSyxVQUFMO0FBQ0ksb0JBQU87QUFDSCxxQkFBWSxPQUFPLEVBQVA7QUFDWix1QkFBWSxPQUFPLElBQVA7QUFDWiw0QkFBWSxLQUFaO2NB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Q3RCQSxtQkFBa0Isd0Q7Ozs7OztBQ0FsQjtBQUNBLHdEOzs7Ozs7QUNEQTtBQUNBOztBQUVBLDJDQUEwQyxnQ0FBcUMsRTs7Ozs7O0FDSC9FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsVUFBVSxFQUFFO0FBQzlDLGNBQWEsZ0NBQWdDO0FBQzdDLEVBQUMsb0NBQW9DO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxpQjs7Ozs7O0FDaENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIsY29ubmVjdCAgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IHRvZG8gPSAoIHN0YXRlLCBhY3Rpb24gKSA9PiB7XG4gICAgc3dpdGNoICggYWN0aW9uLnR5cGUgKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQgICAgICAgIDogYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIHRleHQgICAgICA6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgICAgICBpZiAoIHN0YXRlLmlkICE9PSBhY3Rpb24uaWQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgdG9kb3MgPSAoIHN0YXRlID0gW10sIGFjdGlvbiApID0+IHtcbiAgICBzd2l0Y2ggKCBhY3Rpb24udHlwZSApIHtcbiAgICAgICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b2RvKCB1bmRlZmluZWQsIGFjdGlvbiApXG4gICAgICAgICAgICBdO1xuICAgICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKCAoIHQgKSA9PiB0b2RvKCB0LCBhY3Rpb24gKSApO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoIHN0YXRlID0gJ1NIT1dfQUxMJywgYWN0aW9uICkgPT4ge1xuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xuICAgICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycygge1xuICAgIHRvZG9zLFxuICAgIHZpc2liaWxpdHlGaWx0ZXJcbn0gKTtcblxubGV0IG5leHRUb2RvSWQgPSAwO1xuY29uc3QgYWRkVG9kbyA9ICggdGV4dCApID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlIDogJ0FERF9UT0RPJyxcbiAgICAgICAgaWQgICA6IG5leHRUb2RvSWQrKyxcbiAgICAgICAgdGV4dFxuICAgIH07XG59O1xuXG5jb25zdCBzZXRWaXNpYmlsaXR5RmlsdGVyID0gKCBmaWx0ZXIgKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuICAgICAgICBmaWx0ZXJcbiAgICB9O1xufTtcblxuY29uc3QgdG9nZ2xlVG9kbyA9ICggaWQgKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6ICdUT0dHTEVfVE9ETycsXG4gICAgICAgIGlkXG4gICAgfTtcbn07XG5cbmNvbnN0IExpbmsgPSAoIHsgYWN0aXZlLCBjaGlsZHJlbiwgb25DbGljayAgfSApID0+IHtcbiAgICBpZiAoIGFjdGl2ZSApIHtcbiAgICAgICAgcmV0dXJuIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9JyMnIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgIH19PntjaGlsZHJlbn08L2E+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9MaW5rUHJvcHMgPSAoXG4gICAgc3RhdGUsXG4gICAgb3duUHJvcHNcbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZSA6IG93blByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvTGlua1Byb3BzID0gKFxuICAgIGRpc3BhdGNoLFxuICAgIG93blByb3BzXG4pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbkNsaWNrIDogKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goIHNldFZpc2liaWxpdHlGaWx0ZXIoIG93blByb3BzLmZpbHRlciApICk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuY29uc3QgRmlsdGVyTGluayA9IGNvbm5lY3QoIG1hcFN0YXRlVG9MaW5rUHJvcHMsIG1hcERpc3BhdGNoVG9MaW5rUHJvcHMgKSggTGluayApO1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAoIHRvZG9zLCBmaWx0ZXIgKSA9PiB7XG4gICAgc3dpdGNoICggZmlsdGVyICkge1xuICAgICAgICBjYXNlICdTSE9XX0FMTCc6XG4gICAgICAgICAgICByZXR1cm4gdG9kb3M7XG4gICAgICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJzpcbiAgICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoIHQgPT4gdC5jb21wbGV0ZWQgKTtcbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlciggdCA9PiAhdC5jb21wbGV0ZWQgKTtcbiAgICB9XG59O1xuXG5jb25zdCBUb2RvID0gKCB7IG9uQ2xpY2ssIGNvbXBsZXRlZCwgdGV4dCB9ICkgPT4gKFxuICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBjb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoJzogJ25vbmUnfX0+XG4gICAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG4pO1xuXG5jb25zdCBUb2RvTGlzdCA9ICgge3RvZG9zLCBvblRvZG9DbGlja30gKSA9PiAoXG4gICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKCB0b2RvID0+XG4gICAgICAgICAgICA8VG9kbyBrZXk9e3RvZG8uaWR9XG4gICAgICAgICAgICAgICAgey4uLnRvZG99XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRvZG9DbGljayh0b2RvLmlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgPC91bD5cbik7XG5cbmxldCBBZGRUb2RvID0gKCB7IGRpc3BhdGNoIH0gKSA9PiB7XG4gICAgbGV0IGlucHV0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e25vZGUgPT4geyBpbnB1dCA9IG5vZGU7fX0vPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGFkZFRvZG8oaW5wdXQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICBBZGQgVG9kb1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2Pik7XG59O1xuXG5BZGRUb2RvID0gY29ubmVjdCgpKCBBZGRUb2RvICk7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgICA8cD5cbiAgICAgICAgU2hvdzpcbiAgICAgICAgeycgJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCc+QWxsPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5BY3RpdmU8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG4pO1xuXG5jb25zdCBtYXBTdGF0ZVRvVG9kb0xpc3RQcm9wcyA9ICggc3RhdGUgKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9kb3MgOiBnZXRWaXNpYmxlVG9kb3MoIHN0YXRlLnRvZG9zLCBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyIClcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1RvZG9MaXN0UHJvcHMgPSAoIGRpc3BhdGNoICkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uVG9kb0NsaWNrIDogKCBpZCApID0+IGRpc3BhdGNoKCB0b2dnbGVUb2RvKCBpZCApIClcbiAgICB9O1xufTtcblxuY29uc3QgVmlzaWJsZVRvZG9MaXN0ID0gY29ubmVjdCggbWFwU3RhdGVUb1RvZG9MaXN0UHJvcHMsIG1hcERpc3BhdGNoVG9Ub2RvTGlzdFByb3BzICkoIFRvZG9MaXN0ICk7XG5cblZpc2libGVUb2RvTGlzdC5jb250ZXh0VHlwZXMgPSB7XG4gICAgc3RvcmUgOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5jb25zdCBUb2RvQXBwID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17Y3JlYXRlU3RvcmUoIHRvZG9BcHAgKX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdyb290JyApXG4pO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuQXJyYXkuZnJvbTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmluZy1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90bygkZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIGlmKElTX1BST1RPKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmdsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY3R4LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5oaWRlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5yZWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC53a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC51aWQuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgJCQgICAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiAgID0gJCQubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSAkJGxlbiA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCAkJGxlbiA+IDIgPyAkJFsyXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItY2FsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tbGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHNhZmUgPSB0cnVlOyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLm9iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0Jyk7XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgYSA9IE9iamVjdC5hc3NpZ25cbiAgICAsIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gYSh7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cyhhKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0S2V5cyAgICA9ICQuZ2V0S2V5c1xuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9sc1xuICAgICwgaXNFbnVtICAgICA9ICQuaXNFbnVtO1xuICB3aGlsZSgkJGxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdCgkJFtpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufSA6IE9iamVjdC5hc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3QtYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==