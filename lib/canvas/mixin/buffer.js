'use strict';

function createElementBuffer(data) {
  var _context = this.context,
      ELEMENT_ARRAY_BUFFER = _context.ELEMENT_ARRAY_BUFFER,
      STATIC_DRAW = _context.STATIC_DRAW,
      target = ELEMENT_ARRAY_BUFFER,
      usage = STATIC_DRAW,
      uint16Array = new Uint16Array(data),
      elementBuffer = this.context.createBuffer();


  this.context.bindBuffer(target, elementBuffer);

  this.context.bufferData(target, uint16Array, usage);

  return elementBuffer;
}

function bindElementBuffer(elementBuffer) {
  var ELEMENT_ARRAY_BUFFER = this.context.ELEMENT_ARRAY_BUFFER,
      target = ELEMENT_ARRAY_BUFFER;


  this.context.bindBuffer(target, elementBuffer);
}

function createBuffer(data) {
  var _context2 = this.context,
      ARRAY_BUFFER = _context2.ARRAY_BUFFER,
      STATIC_DRAW = _context2.STATIC_DRAW,
      target = ARRAY_BUFFER,
      usage = STATIC_DRAW,
      buffer = this.context.createBuffer(),
      float32Array = new Float32Array(data);


  this.context.bindBuffer(target, buffer);

  this.context.bufferData(target, float32Array, usage);

  return buffer;
}

function bindBuffer(buffer, attributeLocation, components) {
  var _context3 = this.context,
      ARRAY_BUFFER = _context3.ARRAY_BUFFER,
      FLOAT = _context3.FLOAT,
      target = ARRAY_BUFFER,
      type = FLOAT,
      normalize = false,
      stride = 0,
      offset = 0;


  this.context.bindBuffer(target, buffer);

  this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);

  this.context.enableVertexAttribArray(attributeLocation);
}

