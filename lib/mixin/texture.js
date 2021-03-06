'use strict';

function createTexture(image) {
			var _context = this.context,
			    RGBA = _context.RGBA,
			    LINEAR = _context.LINEAR,
			    UNSIGNED_BYTE = _context.UNSIGNED_BYTE,
			    TEXTURE_2D = _context.TEXTURE_2D,
			    TEXTURE_MIN_FILTER = _context.TEXTURE_MIN_FILTER,
			    target = TEXTURE_2D,
			    level = 0,
			    internalFormat = RGBA,
			    format = RGBA,
			    type = UNSIGNED_BYTE,
			    pname = TEXTURE_MIN_FILTER,
			    param = LINEAR,
			    texture = this.context.createTexture();


			this.context.bindTexture(target, texture);

			this.context.texImage2D(target, level, internalFormat, format, type, image);

			this.context.texParameteri(target, pname, param);
}

function activateTexture(target) {
			this.context.activeTexture(target);
}

module.exports = {
			createTexture: createTexture,
			activateTexture: activateTexture
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9taXhpbi90ZXh0dXJlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVRleHR1cmUiLCJpbWFnZSIsImNvbnRleHQiLCJSR0JBIiwiTElORUFSIiwiVU5TSUdORURfQllURSIsIlRFWFRVUkVfMkQiLCJURVhUVVJFX01JTl9GSUxURVIiLCJ0YXJnZXQiLCJsZXZlbCIsImludGVybmFsRm9ybWF0IiwiZm9ybWF0IiwidHlwZSIsInBuYW1lIiwicGFyYW0iLCJ0ZXh0dXJlIiwiYmluZFRleHR1cmUiLCJ0ZXhJbWFnZTJEIiwidGV4UGFyYW1ldGVyaSIsImFjdGl2YXRlVGV4dHVyZSIsImFjdGl2ZVRleHR1cmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBLGtCQUMyQyxLQUFLQyxPQURoRDtBQUFBLE9BQ3JCQyxJQURxQixZQUNyQkEsSUFEcUI7QUFBQSxPQUNmQyxNQURlLFlBQ2ZBLE1BRGU7QUFBQSxPQUNQQyxhQURPLFlBQ1BBLGFBRE87QUFBQSxPQUNRQyxVQURSLFlBQ1FBLFVBRFI7QUFBQSxPQUNvQkMsa0JBRHBCLFlBQ29CQSxrQkFEcEI7QUFBQSxPQUUxQkMsTUFGMEIsR0FFakJGLFVBRmlCO0FBQUEsT0FHMUJHLEtBSDBCLEdBR2xCLENBSGtCO0FBQUEsT0FJMUJDLGNBSjBCLEdBSVRQLElBSlM7QUFBQSxPQUsxQlEsTUFMMEIsR0FLakJSLElBTGlCO0FBQUEsT0FNMUJTLElBTjBCLEdBTW5CUCxhQU5tQjtBQUFBLE9BTzFCUSxLQVAwQixHQU9sQk4sa0JBUGtCO0FBQUEsT0FRMUJPLEtBUjBCLEdBUWxCVixNQVJrQjtBQUFBLE9BUzFCVyxPQVQwQixHQVNoQixLQUFLYixPQUFMLENBQWFGLGFBQWIsRUFUZ0I7OztBQVc3QixRQUFLRSxPQUFMLENBQWFjLFdBQWIsQ0FBeUJSLE1BQXpCLEVBQWlDTyxPQUFqQzs7QUFFQSxRQUFLYixPQUFMLENBQWFlLFVBQWIsQ0FBd0JULE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsY0FBdkMsRUFBdURDLE1BQXZELEVBQStEQyxJQUEvRCxFQUFxRVgsS0FBckU7O0FBRUEsUUFBS0MsT0FBTCxDQUFhZ0IsYUFBYixDQUEyQlYsTUFBM0IsRUFBbUNLLEtBQW5DLEVBQTBDQyxLQUExQztBQUNBOztBQUVELFNBQVNLLGVBQVQsQ0FBeUJYLE1BQXpCLEVBQWlDO0FBQUUsUUFBS04sT0FBTCxDQUFha0IsYUFBYixDQUEyQlosTUFBM0I7QUFBcUM7O0FBRXhFYSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z0QiwrQkFEZTtBQUVmbUI7QUFGZSxDQUFqQiIsImZpbGUiOiJ0ZXh0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlKSB7XG5cdGNvbnN0IHsgUkdCQSwgTElORUFSLCBVTlNJR05FRF9CWVRFLCBURVhUVVJFXzJELCBURVhUVVJFX01JTl9GSUxURVIgfSA9IHRoaXMuY29udGV4dCxcblx0XHRcdFx0dGFyZ2V0ID0gVEVYVFVSRV8yRCxcblx0XHRcdFx0bGV2ZWwgPSAwLFxuXHRcdFx0XHRpbnRlcm5hbEZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdGZvcm1hdCA9IFJHQkEsXG5cdFx0XHRcdHR5cGUgPSBVTlNJR05FRF9CWVRFLFxuXHRcdFx0XHRwbmFtZSA9IFRFWFRVUkVfTUlOX0ZJTFRFUixcblx0XHRcdFx0cGFyYW0gPSBMSU5FQVIsXG5cdFx0XHRcdHRleHR1cmUgPSB0aGlzLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xuXG5cdHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleHR1cmUpO1xuXG5cdHRoaXMuY29udGV4dC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltYWdlKTtcblxuXHR0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaSh0YXJnZXQsIHBuYW1lLCBwYXJhbSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGV4dHVyZSh0YXJnZXQpIHsgdGhpcy5jb250ZXh0LmFjdGl2ZVRleHR1cmUodGFyZ2V0KTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlVGV4dHVyZSxcbiAgYWN0aXZhdGVUZXh0dXJlXG59O1xuIl19