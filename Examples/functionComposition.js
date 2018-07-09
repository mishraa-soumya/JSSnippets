/**
 * 
 */

const curry = fn => (...args) => fn.bind(null, ...args);

const map = curry((fn, arr) => arr.map(fn));

const join = curry((str, arr) => arr.join(str));

const toLowerCase = str => str.toLowerCase();

const split = curry((splitOn, str) => str.split(splitOn));

/**
* @description function composition in React JS 
*/

const mapStateToProps = state => ({
    a: state.a,
    b: state.b
});

const mapDispatchToProps = dispatch => (bindActionCreators({Actions},dispatch));

connect(mapStateToProps, mapDispatchToProps)(ContainerComponent)

function connect(...Args){
    Args.map((func) => {
              
    })
}



const toSlug = input => encodeURIComponent(
    input.split(' ')
    .map(str => str.toLowerCase())
    .join('-')
);

const toSlug = input => encodeURIComponent(
    join('-')(
      map(toLowerCase)(
        split(' ')(input)
      )
    )
  );
  
console.log(toSlug('JS Cheerleader')); // 'js-cheerleader'

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

/**
 * @description Best Example to understand Higher - Order Function & Function Composition
*/

// ES6 version
const characters = [
    {name: 'Luke Skywalker', img: 'http://example.com/img/luke.jpg', species: 'human'},
    {name: 'Han Solo', img: 'http://example.com/img/han.jpg', species: 'human'},
    {name: 'Leia Organa', img: 'http://example.com/img/leia.jpg', species: 'human'},
    {name: 'Chewbacca', img: 'http://example.com/img/chewie.jpg', species: 'wookie'}
  ];
      
  const humans = data => data.filter(character => character.species === 'human');
  const images = data => data.map(character => character.img);
  const compose = (func1, func2) => data => func2(func1(data));
  const displayCharacterImages = compose(humans, images); 
      
  console.log(displayCharacterImages(characters));
  
/* Logs out the following array
    [  "http://example.com/img/luke.jpg", 
       "http://example.com/img/han.jpg", 
       "http://example.com/img/leia.jpg"
    ] 
*/

const state = {
    a: 'Soumya',
    b: 'Heena'
}

const dispatch = {
    funcA: function(a){
        console.log(a);
    },
    funcB: function(b){
        console.log(b);
    }
}
const mapStateToProps = (state) => ({
    a: state.a,
    b: state.b
});

const mapDispatchToProps = dispatch => ({
    funcA: dispatch.funcA,
    funcB: dispatch.funcB
});

class ContainerComponent {
    
}

connect(mapStateToProps, mapDispatchToProps)(ContainerComponent)

const connect = (func1, func2) => (data) => {
 return func2(func1(data))
}


  