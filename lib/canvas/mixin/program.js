'use strict';

function createProgram(vertexShader, fragmentShader) {
  var program = this.context.createProgram();

  this.context.attachShader(program, vertexShader);
  this.context.attachShader(program, fragmentShader);

  this.context.linkProgram(program);

  return program;
}

function useProgram(program) {
  this.context.useProgram(program);
}

module.exports = {
  createProgram: createProgram,
  useProgram: useProgram
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jYW52YXMvbWl4aW4vcHJvZ3JhbS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVQcm9ncmFtIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJwcm9ncmFtIiwiY29udGV4dCIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwidXNlUHJvZ3JhbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLFlBQXZCLEVBQXFDQyxjQUFyQyxFQUFxRDtBQUNuRCxNQUFNQyxVQUFVLEtBQUtDLE9BQUwsQ0FBYUosYUFBYixFQUFoQjs7QUFFQSxPQUFLSSxPQUFMLENBQWFDLFlBQWIsQ0FBMEJGLE9BQTFCLEVBQW1DRixZQUFuQztBQUNBLE9BQUtHLE9BQUwsQ0FBYUMsWUFBYixDQUEwQkYsT0FBMUIsRUFBbUNELGNBQW5DOztBQUVBLE9BQUtFLE9BQUwsQ0FBYUUsV0FBYixDQUF5QkgsT0FBekI7O0FBRUEsU0FBT0EsT0FBUDtBQUNEOztBQUVELFNBQVNJLFVBQVQsQ0FBb0JKLE9BQXBCLEVBQTZCO0FBQzNCLE9BQUtDLE9BQUwsQ0FBYUcsVUFBYixDQUF3QkosT0FBeEI7QUFDRDs7QUFFREssT0FBT0MsT0FBUCxHQUFpQjtBQUNmVCxpQkFBZUEsYUFEQTtBQUVmTyxjQUFZQTtBQUZHLENBQWpCIiwiZmlsZSI6InByb2dyYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIHVzZVByb2dyYW0ocHJvZ3JhbSkge1xuICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbShwcm9ncmFtKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZVByb2dyYW06IGNyZWF0ZVByb2dyYW0sXG4gIHVzZVByb2dyYW06IHVzZVByb2dyYW1cbn07XG4iXX0=