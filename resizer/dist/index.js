var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import "./index.css";
export var Resizer = function (_a) {
    var children = _a.children;
    var wrapper = useRef(null);
    var _b = useState(undefined), height = _b[0], setHeight = _b[1];
    var _c = useState(undefined), width = _c[0], setWidth = _c[1];
    var _d = useState(null), startX = _d[0], setStartX = _d[1];
    var _e = useState(null), startWidth = _e[0], setStartWidth = _e[1];
    var _f = useState(null), startY = _f[0], setStartY = _f[1];
    var _g = useState(null), startHeight = _g[0], setStartHeight = _g[1];
    var onMouseMoveHandler = function (e) {
        e.preventDefault();
        if (startX) {
            var newWidth = Math.max(startWidth + e.clientX - startX, 0);
            setWidth(newWidth);
        }
        if (startY) {
            var newHeight = Math.max(startHeight + e.clientY - startY, 0);
            setHeight(newHeight);
        }
    };
    var onMouseUpHandler = function (e) {
        setStartX(null);
        setStartY(null);
        setStartWidth(null);
        setStartHeight(null);
        window.removeEventListener("mousemove", onMouseMoveHandler);
        window.removeEventListener("mouseup", onMouseUpHandler);
    };
    useEffect(function () {
        if (!wrapper.current)
            return;
        setHeight(wrapper.current.offsetHeight);
        setWidth(wrapper.current.offsetWidth);
    }, []);
    useEffect(function () {
        if (startX || startY) {
            window.addEventListener("mousemove", onMouseMoveHandler);
            window.addEventListener("mouseup", onMouseUpHandler);
        }
    }, [startX, startY]);
    return (_jsxs("div", __assign({ className: "resizer-wrapper", ref: wrapper, style: { width: width, height: height } }, { children: [_jsx("div", { className: "resizer-handle resizer-handle-x", onMouseDown: function (e) {
                    setStartX(e.clientX);
                    setStartWidth(width);
                } }), _jsx("div", { className: "resizer-handle resizer-handle-y", onMouseDown: function (e) {
                    setStartY(e.clientY);
                    setStartHeight(height);
                } }), _jsx("div", { className: "resizer-handle resizer-handle-xy", onMouseDown: function (e) {
                    setStartX(e.clientX);
                    setStartWidth(width);
                    setStartY(e.clientY);
                    setStartHeight(height);
                } }), children] })));
};