module.exports = {
  createElementBuffer: createElementBuffer,
  bindElementBuffer: bindElementBuffer,
  createBuffer: createBuffer,
  bindBuffer: bindBuffer
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jYW52YXMvbWl4aW4vYnVmZmVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnRCdWZmZXIiLCJkYXRhIiwiY29udGV4dCIsIkVMRU1FTlRfQVJSQVlfQlVGRkVSIiwiU1RBVElDX0RSQVciLCJ0YXJnZXQiLCJ1c2FnZSIsInVpbnQxNkFycmF5IiwiVWludDE2QXJyYXkiLCJlbGVtZW50QnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiYmluZEJ1ZmZlciIsImJ1ZmZlckRhdGEiLCJiaW5kRWxlbWVudEJ1ZmZlciIsIkFSUkFZX0JVRkZFUiIsImJ1ZmZlciIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImF0dHJpYnV0ZUxvY2F0aW9uIiwiY29tcG9uZW50cyIsIkZMT0FUIiwidHlwZSIsIm5vcm1hbGl6ZSIsInN0cmlkZSIsIm9mZnNldCIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFNBQVNBLG1CQUFULENBQTZCQyxJQUE3QixFQUFtQztBQUFBLGlCQUNhLEtBQUtDLE9BRGxCO0FBQUEsTUFDekJDLG9CQUR5QixZQUN6QkEsb0JBRHlCO0FBQUEsTUFDSEMsV0FERyxZQUNIQSxXQURHO0FBQUEsTUFFM0JDLE1BRjJCLEdBRWxCRixvQkFGa0I7QUFBQSxNQUczQkcsS0FIMkIsR0FHbkJGLFdBSG1CO0FBQUEsTUFJM0JHLFdBSjJCLEdBSWIsSUFBSUMsV0FBSixDQUFnQlAsSUFBaEIsQ0FKYTtBQUFBLE1BSzNCUSxhQUwyQixHQUtYLEtBQUtQLE9BQUwsQ0FBYVEsWUFBYixFQUxXOzs7QUFPakMsT0FBS1IsT0FBTCxDQUFhUyxVQUFiLENBQXdCTixNQUF4QixFQUFnQ0ksYUFBaEM7O0FBRUEsT0FBS1AsT0FBTCxDQUFhVSxVQUFiLENBQXdCUCxNQUF4QixFQUFnQ0UsV0FBaEMsRUFBNkNELEtBQTdDOztBQUVBLFNBQU9HLGFBQVA7QUFDRDs7QUFFRCxTQUFTSSxpQkFBVCxDQUEyQkosYUFBM0IsRUFBMEM7QUFDbEMsTUFBRU4sb0JBQUYsR0FBMkIsS0FBS0QsT0FBaEMsQ0FBRUMsb0JBQUY7QUFBQSxNQUNBRSxNQURBLEdBQ1NGLG9CQURUOzs7QUFHTixPQUFLRCxPQUFMLENBQWFTLFVBQWIsQ0FBd0JOLE1BQXhCLEVBQWdDSSxhQUFoQztBQUNEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JULElBQXRCLEVBQTRCO0FBQUEsa0JBQ1ksS0FBS0MsT0FEakI7QUFBQSxNQUNsQlksWUFEa0IsYUFDbEJBLFlBRGtCO0FBQUEsTUFDSlYsV0FESSxhQUNKQSxXQURJO0FBQUEsTUFFcEJDLE1BRm9CLEdBRVhTLFlBRlc7QUFBQSxNQUdwQlIsS0FIb0IsR0FHWkYsV0FIWTtBQUFBLE1BSXBCVyxNQUpvQixHQUlYLEtBQUtiLE9BQUwsQ0FBYVEsWUFBYixFQUpXO0FBQUEsTUFLcEJNLFlBTG9CLEdBS0wsSUFBSUMsWUFBSixDQUFpQmhCLElBQWpCLENBTEs7OztBQU8xQixPQUFLQyxPQUFMLENBQWFTLFVBQWIsQ0FBd0JOLE1BQXhCLEVBQWdDVSxNQUFoQzs7QUFFQSxPQUFLYixPQUFMLENBQWFVLFVBQWIsQ0FBd0JQLE1BQXhCLEVBQWdDVyxZQUFoQyxFQUE4Q1YsS0FBOUM7O0FBRUEsU0FBT1MsTUFBUDtBQUNEOztBQUVELFNBQVNKLFVBQVQsQ0FBb0JJLE1BQXBCLEVBQTRCRyxpQkFBNUIsRUFBK0NDLFVBQS9DLEVBQTJEO0FBQUEsa0JBQ3pCLEtBQUtqQixPQURvQjtBQUFBLE1BQ2pEWSxZQURpRCxhQUNqREEsWUFEaUQ7QUFBQSxNQUNuQ00sS0FEbUMsYUFDbkNBLEtBRG1DO0FBQUEsTUFFbkRmLE1BRm1ELEdBRTFDUyxZQUYwQztBQUFBLE1BR25ETyxJQUhtRCxHQUc1Q0QsS0FINEM7QUFBQSxNQUluREUsU0FKbUQsR0FJdkMsS0FKdUM7QUFBQSxNQUtuREMsTUFMbUQsR0FLMUMsQ0FMMEM7QUFBQSxNQU1uREMsTUFObUQsR0FNMUMsQ0FOMEM7OztBQVF6RCxPQUFLdEIsT0FBTCxDQUFhUyxVQUFiLENBQXdCTixNQUF4QixFQUFnQ1UsTUFBaEM7O0FBRUEsT0FBS2IsT0FBTCxDQUFhdUIsbUJBQWIsQ0FBaUNQLGlCQUFqQyxFQUFvREMsVUFBcEQsRUFBZ0VFLElBQWhFLEVBQXNFQyxTQUF0RSxFQUFpRkMsTUFBakYsRUFBeUZDLE1BQXpGOztBQUVBLE9BQUt0QixPQUFMLENBQWF3Qix1QkFBYixDQUFxQ1IsaUJBQXJDO0FBQ0Q7O0FBRURTLE9BQU9DLE9BQVAsR0FBaUI7QUFDZjVCLHVCQUFxQkEsbUJBRE47QUFFZmEscUJBQW1CQSxpQkFGSjtBQUdmSCxnQkFBY0EsWUFIQztBQUlmQyxjQUFZQTtBQUpHLENBQWpCIiwiZmlsZSI6ImJ1ZmZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSLFxuICAgICAgICB1c2FnZSA9IFNUQVRJQ19EUkFXLFxuICAgICAgICB1aW50MTZBcnJheSA9IG5ldyBVaW50MTZBcnJheShkYXRhKSxcbiAgICAgICAgZWxlbWVudEJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGVsZW1lbnRCdWZmZXIpO1xuXG4gIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRhcmdldCwgdWludDE2QXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gZWxlbWVudEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gYmluZEVsZW1lbnRCdWZmZXIoZWxlbWVudEJ1ZmZlcikge1xuICBjb25zdCB7IEVMRU1FTlRfQVJSQVlfQlVGRkVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEVMRU1FTlRfQVJSQVlfQlVGRkVSO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcihkYXRhKSB7XG4gIGNvbnN0IHsgQVJSQVlfQlVGRkVSLCBTVEFUSUNfRFJBVyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICB0YXJnZXQgPSBBUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKSxcbiAgICAgICAgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShkYXRhKTtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCBmbG9hdDMyQXJyYXksIHVzYWdlKTtcblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kQnVmZmVyKGJ1ZmZlciwgYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIEZMT0FUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdHlwZSA9IEZMT0FULFxuICAgICAgICBub3JtYWxpemUgPSBmYWxzZSxcbiAgICAgICAgc3RyaWRlID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMDtcblxuICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0YXJnZXQsIGJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIoYXR0cmlidXRlTG9jYXRpb24sIGNvbXBvbmVudHMsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQpO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVMb2NhdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVFbGVtZW50QnVmZmVyOiBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcjogYmluZEVsZW1lbnRCdWZmZXIsXG4gIGNyZWF0ZUJ1ZmZlcjogY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyOiBiaW5kQnVmZmVyXG59O1xuIl19