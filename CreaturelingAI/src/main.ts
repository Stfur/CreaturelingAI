import { profiler } from "./external/screeps-profiler";

function errGuard(foo: () => void)
  {
  try
    {
    foo();
    }
  catch(err)
    {
    console.log('<font color="#ff3333" type="highlight">' + err.stack + '</font>');
    }
  }

profiler.enable();

module.exports.loop = function() {
  profiler.wrap(function()
  {
  console.log('rawr' Game.time);
  });
  }
